import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { getLoginUser } from "@/actions/auth-service";
import { getBlockedUsers } from "@/actions/block-service";

export async function GET(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    const { userId } = auth();
    const { postId } = params;
    const loginUser = await getLoginUser();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });
    if (!loginUser) return new NextResponse("Unauthorized", { status: 401 });

    const blockedUsers = await getBlockedUsers(loginUser?.id);
    const comments = await db.comment.findMany({
      where: {
        postId,
        commenterId: {
          notIn: blockedUsers?.map((block) => block.blockedId),
        },
      },
      include: {
        commenter: {
          select: {
            id: true,
            username: true,
            profileImageUrl: true,
          },
        },
      },
    });

    return NextResponse.json(comments);
  } catch (error) {
    console.log("[COMMENT_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function POST(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    const { userId } = auth();
    const { postId } = params;
    const { comment } = await req.json();
    const loginUser = await getLoginUser();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });
    if (!loginUser) return new NextResponse("Unauthorized", { status: 401 });
    
    const commentToPost = await db.comment.create({
      data: {
        comment,
        commenterId: loginUser?.id,
        postId,
      },
    });
    
    await db.post.update({
      where: {
        id: postId,
      },
      data: {
        views: {
          increment: 1,
        }
      }
    })

    return NextResponse.json({ commentToPost }, { status: 200 });
  } catch (error) {
    console.log("[COMMENT_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

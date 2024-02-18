import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { getLoginUser } from "@/actions/auth-service";

export async function GET(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    const { postId } = params;
    const loginUser = await getLoginUser();
    const { userId } = auth();

    if (!userId || !loginUser) return new NextResponse("Unauthorized", { status: 401 });


    const post = await db.post.findUnique({
      where: { id: postId },
    });

    if (!post) return new NextResponse("Post Not Found", { status: 404 });

    const likeStatus = await db.like.findFirst({
        where: {
            userId: loginUser?.id,
            postId
        }
    });

    
    return new NextResponse(JSON.stringify(likeStatus !== null), { status: 200 });
  } catch (error) {
    console.log("[LIKE_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function POST(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    const { postId } = params;
    const loginUser = await getLoginUser();
    const { userId } = auth();

    if (!userId || !loginUser) return new NextResponse("Unauthorized", { status: 401 });

    const post = await db.post.findUnique({
      where: { id: postId },
    });

    if (!post) return new NextResponse("Post Not Found", { status: 404 });

    const existingLike = await db.like.findFirst({
      where: {
        userId: loginUser?.id,
        postId,
      },
    });

    if (existingLike) {
      await db.like.delete({
        where: {
          id: existingLike.id,
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

      return new NextResponse("Post UnLiked", { status: 200 });
    } else {
      await db.like.create({
        data: {
          userId: loginUser?.id,
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

      return new NextResponse("Post Liked", { status: 200 });
    }
  } catch (error) {
    console.log("[LIKE_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

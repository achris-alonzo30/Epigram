import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { getLoginUser } from "@/actions/auth-service";

export async function POST(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    const { postId } = params;
    const loginUser = await getLoginUser();
    const { userId} = auth();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    if (loginUser?.userId === userId) return new NextResponse("Unauthorized", { status: 401 });
    
    // Find the post to be save and get all its data
    const post = await db.post.findUnique({
      where: { 
        id: postId,
        creatorId: loginUser?.id
       },
    });

    if (!post) return new NextResponse("Post Not Found", { status: 404 });

    // Check first if the post is already saved
    const existingSave = await db.save.findFirst({
      where: {
        userId: loginUser?.id,
        postId
      }
    })

    if (existingSave) return new NextResponse("Post Already Saved", { status: 400 });


    // Proceed on saving the post
    const savePost = await db.save.create({
      data: {
        postId: postId!,
        userId: loginUser?.id!,
        isSaved: true
      },
      include: {
        post: true
      }
    });

    return NextResponse.json({ savePost }, { status: 200 });
  } catch (error) {
    console.log(["[SAVE_POST]", error]);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    const { postId } = params;
    const { userId} = auth();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const deletePost = await db.post.delete({
      where: {
        id: postId,
      },
    });

    return NextResponse.json({ deletePost }, { status: 200 });
  } catch (error) {
    console.log(["[DELETE_POST]", error]);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
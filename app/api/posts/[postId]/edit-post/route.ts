import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    const { postId } = params;
    const values = await req.json();
    const { userId} = auth();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const updatePost = await db.post.update({
      where: {
        id: postId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json({ updatePost }, { status: 200 });
  } catch (error) {
    console.log(["[UPDATE_POST]", error]);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
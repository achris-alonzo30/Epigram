import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/get-current-user";

export async function POST(req: Request) {
  try {
    const { caption, postContent, tags } = await req.json();
    const user = await getCurrentUser();

    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    // Split the tags string into an array
    // const tagsArray = tags.split(",").map((tag: string) => tag.trim());

    const userPost = await db.post.create({
      data: {
        creatorId: user.id,
        caption,
        tags,
        postImageUrl: postContent,
        views: 0,
        isPublished: true,
      },
    });

    return NextResponse.json({ userPost }, { status: 201 });
  } catch (error) {
    console.log("[CREATE_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

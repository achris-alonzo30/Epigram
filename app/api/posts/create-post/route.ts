import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { getLoginUser } from "@/actions/auth-service";

export async function POST(req: Request) {
  try {
    const { caption, postImageUrl, tags } = await req.json();
    const user = await getLoginUser();

    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    // Split the tags string into an array
    // const tagsArray = tags.split(",").map((tag: string) => tag.trim());

    const userPost = await db.post.create({
      data: {
        creatorId: user.id,
        caption,
        tags,
        postImageUrl,
        views: 0,
      },
    });

    return NextResponse.json({ userPost }, { status: 201 });
  } catch (error) {
    console.log("[CREATE_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

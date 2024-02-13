import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params;
    const { username, profileImageUrl, bio } = await req.json();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const editProfile = await db.user.update({
      where: {
        id: userId,
      },
      data: {
        username,
        profileImageUrl,
        bio,
      },
    });

    return NextResponse.json(editProfile);
  } catch (error) {
    console.log("[EDIT_PROFILE: CUSTOMIZATION]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

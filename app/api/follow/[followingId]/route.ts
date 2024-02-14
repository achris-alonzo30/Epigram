import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { getLoginUser } from "@/actions/auth-service";
import { STATUS } from "@prisma/client";

export async function POST(
  req: Request,
  { params }: { params: { followingId: string } }
) {
  try {
    const { followingId } = params;
    const loginUser = await getLoginUser();
    const { userId } = auth();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const followRequest = await db.follow.create({
      data: {
        followingId,
        followerId: loginUser?.id!,
        status: STATUS.PENDING,
      },
    });

    return NextResponse.json({ followRequest }, { status: 200 });
  } catch (error) {
    console.log("[FOLLOW_REQUEST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { followingId: string } }
) {
  try {
    const { followingId } = params;
    const loginUser = await getLoginUser();
    const { userId } = auth();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const followRequest = await db.follow.deleteMany({
      where: {
        followingId,
        followerId: loginUser?.id!,
      },
    });

    return NextResponse.json({ followRequest }, { status: 200 });
  } catch (error) {
    console.log("[UNFOLLOW_REQUEST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { followerId: string } }
) {
  try {
    const { followerId } = params;
    const loginUser = await getLoginUser();
    const { userId } = auth();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    // Get the existing follow data between the logged in user and the user being followed
    const existingFollowRequest = await db.follow.findFirst({
      where: {
        followerId,
        followingId: loginUser?.id!,
        status: STATUS.PENDING,
      },
    });

    if (!existingFollowRequest)
      return new NextResponse("Not Found", { status: 404 });

    const updateFollowRequest = await db.follow.update({
      where: {
        id: existingFollowRequest.id,
      },
      data: {
        status: STATUS.ACCEPTED,
      },
    });
    
    // Create a new follow relationship from the user being followed to the logged in user
    await db.follow.create({
      data: {
        followerId: loginUser?.id!,
        followingId: existingFollowRequest.followerId,
        status: STATUS.ACCEPTED,
      },
    });

    return NextResponse.json({ updateFollowRequest }, { status: 200 });
  } catch (error) {
    console.log("[FOLLOW_STATUS_UPDATE]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

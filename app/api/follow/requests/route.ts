import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { STATUS } from "@prisma/client";
import { NextResponse } from "next/server";
import { getLoginUser } from "@/actions/auth-service";


export async function GET(req: Request) {
  try {
    const { userId } = auth();
    const loginUser = await getLoginUser();

    if (!userId || !loginUser)
      return new NextResponse("Unauthorized", { status: 401 });

    const followRequests = await db.follow.findMany({
      where: {
        followingId: loginUser?.id,
        status: STATUS.PENDING,
      },
      include: {
        follower: {
          select: {
            id: true,
            username: true,
            profileImageUrl: true,
          },
        },
      },
    });

    return NextResponse.json({ followRequests }, { status: 200 });
  } catch (error) {
    console.log("[GET_FOLLOW_REQUESTS]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

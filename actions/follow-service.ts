import { db } from "@/lib/db";
import { STATUS } from "@prisma/client";
import { getLoginUser } from "./auth-service";


export const getFollowRequests = async () => {
  try {
    const loginUser = await getLoginUser();

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

    return followRequests;
  } catch (error) {
    console.log("[GET_FOLLOW_REQUESTS]", error);
    return null;
  }
};



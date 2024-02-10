
import { db } from "@/lib/db";
import { STATUS } from "@prisma/client";
import { getLoginUser } from "./get-login-user";


export const getFollowRequests = async () => {
    try {
        const loginUser = await getLoginUser();

        const followRequests = await db.follow.findMany({
            where: {
                followingId: loginUser?.id,
                status: STATUS.PENDING
            },
            include: {
                follower: {
                    select: {
                        userId: true,
                        username: true
                    }
                }
            }
        })

        return followRequests;
    } catch (error) {
        console.log("[GET_FOLLOW_REQUESTS]", error)
        return null;
    }
}
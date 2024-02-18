import { db } from "@/lib/db";
import { getBlockedUsers } from "./block-service";


export const getAllUsersInDb = async (userId: string) => {
    try {
        const blockedUsers = await getBlockedUsers(userId);
        const users = await db.user.findMany({
            where: {
                NOT: {
                    id: {
                        in: blockedUsers?.map((block) => block.blockedId),
                    },
                },
            },
            select: {
                id: true,
                username: true,
                profileImageUrl: true,
            }
        });

        return users;

    } catch (error) {
        console.log("[GET_ALL_USERS]", error);
        return null;
    }
}
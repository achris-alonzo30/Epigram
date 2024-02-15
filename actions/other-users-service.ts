import { db } from "@/lib/db";
import { getLoginUser } from "./auth-service";
import { getBlockedUsers } from "./block-service";

export const getAllUsers = async () => {
  try {
    const currentLoginUser = await getLoginUser();

    if (!currentLoginUser) return null;

    const blockedUsers = await getBlockedUsers(currentLoginUser?.id);

    const recentUsers = await db.user.findMany({
      take: 2,
      orderBy: {
        createdAt: "desc",
      },
      where: {
        AND: [
          {
            id: {
              not: currentLoginUser?.id
            }
          },
          {
            id: {
              notIn: blockedUsers?.map((block) => block.blockedId),
            }
          },
          {
            NOT: {
              blocking: {
                some: {
                  blockedId: currentLoginUser?.id
                }
              }
            }
          }
        ]
      },
    });

    return recentUsers;
  } catch (error) {
    console.log("[GET_ALL_USERS]", error);
    return null;
  }
};

import { db } from "@/lib/db";
import { getLoginUser } from "./auth-service";

export const isBlockedByUser = async (id: string) => {
  try {
    const loginUser = await getLoginUser();

    const otherUser = await db.user.findUnique({
      where: { id },
    });

    if (otherUser?.id === loginUser?.id)
      throw new Error("Cannot block yourself");

    const existingBlock = await db.block.findUnique({
      where: {
        blockerId_blockedId: {
          blockedId: loginUser?.id!,
          blockerId: otherUser?.id!,
        },
      },
    });

    return !!existingBlock;
  } catch (error) {
    console.log("[IS_BLOCKED_BY_USER]", error);
    return null;
  }
};

export const getBlockedUsers = async (id: string) => {
  try {
    if ( !id ) return null;

    const blocked = await db.block.findMany({
      where: {
        blockerId: id,
      },
      include: {
        blocked: true,
      },
    });

    return blocked;
  } catch (error) {
    console.log("[GET_BLOCKED_USERS]", error);
    return null;
  }
};

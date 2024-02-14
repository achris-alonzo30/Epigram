import { db } from "@/lib/db";
import { getLoginUser } from "./auth-service";

export const getAllUsers = async () => {
  try {
    const currentLoginUser = await getLoginUser();

    const recentUsers = await db.user.findMany({
      take: 2,
      orderBy: {
        createdAt: "desc",
      },
      where: {
        id: {
          not: currentLoginUser?.id!,
        },
      },
    });

    return recentUsers;
  } catch (error) {
    console.log("[GET_ALL_USERS]", error);
    return null;
  }
};

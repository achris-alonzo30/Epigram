import { db } from "@/lib/db";

export const getProfileDetails = async (id: string) => {
  try {
    // Not complete
    const user = await db.user.findUnique({
      where: {
        id,
      },
      include: {
        posts: true,
        following: true,
        followers: true,
      },
    });

    return user;
  } catch (error) {
    console.log("[GET_LOGIN_USER_POSTS]", error);
    return null;
  }
};

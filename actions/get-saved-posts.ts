import { db } from "@/lib/db";

export const getSavedPosts = async (postId: string) => {
  try {
    const posts = await db.save.findMany({
      where: {
        postId,
      },
    });

    return posts;
  } catch (error) {
    console.log("[GET_SAVED_POSTS]", error);
    return null;
  }
};

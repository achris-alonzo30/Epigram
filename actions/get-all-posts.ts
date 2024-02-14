import { db } from "@/lib/db";

export const getAllPosts = async (id: string) => {
  try {
    // Query for all the posts of the current user and the users they are following
    // Include their username, profile image, and id
    const posts = await db.user.findUnique({
      where: { id },
      include: {
        posts: true,
        following: {
          include: {
            follower: {
              select: {
                id: true,
                username: true,
                profileImageUrl: true,
                posts: true,
              },
            },
          },
        },
      },
    });

    return posts;
  } catch (error) {
    console.log("[GET_ALL_POSTS]", error);
    return null;
  }
};

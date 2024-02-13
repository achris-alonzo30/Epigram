import { db } from "@/lib/db";

export const getAllPosts = async ( id: string ) => {
    try {
        const userWithFollowingPosts = await db.user.findUnique({
            where: { id },
            include: {
              posts: true,
              following: {
                include: {
                  follower: {
                    select:{
                      id: true,
                      username: true,
                      profileImageUrl: true,
                      posts: true,
                    },
                  }
                }
              },
            },
          });

       return userWithFollowingPosts;
    } catch (error) {
        console.log("[GET_ALL_POSTS]", error)
        return null;
    }
}
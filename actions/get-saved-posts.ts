import { db } from "@/lib/db"

export const getSavedPosts = async(postId: string) => {
    try {
        const user = await db.save.findMany({
            where: {
                postId
            },
            
        })

        return user;
    } catch (error) {
        console.log("[GET_SAVED_POSTS]", error)
        return null;
    }
}
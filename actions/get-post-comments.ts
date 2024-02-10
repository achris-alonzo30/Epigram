import { db } from "@/lib/db"

export const getPostComments = async(postId: string, commenterId: string) => {
    try {
        console.log("PostId:", postId)
        console.log("CommenterId:", commenterId)
        const comments = await db.comment.findMany({
            
        })

        return comments
    } catch (error) {
        console.log("[GET_POST_COMMENTS]", error)
        return null;
    }
}
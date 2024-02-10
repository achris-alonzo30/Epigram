import { db } from "@/lib/db"

export const getLoginUserPosts = async(id: string) => {
    try {
        const user = await db.user.findUnique({
            where: {
                id
            },
            include: {
                posts: true
            }
        })

        return user;
    } catch (error) {
        console.log("[GET_LOGIN_USER_POSTS]", error)
        return null;
    }
}
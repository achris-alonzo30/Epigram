import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs"

export const  getLoginUser = async() => {
    const self = await currentUser();

    if (!self?.id) return null;

    const user = await db.user.findUnique({
        where: { userId: self?.id }
    })

    return user;
}





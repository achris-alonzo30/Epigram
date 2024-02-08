import { db } from "../lib/db";
import { auth } from "@clerk/nextjs"

export async function getCurrentUser() {
    const { userId } = auth();

    if (!userId) return null;

    const currentUser = await db.user.findUnique({
        where: { userId }
    })
    
    return currentUser;
}




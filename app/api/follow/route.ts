import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { getLoginUser } from "@/actions/auth-service";


export async function GET(
    req: Request,
) {
    try {
        const { userId } = auth();
        const loginUser = await getLoginUser();

        if (!userId || !loginUser) return new NextResponse("Unauthorized", { status: 401 });
        
        const followedusers = await db.follow.findMany({
            where: {
                followerId: loginUser?.id
            },
            select: {
                followingId: true
            }
        })

        const followingIds = followedusers.map((user) => user.followingId);

        return NextResponse.json({ followingIds }, { status: 200 });
    } catch (error) {
        console.log("[GET_FOLLOWING_USERS]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { getLoginUser } from "@/actions/get-login-user";
import { db } from "@/lib/db";

export async function GET(
    req: Request,
) {
    try {
        const { userId } = auth();
        const loginUser = await getLoginUser();

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
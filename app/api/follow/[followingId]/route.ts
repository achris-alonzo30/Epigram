import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { getLoginUser } from "@/actions/get-login-user";
import { STATUS } from "@prisma/client";

export async function POST(
    req: Request,
    params : { params: { followingId: string } }
) {
    try {
        const { followingId } = params.params;
        const loginUser = await getLoginUser();
        const { userId } = auth();

        if (!userId) return new NextResponse("Unauthorized", { status: 401 });

        const followRequest = await db.follow.create({
            data: {
                followingId,
                followerId: loginUser?.id!,
                status: STATUS.PENDING
            }
        })

        return NextResponse.json({ followRequest }, { status: 200 });
    } catch (error) {
        console.log("[FOLLOW]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export async function GET(
    req: Request,
    params : { params: { followingId: string } }
) {
    try {
        const { followingId } = params.params;
        const loginUser = await getLoginUser();
        const { userId } = auth();

        if (!userId) return new NextResponse("Unauthorized", { status: 401 });

        const followedUsers = await db.follow.findMany({
            where: {
                
            }
        })
    } catch (error) {
        console.log("[GET_FOLLOW_USERS]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
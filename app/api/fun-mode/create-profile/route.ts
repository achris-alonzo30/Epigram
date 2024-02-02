import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server"

export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const { username, profileImageUrl, mode } = await req.json();

        if (!userId) return new NextResponse("Unauthorized", { status: 401 })

        const createProfile = await db.user.create({
            data: {
                userId,
                username,
                profileImageUrl
            }
        })

        const userSettings = await db.userSetting.create({
            data: {
                userId: createProfile.id,
                mode
            }
        })
        
        return NextResponse.json({createProfile, userSettings}, { status: 201} )

    } catch (error) {
        console.log("[NEW_USER: CUSTOMIZATION]", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}
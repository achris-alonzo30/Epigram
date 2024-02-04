import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server"

export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const { username, profileImageUrl } = await req.json();

        if (!userId) return new NextResponse("Unauthorized", { status: 401 })

        const createProfile = await db.user.create({
            data: {
                userId,
                username,
                profileImageUrl
            }
        });
        
        return NextResponse.json(createProfile)
    } catch (error) {
        console.log("[NEW_USER: CUSTOMIZATION]", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}
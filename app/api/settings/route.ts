import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { getLoginUser } from "@/actions/auth-service";
import { NextResponse } from "next/server"

export async function PATCH(
    req: Request
) {
    try {
        const { userId } = auth();
        const loginUser = await getLoginUser();
        const { isPrivate } = await req.json();

        if (!userId || !loginUser) return new NextResponse("Unauthorized", { status: 401 });

        const settingsUpdate = await db.user.update({
            where: {
                id: loginUser?.id
            },
            data: {
                isPrivate
            }
        })

        return NextResponse.json({ settingsUpdate }, { status: 200 })

    } catch (error) {
        console.log("[EDIT_PROFILE: CUSTOMIZATION]", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}
import { NextResponse } from "next/server"

export async function POST(
    req: Request
) {
    try {
        const { username, imgProfile, mode } = await req.json();

    } catch (error) {
        console.log("[NEW_USER: CUSTOMIZATION]", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}
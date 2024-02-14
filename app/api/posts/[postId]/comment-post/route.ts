import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { getLoginUser } from "@/actions/auth-service";

export async function POST(
    req: Request,
    params: { params: { postId: string } }
) {
    try {
        const { userId } = auth();
        const { postId } = params.params;
        const { comment } = await req.json();
        const loginUser = await getLoginUser();
        
        if (!userId) return new NextResponse("Unauthorized", { status: 401 });

        const commentToPost = await db.comment.create({
            data: {
                comment, 
                commenterId: loginUser?.id!,
                postId
            }
        })

        return NextResponse.json({ commentToPost }, { status: 200 });
    } catch (error) {
        console.log("[COMMENT_POST]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
import { db } from "@/lib/db";
import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/get-current-user";
import { MemberRole } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const { name, groupImageUrl } = await req.json();
    const user = await getCurrentUser();

    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    const group = await db.group.create({
      data: {
        userId: user.id,
        name,
        groupImageUrl,
        inviteCode: uuidv4(),
        groupMembers: {
          create: [
            {
              userId: user.id,
              role: MemberRole.ADMIN,
            },
          ],
        },
      },
    });

    return new NextResponse(JSON.stringify(group), { status: 201 });
  } catch (error) {
    console.log("[CREATE_GROUP]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

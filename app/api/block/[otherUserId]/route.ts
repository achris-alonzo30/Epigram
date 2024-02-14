import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { getLoginUser } from "@/actions/auth-service";

export async function POST(
  req: Request,
  { params }: { params: { otherUserId: string } }
) {
  try {
    const currentUser = await getLoginUser();
    const { otherUserId } = params;

    if (currentUser?.id === otherUserId)
      throw new Error("Cannot block yourself");

    const otherUser = await db.user.findUnique({ where: { id: otherUserId } });

    const existingBlock = await db.block.findUnique({
      where: {
        blockerId_blockedId: {
          blockedId: otherUser?.id!,
          blockerId: currentUser?.id!,
        },
      },
    });

    if (existingBlock) throw new Error("Already blocked");

    const block = await db.block.create({
      data: {
        blockerId: currentUser?.id!,
        blockedId: otherUser?.id!,
      },
      include: {
        blocked: true,
      },
    });

    return NextResponse.json({ block }, { status: 200 });
  } catch (error) {
    console.log("[BLOCK_USER]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { otherUserId: string } }
) {
  try {
    const currentUser = await getLoginUser();
    const { otherUserId } = params;

    if (!currentUser) return new NextResponse("Unauthorized", { status: 401 });
    if (currentUser?.id === otherUserId)
      throw new Error("Cannot unblock yourself");

    const otherUser = await db.user.findUnique({ where: { id: otherUserId } });

    if (!otherUser) throw new Error("User not found");

    const existingBlock = await db.block.findUnique({
      where: {
        blockerId_blockedId: {
          blockedId: otherUser?.id!,
          blockerId: currentUser?.id!,
        },
      },
    });

    if (!existingBlock) throw new Error("Not blocked");

    const unblock = await db.block.delete({
      where: { id: existingBlock.id },
      include: { blocked: true },
    });

    return NextResponse.json({ unblock }, { status: 200 });
  } catch (error) {
    console.log("[UNBLOCK_USER]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

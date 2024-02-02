import Link from "next/link"

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation";

import { Loader2, Plus, ListFilter } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { Navbar } from "@/components/navbar";
import { Leftbar } from "@/components/leftbar";
import { Button } from "@/components/ui/button";
import { Rightbar } from "@/components/rightbar";
import { PostCard } from "@/components/post-card";
import { TextGradient } from "@/components/animated-ui/text-gradient";

const FunModePage = async ({ params }: { params: { userId: string } }) => {
    const { userId } = auth();
    const creator = await db.user.findUnique({
        where: {
            id: params.userId
        },
        select: {
            id: true,
            userId: true,
            username: true,
            profileImageUrl: true,
            bio: true,
            backgroundImageUrl: true,
            createdAt: true,
            updatedAt: true
        }
    })!

    if (userId !== creator?.userId) return redirect("/");

    // TODO: Add error handling
    // TODO: Add loading state
    if (!creator) {
        return (
            <div className="flex flex-col items-center mx-auto my-auto justify-center">
                <TextGradient fontSize={["lg:text-4xl text-2xl"]} fontStyle="font-bold">Loading</TextGradient>
                <Loader2 className="animate-spin w-6 h-6" />
            </div>
        )
    }

    return (
        <section className="relative lg:flex h-full ">
            <Navbar creator={creator} />
            <Leftbar />
            <Rightbar />
            <main className="relative flex flex-col pt-14 w-full transition duration-300 lg:pl-64 md:pl-52 pl-0 lg:pr-64 pr-0">
                <div className="flex flex-col h-full py-10">
                    <div className="flex w-full mx-auto items-center justify-between px-2">
                        <div className="md:pl-12 pl-4">
                            <TextGradient fontSize={["lg:text-xl text-lg"]} fontStyle="font-bold">Home Feed</TextGradient>
                        </div>
                        <div className="flex items-center gap-x-2 pr-4">
                            <Button variant="ghost" className="flex items-center gap-x-2 py-1.5 transform hover:-translate-y-1 transition duration-400">
                                <Plus className="w-4 h-4" />
                                <Link href="/">Create Post</Link>
                            </Button>
                            <DropdownMenu modal={false}>
                                <DropdownMenuTrigger className="flex items-center gap-x-2 border rounded-lg bg-[#7600FF] hover:bg-[#7600FF]/90 px-4 py-1.5 text-white transform hover:-translate-y-1 transition duration-400">
                                    <ListFilter className="w-4 h-4" />
                                    Filter
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                        Date
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mx-auto lg:px-16 md:px-10 px-6 py-8">
                        {/* TODO: Implement Infinite Scrolling */}
                        <PostCard />
                    </div>
                </div>
            </main>
        </section>
    )
}

export default FunModePage;
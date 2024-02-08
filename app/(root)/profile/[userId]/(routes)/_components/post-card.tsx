"use client";

import Link from "next/link"
import Image from "next/image";
import { Post, User } from "@prisma/client";

import { MoreVertical } from "lucide-react";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

import { ToggleButtons } from "./toggle-buttons";
import { CommentForm } from "./comment-form";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";


type PostCardProps = {
    profileImageUrl: User["profileImageUrl"];
    username: User["username"];
    postImageUrl: Post["postImageUrl"];
    caption: Post["caption"];
}

export const PostCard = () => {
    // TODO: User Collapsible from shadcn-ui for comments
    // TODO: User Carousel from shadcn-ui for images
    return (
        <Card className="flex flex-col w-[350px] px-2 rounded-xl shadow-lg">
            <CardHeader className="flex flex-row justify-between items-center px-4">
                <div className="flex items-center gap-x-2">
                    <Image
                        src="/corgi.avif"
                        alt="profile"
                        height="35"
                        width="35"
                        className="rounded-full"
                    />
                    <Link href="" className="text-sm font-semibold text-zinc-500 dark:text-zinc-300 hover:dark:text-[#7600FF] hover:text-[#7600FF]">Username</Link>
                </div>
                {/* Only show this for the creator */}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <MoreVertical className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>
            <CardContent>
                {/* Add a carousel if there are more than 1 photos */}
                <Image src="/corgi.avif" alt="post" height="350" width="350" />
                {/* Add an icon indicator which index of the photo is user on */}
            </CardContent>
            <CardFooter className="flex flex-col items-start px-4 gap-y-2">
                <ToggleButtons />

                <p className="text-sm text-zinc-400 dark:text-zinc-600 line-clamp-2 text-justify tracking-tight">Caption</p>
                {/* Show the first comment but once there more than 1 comment show the "View all comments" */}
                <Link href="" className="text-sm font-semibold text-zinc-500 dark:text-zinc-300">View all 3 comments</Link>
                <CommentForm />
            </CardFooter>
        </Card>
    )
}
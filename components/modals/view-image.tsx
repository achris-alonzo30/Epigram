"use client";

import Image from "next/image"
import { Post, User } from "@prisma/client";

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ToggleButtons } from "@/app/(root)/profile/[userId]/(routes)/_components/toggle-buttons";
import { CommentForm } from "@/app/(root)/profile/[userId]/(routes)/_components/comment-form";

type ViewImageProps = {
    post: Post;
    userId: User["id"];
    username: User["username"];
    userProfileImageUrl: User["profileImageUrl"];
    children: React.ReactNode
}

export const ViewImage = ({ post, userId, username, userProfileImageUrl, children }: ViewImageProps) => {
    const tagsArray = post?.tags!.split(",");
    const formattedTags = tagsArray.map(tag => `#${tag.trim()}`);
    return (
        <Dialog>
            <DialogTrigger>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] px-2">
                <div className="w-full space-y-6 p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4">
                        <div className="sm:hidden">
                            <div className="flex flex-row items-center gap-x-2">
                            <Image src={userProfileImageUrl!} alt="corgi" width="35" height="35" className="rounded-full aspect-square object-cover" />
                            <p className="text-sm text-zinc-500 dark:text-zinc-200 font-bold hover:text-[#7600FF] transition duration-200">{username}</p>
                            </div>
                        </div>

                        <Image src={post.postImageUrl!} alt="post" width="400" height="400" className="aspect-square object-cover rounded-xl" />
                        <div className="flex flex-col justify-start gap-y-4">
                            <div className="sm:flex flex-row items-center gap-x-2 hidden">
                                <Image src={userProfileImageUrl!} alt="corgi" width="35" height="35" className="rounded-full aspect-square object-cover" />
                                <p className="text-sm text-zinc-500 dark:text-zinc-200 font-bold hover:text-[#7600FF] transition duration-200">{username}</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="p-2 flex flex-col gap-y-4">
                                    <ToggleButtons postId={post?.id} postViews={post.views} gap="sm:gap-60 gap-72" />
                                    <p className="text-sm text-zinc-500 dark:text-zinc-600 line-clamp-2 text-justify tracking-tight">
                                        {post.caption}
                                    </p>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-600 line-clamp-1 text-justify tracking-tight">
                                        {formattedTags}
                                    </p>
                                    <CommentForm post={post} userId={userId!} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
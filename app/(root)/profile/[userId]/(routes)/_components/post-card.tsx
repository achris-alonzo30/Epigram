"use client";

import Link from "next/link"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Post, User } from "@prisma/client";

import { Pencil, Trash2 } from "lucide-react";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { CommentForm } from "./comment-form";
import { ToggleButtons } from "./toggle-buttons";
import { EditPost } from "@/components/modals/edit-post";
import { DeletePost } from "@/components/modals/delete-post";

type PostCardProps = {
    user: User & {
        posts: Post[]
    },
    userId: User["id"]
}

export const PostCard = ({ user, userId }: PostCardProps) => {
    // TODO: User Collapsible from shadcn-ui for comments
    // TODO: User Carousel from shadcn-ui for images
    const router = useRouter();
    
    return (
        <div className="flex flex-col gap-y-8">
            {user.posts.map((post) => {
                const tagsArray = post?.tags!.split(",");
                const formattedTags = tagsArray.map(tag => `#${tag.trim()}`);
                return (
                    <Card className="w-[350px] px-2 rounded-xl shadow-lg dark:shadow-zinc-400 shadow-zinc-700" key={post.id}>


                        <CardHeader className="flex flex-row justify-between items-center px-4">
                            <div className="flex items-center gap-x-2">
                                <Image
                                    src={user.profileImageUrl!}
                                    alt="profile"
                                    height="35"
                                    width="35"
                                    className="rounded-full object-cover aspect-square"
                                />
                                <Link href={`/profile/${user.id}/user-profile`} className="text-sm font-semibold text-zinc-500 dark:text-zinc-300 hover:dark:text-[#7600FF] hover:text-[#7600FF]">{user.username}</Link>
                            </div>
                            {/* Only show this for the creator */}
                            {userId === user.id && (
                                <div className="flex items-center gap-x-4 ">
                                    <EditPost post={post}>
                                        <button className="-mt-1.5">
                                            <Pencil className="h-4 w-4 text-zinc-500 hover:text-zinc-400 transform hover:-translate-y-1 transition duration-400 " />
                                        </button>
                                    </EditPost>
                                    <DeletePost postId={post.id} >
                                        <button className="-mt-1.5">
                                            <Trash2 className="h-4 w-4 text-zinc-500 hover:text-zinc-400 transform hover:-translate-y-1 transition duration-400 "  />
                                        </button>
                                    </DeletePost>
                                </div>
                            )}

                        </CardHeader>


                        <CardContent>
                            {/* Add a carousel if there are more than 1 photos */}
                            <Image src={post?.postImageUrl!} alt="post" height="350" width="350" className="aspect-square w-full h-full object-cover rounded-lg" />
                            {/* Add an icon indicator which index of the photo is user on */}
                        </CardContent>

                        <CardFooter className="flex flex-col items-start px-4 gap-y-2">
                            <ToggleButtons postId={post?.id!} />
                            {/* TODO: Add the time created then format it */}
                            <p className="text-sm text-zinc-400 dark:text-zinc-600 line-clamp-2 text-justify tracking-tight">
                                {post?.caption!}
                            </p>
                            <span className="text-sm text-zinc-400 dark:text-zinc-600 line-clamp-1 text-justify tracking-tight">{formattedTags}</span>
                            {/* Show the first comment but once there more than 1 comment show the "View all comments" */}
                            <Link href="" className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:dark:text-zinc-500 hover:text-zinc-500">View all 3 comments</Link>
                            <CommentForm post={post} userId={userId!}/>
                        </CardFooter>
                    </Card>
                )
            })}
        </div>
    )
}
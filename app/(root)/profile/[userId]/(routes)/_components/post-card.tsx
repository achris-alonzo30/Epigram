"use client";

import Link from "next/link"
import Image from "next/image";
import { compareDesc } from "date-fns";
import { Post, User } from "@prisma/client";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { CommentForm } from "./comment-form";
import { ToggleButtons } from "./toggle-buttons";
import { EditPost } from "@/components/modals/edit-post";
import { BlockUser } from "@/components/modals/block-user";
import { DeletePost } from "@/components/modals/delete-post";

type PostCardProps = {
    users: {
        following: {
            follower: {
                id: User["id"];
                username: User["username"];
                profileImageUrl: User["profileImageUrl"];
                posts: Post[];
            };
        }[];
        posts: Post[];
        id: User["id"];
        username: User["username"];
        profileImageUrl: User["profileImageUrl"] | null;
    },
    userId: User["id"]
}

export const PostCard = ({ users, userId }: PostCardProps) => {
    // TODO: User Collapsible from shadcn-ui for comments
    // TODO: User Carousel from shadcn-ui for images
    // TODO: Add Infinite scroll
    // TODO: Show the first comment but once there more than 1 comment show the "View all comments"
    const currentUserDetails = users;
    const currentUserFollowingDetails = users?.following.flatMap((followedUser) => followedUser.follower);
    const currentUserPosts = users?.posts || [];
    const currentUserFollowingPosts = users?.following.flatMap((followedUser) => followedUser.follower.posts) || [];
    const combinedPosts = [...currentUserPosts, ...currentUserFollowingPosts];
    const sortedPosts = combinedPosts.sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)));
    return (
        <div className="flex flex-col gap-y-8">
            {sortedPosts.map((post) => {
                const tagsArray = post?.tags!.split(",");
                const formattedTags = tagsArray.map(tag => `#${tag.trim()}`);
                const userDetails = post.creatorId === currentUserDetails?.id ? currentUserDetails : currentUserFollowingDetails?.find((user) => user.id === post.creatorId)!
                return (
                    <Card className="w-[350px] px-2 rounded-xl shadow-lg dark:shadow-zinc-400 shadow-zinc-700" key={post.id}>

                        <CardHeader className="flex flex-row justify-between items-center px-4">
                            <div className="flex items-center gap-x-2">
                                <Image
                                    src={userDetails.profileImageUrl!}
                                    alt="profile"
                                    height="35"
                                    width="35"
                                    className="rounded-full object-cover aspect-square"
                                />
                                <Link href={`/profile/${userDetails.id}/user-profile`} className="text-sm font-semibold text-zinc-500 dark:text-zinc-300 hover:dark:text-[#7600FF] hover:text-[#7600FF]">{userDetails.username}</Link>
                            </div>
                            {userId === userDetails.id ? (
                                <div className="flex items-center gap-x-4 pr-1.5 ">
                                    <EditPost post={post} />
                                    <DeletePost postId={post.id} />
                                </div>
                            ) : (
                                <div className="flex items-center pr-1.5 ">
                                    <BlockUser otherUserId={userDetails.id} />
                                </div>
                            )}
                        </CardHeader>
                        <CardContent>
                            <Image src={post?.postImageUrl!} alt="post" height="350" width="350" className="aspect-square w-full h-full object-cover rounded-lg" />
                        </CardContent>
                        <CardFooter className="flex flex-col items-start px-4 gap-y-2">
                            <ToggleButtons postId={post?.id} />
                            <p className="text-sm text-zinc-500 dark:text-zinc-600 line-clamp-2 text-justify tracking-tight">
                                {post?.caption!}
                            </p>
                            <span className="text-sm text-zinc-500 dark:text-zinc-600 line-clamp-1 text-justify tracking-tight">{formattedTags}</span>
                            <CommentForm post={post} userId={userId!} />
                        </CardFooter>
                    </Card>
                )
            })}
        </div>
    )
}
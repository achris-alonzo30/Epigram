
import Image from "next/image";
import { Follow, Post } from "@prisma/client";

import { Heart, Eye } from "lucide-react"
import { ViewImage } from "@/components/modals/view-image";

type UserProfilePostsProps = {
    user: ({
        posts: Post[];
        following: Follow[];
        followers: Follow[];
    } & {
        id: string;
        userId: string;
        username: string;
        bio: string | null;
        profileImageUrl: string | null;
        backgroundImageUrl: string | null;
        isPrivate: boolean | null;
        createdAt: Date;
        updatedAt: Date;
    }) | null;
    numberOfLikesPerPost: number | null;
}
export const UserProfilePosts = ({ user, numberOfLikesPerPost }: UserProfilePostsProps) => {
    // TODO: You need to fetch the number of like and Message for each posts
    
    return (
        <div className="mx-auto my-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4">
                {user?.posts.map((post) => (
                    <div className="relative rounded-lg min-w-0" key={post.id}>
                        <div className="group relative rounded-xl h-full w-full overflow-hidden">
                            <ViewImage post={post} username={user?.username} userProfileImageUrl={user?.profileImageUrl} userId={user?.id}>
                                <div role="button" className="relative">
                                    {/* Mask with the same size as the image */}
                                    <div className="hidden group-hover:flex absolute inset-0 bg-black/40 rounded-xl">
                                        <div className="flex justify-center items-center mx-auto my-auto gap-x-8">
                                            <div className="flex flex-col items-center">
                                                <Heart className="h-4 w-4 text-white" />
                                                <p className="text-sm hidden group-hover:block text-zinc-300">{numberOfLikesPerPost}</p>
                                            </div>
                                            <div className="flex flex-col items-center ">
                                                <Eye className="h-4 w-4 text-white" />
                                                <p className="text-sm hidden group-hover:block text-zinc-300">{post.views}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <Image
                                        src={post.postImageUrl!}
                                        alt="post"
                                        width="250"
                                        height="250"
                                        className="rounded-xl aspect-square object-cover"
                                    />
                                </div>
                            </ViewImage>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
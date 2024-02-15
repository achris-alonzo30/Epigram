
import Image from "next/image";
import { Post } from "@prisma/client";

import { Heart, MessageCircle } from "lucide-react"
import { ViewImage } from "@/components/modals/view-image";

type UserProfilePostsProps = {
    posts: Post[];
}
export const UserProfilePosts = ({ posts }: UserProfilePostsProps) => {
    // TODO: You need to fetch the number of like and Message for each posts
    return (
        <div className="mx-auto my-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4">
                {posts?.map((post) => (
                    <div className="relative rounded-lg min-w-0" key={post.id}>
                        <div className="group relative rounded-xl h-full w-full overflow-hidden">
                            <ViewImage postImageUrl={post.postImageUrl}>
                                <div className="relative">
                                    {/* Mask with the same size as the image */}
                                    <div className="hidden group-hover:flex absolute inset-0 bg-black/40 rounded-xl">
                                        <div className="flex justify-center items-center mx-auto my-auto gap-x-4">
                                            <button>
                                                <Heart className="h-4 w-4 text-white" />
                                            </button>
                                            <button>
                                                <MessageCircle className="h-4 w-4 text-white" />
                                            </button>
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
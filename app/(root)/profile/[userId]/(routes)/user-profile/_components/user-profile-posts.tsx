import Link from "next/link";
import Image from "next/image";
import { Post } from "@prisma/client";

import { Heart, MessageCircle } from "lucide-react"
import { ViewImage } from "@/components/modals/view-image";

type UserProfilePostsProps = {
    posts: Post[];
}
export const UserProfilePosts = ({ posts }: UserProfilePostsProps) => {
    return (
        <div className="lg:pl-4 lg:px-0 px-2 my-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {posts?.map((post) => (
                  
                  <div className="relative w-100 h-100 shadow-md border rounded-lg min-w-0" key={post.id}>
                    <div className="group relative rounded-lg h-full w-full overflow-hidden">
                        <div className="hidden group-hover:flex items-center gap-x-6 justify-center absolute inset-0 bg-black/40">
                            <button ><Heart className="h-4 w-4 text-white" /></button>
                            
                            <button ><MessageCircle className="h-4 w-4 text-white" /></button>
                        </div>
                        <ViewImage postImageUrl={post.postImageUrl}>  
                            <Image src={post.postImageUrl!} alt="post" width="250" height="250" className="w-full h-full aspect-square object-cover" />
                        </ViewImage>
                    </div>
                  </div>  
                    
                ))}
            </div>
        </div>
    )
}
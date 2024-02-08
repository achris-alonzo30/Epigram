import Link from "next/link";
import Image from "next/image";
import { Post } from "@prisma/client";

import { Heart, MessageCircle } from "lucide-react"

type UserProfilePostsProps = {
    posts: Post[];
}
export const UserProfilePosts = ({ posts }: UserProfilePostsProps) => {
    return (
        <div className="lg:pl-4 lg:px-0 px-2 my-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/" className="relative w-100 h-100 shadow-md border rounded-lg min-w-0">
                    <div className="group relative rounded-lg h-full w-full overflow-hidden">
                        <div className="hidden group-hover:flex items-center gap-x-6 justify-center absolute inset-0 bg-black/40">
                            <Heart className="h-4 w-4 text-white" />
                            <MessageCircle className="h-4 w-4 text-white" />
                        </div>
                        <Image src="/corgi.avif" alt="corgi" width="400" height="400" className="w-full h-full aspect-auto bg-no-repeat bg-center bg-cover" />
                    </div>
                </Link>
                <Link href="/" className="relative w-100 h-100 shadow-md border rounded-lg min-w-0">
                    <div className="group relative rounded-lg h-full w-full overflow-hidden">
                        <div className="hidden group-hover:flex items-center gap-x-6 justify-center absolute inset-0 bg-black/40">
                            <Heart className="h-4 w-4 text-white" />
                            <MessageCircle className="h-4 w-4 text-white" />
                        </div>
                        <Image src="/corgi.avif" alt="corgi" width="400" height="400" className="w-full h-full aspect-auto bg-no-repeat bg-center bg-cover" />
                    </div>
                </Link>
                <Link href="/" className="relative w-100 h-100 shadow-md border rounded-lg min-w-0">
                    <div className="group relative rounded-lg h-full w-full overflow-hidden">
                        <div className="hidden group-hover:flex items-center gap-x-6 justify-center absolute inset-0 bg-black/40">
                            <Heart className="h-4 w-4 text-white" />
                            <MessageCircle className="h-4 w-4 text-white" />
                        </div>
                        <Image src="/corgi.avif" alt="corgi" width="400" height="400" className="w-full h-full aspect-auto bg-no-repeat bg-center bg-cover" />
                    </div>
                </Link>
            </div>
        </div>
    )
}
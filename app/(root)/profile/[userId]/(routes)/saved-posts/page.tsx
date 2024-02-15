import Link from "next/link";
import Image from "next/image";
import { Heart, MessageCircle } from "lucide-react";
import { getAllSavedPosts } from "@/actions/post-service";


const UserSavedPostsPage = async ({ params }: { params: { userId: string } }) => {
    // TODO: Fetch all the saved posts of the user from the database
    // TODO: Do infinite scroll
    // TODO: Add filter posts
    // TODO: Add the framer motion effect

    const savedPosts = await getAllSavedPosts(params.userId);
    return (
        <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full overflow-y-auto">
                {savedPosts?.map((savedPost) => (
                    <Link href="/" className="relative w-100 h-100 shadow-md border rounded-lg min-w-0" key={savedPost.post.id}>
                        <div className="group relative rounded-lg h-full w-full overflow-hidden">
                            <div className="hidden group-hover:flex items-center gap-x-6 justify-center absolute inset-0 bg-black/40">
                                <Heart className="h-4 w-4 text-white" />
                                <MessageCircle className="h-4 w-4 text-white" />
                            </div>
                            <Image src={savedPost.post.postImageUrl!} alt="corgi" width="250" height="250" className="w-full h-full aspect-auto bg-no-repeat bg-center bg-cover" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    )
}

export default UserSavedPostsPage;
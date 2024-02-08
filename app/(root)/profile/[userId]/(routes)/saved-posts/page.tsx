

import Link from "next/link";

import { Heart, MessageCircle } from "lucide-react";

const UserSavedPostsPage = () => {
    // TODO: Fetch all the saved posts of the user from the database
    // TODO: Do infinite scroll
    // TODO: Add filter posts
    // TODO: Add the framer motion effect
    return (
        <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full overflow-y-auto">
                <Link
                    href={`/board/`}
                    style={{ backgroundImage: `url("/corgi.avif")` }}
                    className="group relative aspect-auto bg-no-repeat bg-center bg-cover rounded-sm h-full w-full overflow-hidden"
                >
                    <div className="hidden group-hover:flex items-center gap-x-6 justify-center absolute inset-0 bg-black/40">
                        <Heart className="h-4 w-4 text-white" />
                        <MessageCircle className="h-4 w-4 text-white" />
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default UserSavedPostsPage;
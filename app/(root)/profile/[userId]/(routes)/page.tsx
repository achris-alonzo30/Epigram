import { getAllPosts } from "@/actions/get-all-posts";

import { Focus } from "lucide-react";
import { PostCard} from "./_components/post-card";
import { HomepageHeadings } from "./_components/homepage-headings";

const ProfilePage = async ({ params }: { params: { userId: string } }) => {
    // TODO: Add loading state

    // TODO: Add Infinite scroll
    // TODO: Fetch all posts of the user and the accepted followers

    const users = await getAllPosts(params.userId)
    
    return (
        <div className="p-6">
            <HomepageHeadings />
            <div className="flex flex-col items-center gap-y-4 my-4 mt-4">
                {/* Check if User posts is empty */}
                {users && users.posts?.length > 0 ? (
                    <PostCard users={users!} userId={params.userId} />
                ): (
                    <div className="flex flex-col gap-y-2 justify-center items-center mt-48">
                        <Focus className="h-10 w-10" />
                        Create your first post
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default ProfilePage;
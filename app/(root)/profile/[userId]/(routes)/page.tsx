
import { PostCard} from "./_components/post-card";
import { HomepageHeadings } from "./_components/homepage-headings";
import { db } from "@/lib/db";
import { getLoginUserPosts } from "@/actions/get-login-user-posts";

const ProfilePage = async ({ params }: {params: { userId: string }}) => {
    // TODO: Add loading state

    // TODO: Add Infinite scroll
    // TODO: Fetch all posts of the user and the accepted followers

    const user = await getLoginUserPosts(params.userId)

    return (
        <div className="p-6">
            <HomepageHeadings />
            <div className="flex flex-col items-center gap-y-4 my-4 mt-4">
                {/* Check if User posts is empty */}
                {user && user.posts?.length > 0 ? (
                    <PostCard user={user!} userId={params.userId} />
                ): (
                    <div className="flex justify-center items-center mt-48">
                        {/* TODO: Add an image and animation */}
                        Create your first post
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfilePage;
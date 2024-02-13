
import { PostCard} from "./_components/post-card";
import { HomepageHeadings } from "./_components/homepage-headings";

import { getAllPosts } from "@/actions/get-all-posts";

const ProfilePage = async ({ params }: {params: { userId: string }}) => {
    // TODO: Add loading state

    // TODO: Add Infinite scroll
    // TODO: Fetch all posts of the user and the accepted followers

    const users = await getAllPosts(params.userId)
    const currentUserPosts = users?.posts;
    const followingPosts = users?.following.map((followedUser) => followedUser.follower.posts);

    
    return (
        <div className="p-6">
            <HomepageHeadings />
            <div className="flex flex-col items-center gap-y-4 my-4 mt-4">
                {/* Check if User posts is empty */}
                {users && users.posts?.length > 0 ? (
                    <PostCard users={users!} userId={params.userId} />
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
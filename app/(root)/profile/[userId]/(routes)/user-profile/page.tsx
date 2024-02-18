import { UserProfilePosts } from "./_components/user-profile-posts";
import { UserProfileBanner } from "./_components/user-profile-banner";
import { getProfileDetails } from "@/actions/user-profile-service";
import { getNumberOfLikes } from "@/actions/post-service";

const UserProfilePage = async ({ params }: { params: { userId: string } }) => {
    const user = await getProfileDetails(params.userId);
    const postIds = user?.posts ? user?.posts.map((post) => post.id) : [];
    const numberOfLikesPerPost = await getNumberOfLikes(postIds);
    if (!user) return null;
    
    return (
        <div className="flex flex-col mt-4">
            <UserProfileBanner user={user}  />
            <UserProfilePosts user={user} numberOfLikesPerPost={numberOfLikesPerPost}/>
        </div>
    )
}

export default UserProfilePage;
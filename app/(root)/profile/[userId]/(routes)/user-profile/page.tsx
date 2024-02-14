import { UserProfilePosts } from "./_components/user-profile-posts";
import { UserProfileBanner } from "./_components/user-profile-banner";
import { getProfileDetails } from "@/actions/get-profile-details";

const UserProfilePage = async ({ params }: { params: { userId: string } }) => {
    const user = await getProfileDetails(params.userId);

    if (!user) return null;
    
    return (
        <div className="flex flex-col mt-4">
            <UserProfileBanner user={user}  />
            <UserProfilePosts posts={user?.posts} />
        </div>
    )
}

export default UserProfilePage;
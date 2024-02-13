import { UserProfilePosts } from "./_components/user-profile-posts";
import { UserProfileBanner } from "./_components/user-profile-banner";
import { getLoginUserDetails } from "@/actions/get-login-user-details";

const UserProfilePage = async ({ params }: { params: { userId: string } }) => {
    const user = await getLoginUserDetails(params.userId);

    return (
        <div className="flex flex-col mt-4">
            <UserProfileBanner user={user!}  />
            <UserProfilePosts posts={user?.posts!} />
        </div>
    )
}

export default UserProfilePage;
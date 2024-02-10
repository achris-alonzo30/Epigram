import { getLoginUserPosts } from "@/actions/get-login-user-posts";
import { UserProfilePosts } from "./_components/user-profile-posts";
import { UserProfileBanner } from "./_components/user-profile-banner";

const UserProfilePage = async ({ params }: { params: { userId: string } }) => {
    const user = await getLoginUserPosts(params.userId);

    return (
        <div className="mt-4">
            <UserProfileBanner user={user!} />
            <UserProfilePosts posts={user?.posts!} />
        </div>
    )
}

export default UserProfilePage;
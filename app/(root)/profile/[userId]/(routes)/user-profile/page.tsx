
import { db } from "@/lib/db";

import { UserProfileBanner } from "./_components/user-profile-banner";
import { getCurrentUser } from "@/actions/get-current-user";
import { UserProfilePosts } from "./_components/user-profile-posts";

const UserProfilePage = async ({ params }: { params: { userId: string } }) => {
    const user = await getCurrentUser();

    const posts = await db.post.findMany({
        where: { 
            creatorId: user?.id,
            isPublished: true,
        },
    });

    return (
        <div className="mt-4">
            <UserProfileBanner user={user!} />
            <UserProfilePosts posts={posts!}  />
        </div>
    )
}

export default UserProfilePage;
import Image from "next/image";
import { getAllPosts } from "@/actions/post-service";

import { PostCard } from "./_components/post-card";
import { HomepageHeader } from "./_components/homepage-header";



const ProfilePage = async ({ params }: { params: { userId: string } }) => {
    // TODO: Add loading state
    // TODO: Add Infinite scroll
    const users = await getAllPosts(params.userId);

    return (
        <div className="p-6">
            <HomepageHeader />
            <div className="flex flex-col items-center gap-y-4 my-4 mt-4">
                {users && users.posts?.length > 0 ? (
                    <PostCard users={users!} userId={params.userId} />
                ) : (
                    <div className="flex flex-col gap-y-2 items-center ">
                        <Image src="/camera.svg" alt="camera" height="100" width="100" />
                        Create your first post
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfilePage;
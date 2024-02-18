import { Follow, Post } from "@prisma/client";

import { UserProfileBio } from "./user-profile-bio";
import { UserProfileBadge } from "./user-profile-badge";
import { EditProfileDialog } from "./edit-profile-dialog";
import { UserProfileSocialCount } from "./user-profile-social-count";

type UserProfileBannerProps = {
    user: ({
        posts: Post[];
        following: Follow[];
        followers: Follow[];
    } & {
        id: string;
        userId: string;
        username: string;
        bio: string | null;
        profileImageUrl: string | null;
        backgroundImageUrl: string | null;
        isPrivate: boolean | null;
        createdAt: Date;
        updatedAt: Date;
    }) | null;
}

export const UserProfileBanner = ({ user }: UserProfileBannerProps) => {
    if (!user) return null;
    
    return (
        <div className="p-6 border shadow-md shadow-zinc-500 rounded-lg  xl:w-[800px] w-auto lg:mx-auto ml-4 mr-4">
            <div className="flex flex-col px-3 py-2">   
                <div className="p-2 flex flex-row justify-between items-center">
                    <UserProfileBadge profileImageUrl={user?.profileImageUrl} username={user?.username} />
                    <div>
                        <EditProfileDialog user={user} />
                    </div>
                </div>
                <UserProfileBio userBio={user?.bio} />
                <UserProfileSocialCount 
                    userPostsCount={user?.posts.length} 
                    userFollowersCount={user?.followers.length} 
                    userFollowingCount={user?.following.length}
                />
            </div>
        </div>
    )
}
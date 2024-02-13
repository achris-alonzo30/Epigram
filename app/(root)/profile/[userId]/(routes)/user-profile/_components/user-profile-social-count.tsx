import { Follow, Post } from "@prisma/client";

type UserProfileSocialCountProps = {
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

export const UserProfileSocialCount = ({ user }: UserProfileSocialCountProps) => {
    console.log(user?.followers)
    console.log(user?.following)
    return (
        <div className="flex flex-row justify-evenly gap-x-2">
            <div className="flex items-center gap-x-2 text-sm text-zinc-500">
                <div className="flex flex-col items-center justify-center gap-y-2">
                    <p className="font-bold underline">Followers</p>
                    <span>{user?.followers?.length! | 0}</span>
                </div>
            </div>
            <div className="flex items-center gap-x-2 text-sm text-zinc-500">
                <div className="flex flex-col items-center justify-center gap-y-2">
                    <p className="font-bold underline">Following</p>
                    <span>{user?.following?.length! | 0}</span>
                </div>
            </div>
            <div className="flex items-center gap-x-2 text-sm text-zinc-500">
                <div className="flex flex-col items-center justify-center gap-y-2">
                    <p className="font-bold underline">Posts</p>
                    <span>{user?.posts?.length! | 0}</span>
                </div>

            </div>
        </div>
    )
}
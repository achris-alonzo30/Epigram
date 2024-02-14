type UserProfileSocialCountProps = {
    userPostsCount: number;
    userFollowersCount: number;
    userFollowingCount: number;
}

export const UserProfileSocialCount = ({ userPostsCount, userFollowersCount, userFollowingCount }: UserProfileSocialCountProps) => {

    return (
        <div className="flex flex-row justify-evenly gap-x-2">
            <div className="flex items-center gap-x-2 text-sm text-zinc-500">
                <div className="flex flex-col items-center justify-center gap-y-2">
                    <p className="font-bold underline">Followers</p>
                    <span>{userFollowersCount | 0}</span>
                </div>
            </div>
            <div className="flex items-center gap-x-2 text-sm text-zinc-500">
                <div className="flex flex-col items-center justify-center gap-y-2">
                    <p className="font-bold underline">Following</p>
                    <span>{userFollowingCount | 0}</span>
                </div>
            </div>
            <div className="flex items-center gap-x-2 text-sm text-zinc-500">
                <div className="flex flex-col items-center justify-center gap-y-2">
                    <p className="font-bold underline">Posts</p>
                    <span>{userPostsCount | 0}</span>
                </div>

            </div>
        </div>
    )
}
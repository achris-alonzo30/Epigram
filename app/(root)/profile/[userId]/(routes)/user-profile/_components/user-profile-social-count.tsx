export const UserProfileSocialCount = () => {
    return (
        <div className="flex flex-row justify-evenly gap-x-2">
            <p className="flex items-center gap-x-2 text-sm text-zinc-500">
                Followers
                <span>1M</span>
            </p>
            <p className="flex items-center gap-x-2 text-sm text-zinc-500">
                Following
                <span>1</span>
            </p>
            <p className="flex items-center gap-x-2 text-sm text-zinc-500">
                Posts
                <span>5</span>
            </p>
        </div>
    )
}
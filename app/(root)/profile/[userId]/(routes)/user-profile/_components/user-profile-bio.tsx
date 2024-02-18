import { User } from "@prisma/client"

type UserProfileBioProps = {
    userBio: User["bio"];
}

export const UserProfileBio = ({ userBio }: UserProfileBioProps) => {
    return (
        <div className="my-2 flex flex-col gap-y-2 p-2">
            <h2 className="text-zinc-500 dark:text-zinc-400">Bio</h2>
            <p className="text-sm text-zinc-400 dark:text-zinc-500 text-justify tracking-tighter line-clamp-2">{userBio}</p>
        </div>
    )
}
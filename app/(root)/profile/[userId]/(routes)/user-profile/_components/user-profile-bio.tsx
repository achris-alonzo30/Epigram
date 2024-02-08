import { User } from "@prisma/client"

type UserProfileBioProps = {
    user: User;
}

export const UserProfileBio = ({ user }: UserProfileBioProps) => {
    return (
        <div className="my-2 flex flex-col gap-y-2 p-2">
            <h2 className="text-zinc-500">Bio</h2>
            {user?.bio || null}
        </div>
    )
}
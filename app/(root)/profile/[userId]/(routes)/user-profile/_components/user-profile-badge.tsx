import Image from "next/image";
import { User } from "@prisma/client";

type UserProfileBadgeProps = {
    profileImageUrl: User["profileImageUrl"];
    username: User["username"];
}

export const UserProfileBadge = ({ profileImageUrl, username }: UserProfileBadgeProps) => {
    return (
        <div className="flex items-center gap-x-2">
            <Image src={profileImageUrl!} alt="profile" height="50" width="50" className="rounded-full aspect-square object-cover border-2 border-zinc-700 dark:border-zinc-200 hover:border-zinc-200 dark:hover:border-zinc-500 transform hover:-translate-y-1 transition duration-400 " />
            <span className="text-lg text-zinc-500 dark:text-zinc-200 font-bold hover:text-[#7600FF] transition duration-200">{username}</span>
        </div>
    )
}
import Image from "next/image";
import { User } from "@prisma/client";

type UserProfileBadgeProps = {
    user: User;
}

export const UserProfileBadge = ({ user }: UserProfileBadgeProps) => {
    return (
        <div className="flex items-center gap-x-2">
            <Image src="/corgi.avif" alt="profile" height="35" width="35" className="rounded-full" />
            <span className="text-base text-zinc-200 font-bold hover:text-[#7600FF] transition duration-200">{user?.username}</span>
            {/* TODO: Add a badge if user is verified */}
        </div>
    )
}
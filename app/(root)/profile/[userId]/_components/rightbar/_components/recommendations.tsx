import Link from "next/link";
import Image from "next/image";
import { User } from "@prisma/client";

import { FollowButton } from "@/components/follow-button";

type ActivityTimelineProps = {
    users: User[];
    loginUser: User;
}

export const Recommendations = ({ users, loginUser }: ActivityTimelineProps) => {

    return (
        <main className="h-full flex flex-col my-1">
            <div className="w-full mx-auto px-1">
                <div className="w-full mx-auto">
                    <div className="flex flex-col gap-y-1">
                        {users.map((user) => (
                            <div className="flex flex-col gap-y-2 items-center bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-950 rounded-lg py-2" key={user.id}>
                                <Image src={user.profileImageUrl!} alt="profile-image" width="50" height="50" className="rounded-full aspect-square object-cover border-2 border-zinc-500 dark:border-zinc-200 hover:border-zinc-200 dark:hover:border-zinc-500" />
                                <Link href={`/profile/${user.id}/user-profile`} className="text-sm font-semibold text-zinc-600 dark:text-zinc-300 cursor-pointer hover:underline hover:text-[#7600FF]/90 line-clamp-2">
                                    {user.username}
                                </Link>
                                <FollowButton followingUser={user} users={users} loginUser={loginUser}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
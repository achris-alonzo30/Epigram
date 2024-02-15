import { User } from "@prisma/client";
import { getAllUsers } from "@/actions/other-users-service";
import { getFollowRequests } from "@/actions/follow-service";

import { Notifications } from "./_components/notifications";
import { Recommendations } from "./_components/recommendations";

export const Rightbar = async ({ user }: { user: User}) => {
    const users = await getAllUsers();
    const followRequests = await getFollowRequests();

    if (!users || !followRequests ) return null;

    return (
        <div className="flex flex-col pr-2 mt-8 space-y-4">
            <div className="flex flex-col border rounded-lg shadow-lg dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:border-zinc-700 px-2 py-2">
                {/* Make this dynamic add ""/s */}
                <h1 className="text-sm font-semibold text-slate-700 dark:text-gray-500">Notification</h1>
                <Notifications followRequests={followRequests} />
            </div>

            <div className="flex flex-col border rounded-lg shadow-lg dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:border-zinc-700 px-2 py-2">
                <h1 className="text-sm font-semibold text-slate-700 dark:text-gray-500">Recommendation</h1>
                <Recommendations users={users} loginUser={user} />
            </div>

        </div>

    )
}


import { Notifications } from "../notifications"
import { ActivityTimeline } from "../activity-timeline"

export const Rightbar = () => {
    return (
        <div className="flex flex-col pr-2 mt-8 space-y-4">
                {/* These two will be separated with a border on their own */}
                <div className="flex flex-col border rounded-lg shadow-lg dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:border-zinc-700 px-2 py-2">
                    {/* Make this dynamic add ""/s */}
                    <h1 className="text-sm font-semibold text-slate-700 dark:text-gray-500">Notification</h1>
                    <Notifications />
                </div>
                
                <div className="flex flex-col border rounded-lg shadow-lg dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:border-zinc-700 px-2 py-2">
                    <h1 className="text-sm font-semibold text-slate-700 dark:text-gray-500">Recent Activity</h1>
                    <ActivityTimeline />
                </div>
                
            </div>

    )
}


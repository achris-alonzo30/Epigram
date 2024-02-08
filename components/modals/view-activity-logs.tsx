

import { FileClock } from "lucide-react";

import { 
    Dialog, 
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

export const ViewActivityLogs = () => {
    // TODO: Fetch all the activity of the current user and the user following
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button  className="flex items-center px-4 py-2 mt-5 text-gray-500 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-950 dark:hover:text-gray-400 hover:text-gray-700">
                    <FileClock className="w-5 h-5" />
                    <span className="mx-4 font-medium">Activity Logs</span>
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] px-2">
                <DialogHeader>
                    <DialogTitle className="text-zinc-800 dark:text-zinc-100 mb-4 text-lg font-medium">Notifications</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-y-2">
                    <div>
                        {/* Render the notifications informations here, include user avatar, username, and the message */}
                        {/* Different types of notifications: liked your posts, commented to your posts, and follower request */}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
import Link from "next/link";
import Image from "next/image"

import {
    Avatar,
    AvatarFallback,
} from "./ui/avatar";

export const Notifications = () => {
    return (
        <main className="h-full flex flex-col my-1">
            <div className="w-full mx-auto px-1">
                <div className="w-full mx-auto">
                    <div className="flex flex-col gap-y-1">
                        <div className="flex flex-col items-start bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-950 rounded-lg py-1">
                            <div className="flex items-center gap-x-2 pl-2">
                                {/* Add badge if user is online */}
                                <Image
                                    src="/corgi.avif"
                                    alt=""
                                    height={25}
                                    width={25}
                                    className="object-cover rounded-full"
                                />
                                <Link href="/" className="text-sm font-bold text-zinc-700 dark:text-zinc-200 dark:hover:text-[#7600FF]/90 cursor-pointer hover:underline hover:text-[#7600FF]/90">
                                    Acme
                                </Link>
                            </div>
                            <p className="pl-10 text-xs font-medium text-zinc-600 dark:text-gray-500 line-clamp-2">
                                Acme was founded in Milan, Italy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
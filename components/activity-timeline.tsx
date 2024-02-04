"use client";
import Link from "next/link"
import { Dot } from "lucide-react"

export const ActivityTimeline = () => {
    // Add a framer motion 
    return (
        <main className="h-full flex flex-col my-1">
            <div className="w-full mx-auto px-1">
                <div className="w-full mx-auto">
                    <div className="flex flex-col gap-y-1">
                        <div className="flex flex-col items-start bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-950 rounded-lg py-1">
                                <div className="flex items-center">
                                    <Dot className="h-6 w-6"/>
                                    <time className="text-sm font-bold text-zinc-700 dark:text-zinc-200 ">May, 2020</time>
                                </div>
                                <Link href="/" className="pl-6 text-xs font-medium text-zinc-600 dark:text-gray-500 cursor-pointer hover:underline hover:text-[#7600FF]/90 line-clamp-2">
                                    Acme was founded in Milan, Italy
                                </Link>
                                
                        </div>
                        <div className="flex flex-col items-start bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-950 rounded-lg py-1">
                                <div className="flex items-center">
                                    <Dot className="h-6 w-6"/>
                                    <time className="text-sm font-bold text-zinc-700 dark:text-zinc-200 ">May, 2020</time>
                                </div>
                                <Link href="/" className="pl-6 text-xs font-medium text-zinc-600 dark:text-gray-500 cursor-pointer hover:underline hover:text-[#7600FF]/90 line-clamp-2">
                                    Acme was founded in Milan, Italy
                                </Link>
                                
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
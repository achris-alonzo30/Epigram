"use client";

import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { User } from "@prisma/client";

import { Button } from "@/components/ui/button";

type ActivityTimelineProps = {
    users: User[];
    loginUser: User;
    
}

export const Recommendations = ({ users, loginUser }: ActivityTimelineProps) => {
    // Add a framer motion 
    const [ followedUsers, setFollowedUsers ] = useState<string[]>([])
    const handleFollow = async (followingId: string, followingUsername: string) => {
        try {
            await axios.post(`/api/follow/${followingId}` )
            setFollowed(true)
            toast.success(`Follow Request Sent to ${followingUsername}`)
        } catch (error) {
            toast.error("Follow Request failed. Please try again.")
        }
    }

    const handleUnfollow = async (followingId: string, followingUsername: string) => {
        try {
            await axios.delete(`/api/follow/${followingId}` )
            setFollowed(false)
            toast.success(`Unfollowed ${followingUsername}`)
        } catch (error) {
            toast.error("Unfollow Request failed. Please try again.")
        }
    }

    return (
        <main className="h-full flex flex-col my-1">
            <div className="w-full mx-auto px-1">
                <div className="w-full mx-auto">
                    <div className="flex flex-col gap-y-1">
                        {users.map((user) => (
                            <div className="flex flex-col gap-y-2 items-center bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-950 dark:hover:bg-zinc-700 rounded-lg py-1" key={user.id}>
                                <Image src={user.profileImageUrl!} alt="profile-image" width="50" height="50" className="rounded-full aspect-square object-cover border-2 border-zinc-500 dark:border-zinc-200 hover:border-zinc-200 dark:hover:border-zinc-500" />
                                <Link href={`/profile/${user.id}/user-profile`} className="text-sm font-medium text-zinc-600 dark:text-gray-500 cursor-pointer hover:underline hover:text-[#7600FF]/90 line-clamp-2">
                                    {user.username}
                                </Link>
                                {!follow ? (
                                   <Button onClick={() => handleFollow(user.id, user.username)} className="items-center inline-flex focus:outline-none justify-center text-white bg-[#7600FF] focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-[#7600FF]/70 hover:border-white hover:text-white lg:w-auto px-3 py-1.5 gap-x-2 rounded-lg text-center w-full transform hover:-translate-y-1 transition duration-400">Follow</Button> 
                                ) : (
                                    <Button onClick={() => handleUnfollow(user.id, user.username)} className="items-center inline-flex focus:outline-none justify-center text-white bg-[#7600FF] focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-[#7600FF]/70 hover:border-white hover:text-white lg:w-auto px-3 py-1.5 gap-x-2 rounded-lg text-center w-full transform hover:-translate-y-1 transition duration-400" >UnFollow</Button> 
                                )}
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
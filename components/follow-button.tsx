"use client";
import axios from "axios";
import toast from "react-hot-toast";
import { User } from "@prisma/client";
import { useState, useEffect } from "react";

import { Button } from "./ui/button"

type FollowButtonProps = {
    users?: User[];
    followingUser: User;
    loginUser: User;
}

export const FollowButton = ({ users, followingUser, loginUser }: FollowButtonProps) => {
    const [ followedUsers, setFollowedUsers ] = useState<string[]>([])

    useEffect(() => {
        const fetchFollowStatus = async () => {
            try {
                const response  = await axios.get(`/api/follow`)
                
                setFollowedUsers(response.data.followingIds)
            } catch (error) {
                console.log("[GET_FOLLOWING_STATUS]", error)
            }
        }

        fetchFollowStatus()
    }, [loginUser.id, users])
    
    const handleFollow = async (followingId: string, followingUsername: string) => {
        try {
            await axios.post(`/api/follow/${followingId}`)
            toast.success(`Follow Request Sent to ${followingUsername} 🎉`)
        
            setFollowedUsers((prevUsers) =>[...prevUsers, followingId])
        } catch (error) {
            toast.error(`Error following ${followingUsername}. Please try again.`)
        }
    }

    const handleUnFollow = async (followingId: string, followingUsername: string) => {
        try {
            await axios.delete(`/api/follow/${followingId}`)
            toast.success(`Successfully unfollowed ${followingUsername} 😭`)
       
            setFollowedUsers((prevUsers) => prevUsers.filter((userId) => userId !== followingId))
        } catch (error) {
            toast.error(`Error unfollowing ${followingUsername}. Please try again.`)
        }
    }


    return (
        <Button 
            onClick={
            () => (followedUsers.includes(followingUser.id) ? 
            handleUnFollow(followingUser.id, followingUser.username) : 
            handleFollow(followingUser.id, followingUser.username))} 
            className="items-center inline-flex focus:outline-none justify-center text-white bg-[#7600FF] py-1 px-2 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-[#7600FF]/70 hover:border-white hover:text-white lg:w-auto gap-x-2 rounded-lg text-center w-full transform hover:-translate-y-1 transition duration-400">
            {followedUsers.includes(followingUser.id) ? "UnFollow" : "Follow"}
        </Button>
    )
}
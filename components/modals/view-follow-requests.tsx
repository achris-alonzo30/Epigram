"use client";

import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { User, STATUS } from "@prisma/client";

import { Bell } from "lucide-react"

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/loading-spinner";


type FollowRequestsProps = {
    follower: {
        id: User["id"];
        username: User["username"];
        profileImageUrl: User["profileImageUrl"];
    };
    id: string;
    createdAt: string;
    followerId: string;
    followingId: string;
    status: STATUS;

}

export const ViewFollowRequests = () => {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [followRequests, setFollowRequests] = useState<FollowRequestsProps[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchFollowRequests = async () => {
            try {
                const response = await axios.get("/api/follow/requests");
                setFollowRequests(response.data.followRequests);
                setIsLoading(false);
                router.refresh();
            } catch (error) {
                console.log("[GET_FOLLOW_REQUESTS]", error);
                return null;
            }
        }

        fetchFollowRequests();
    }, [])


    const handleAcceptRequest = async (followerId: string, followerUsername: string) => {
        try {
            await axios.patch(`/api/follow/${followerId}`)
            toast.success(`Successfully accepted ${followerUsername} request 🎉`)
            setIsLoading(true);
            router.refresh();
        } catch (error) {
            toast.error("Error accepting request. Please try again.")
        }
    }

    const handleRejectRequest = async (followerId: string, followerUsername: string) => {
        try {
            await axios.delete(`/api/follow/${followerId}`)
            toast.success(`Successfully rejected ${followerUsername} request 😭`)
            setIsLoading(true);
            router.refresh();
        } catch (error) {
            toast.error("Error rejecting request. Please try again.")
        }
    }


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="flex items-center px-4 py-2 mt-5 text-zinc-500 transition-colors duration-300 transform rounded-md dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-950 dark:hover:text-zinc-400 hover:text-zinc-700">
                    <Bell className="w-5 h-5" />
                    <span className="mx-4 font-medium">Notifications</span>
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] px-2">
                <DialogHeader>
                    <DialogTitle className="text-zinc-800 dark:text-zinc-100 mb-4 text-lg font-medium">Notifications</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col max-h-72 overflow-y-auto">
                    <div className="space-y-4">
                        <div className="flex flex-col space-y-0.5 rounded-lg border p-3 shadow-sm">
                            {followRequests && followRequests.length === 0 ? (
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">You have no follow requests at the moment. 😭</p>
                            ) : (
                                followRequests.map((followRequest) => (
                                    <div className="flex flex-row items-center justify-between rounded-lg border p-2 shadow-sm" key={followRequest.follower.id}>
                                        <div className="flex items-center gap-x-2">
                                            <Image src={followRequest.follower.profileImageUrl!} alt="logo" width="30" height="30" className="rounded-full aspect-square object-cover  " />
                                            <div className="flex flex-col">
                                                <h2 className="text-sm">{followRequest.follower.username}</h2>
                                                <p className="text-xs text-zinc-400 dark:text-zinc-500">Sent you a follow request.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-4">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                disabled={isLoading}
                                                className="border border-emerald-600 py-0.5 px-2 hover:bg-emerald-600 hover:text-white  transform hover:-translate-y-1 transition duration-400"
                                                onClick={() => handleAcceptRequest(followRequest.follower.id, followRequest.follower.username)}
                                            >
                                                {isLoading ? <LoadingSpinner size="default" isLabel>Accepting</LoadingSpinner> : "Accept"}
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                disabled={isLoading}
                                                className="border border-destructive py-0.5 px-2 hover:bg-destructive hover:text-white transform hover:-translate-y-1 transition duration-400"
                                                onClick={() => handleRejectRequest(followRequest.follower.id, followRequest.follower.username)}
                                            >
                                                {isLoading ? <LoadingSpinner size="default" isLabel>Rejecting</LoadingSpinner> : "Reject"}
                                            </Button>
                                        </div>

                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
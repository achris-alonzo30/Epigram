"use client";

import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import { STATUS } from "@prisma/client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

type NotificationProps = {
    followRequests: ({
        follower: {
            id: string;
            username: string;
            profileImageUrl: string | null;
        };
    } & {
        id: string;
        status: STATUS;
        followerId: string;
        followingId: string;
        createdAt: Date;
    })[] | null
}

export const RecentFollowRequests = ({ followRequests }: NotificationProps) => {
    const [ requests, setRequests ] = useState(followRequests || []);
    const handleAcceptRequest = async (followerId: string, followerUsername: string) => {
        try {
            await axios.patch(`/api/follow/${followerId}`)
            toast.success(`Successfully accepted ${followerUsername} request 🎉`)
            setRequests(requests?.filter((request) => request.followerId !== followerId))
        } catch (error) {
            toast.error("Error accepting request. Please try again.")
        }
    }

    const handleRejectRequest = async (followerId: string, followerUsername: string) => {
        try {
            await axios.delete(`/api/follow/${followerId}`)
            toast.success(`Successfully rejected ${followerUsername} request 😭`)
            setRequests(requests?.filter((request) => request.followerId !== followerId))
        } catch (error) {
            toast.error("Error rejecting request. Please try again.")
        }
    }

    return (
        <main className="h-full flex flex-col my-1">
          <div className="w-full mx-auto px-1">
            <div className="w-full mx-auto">
              <div className="flex flex-col gap-y-1">
                {requests!.length > 0 ? (
                  requests!.map((request) => (
                    <div
                      className="flex flex-col items-start bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-950 rounded-lg py-1"
                      key={request.follower.id}
                    >
                      <div className="flex items-center gap-x-2 pl-2">
                        
                        <Image
                          src={request.follower.profileImageUrl!}
                          alt="profile-image"
                          height={25}
                          width={25}
                          className="object-cover rounded-full aspect-square"
                        />
                        <Link
                          href={`/profile/${request.follower.id}/user-profile`}
                          className="text-sm font-bold text-zinc-600 dark:text-zinc-300 dark:hover:text-[#7600FF]/90 cursor-pointer hover:underline hover:text-[#7600FF]/90"
                        >
                          {request.follower.username}
                        </Link>
                      </div>
                      <p className="pl-10 text-xs font-medium text-zinc-600 dark:text-zinc-500 line-clamp-2">
                        <strong>{request.follower.username}</strong> sent you a follow request.
                      </p>
                      <div className="flex items-center justify-center gap-x-4 mx-auto py-1">
                        <Button
                          variant="outline"
                          className="border border-emerald-600 py-0.5 px-2 hover:bg-emerald-600 hover:text-white  transform hover:-translate-y-1 transition duration-400"
                          onClick={() => handleAcceptRequest(request.follower.id, request.follower.username)}
                        >
                          Accept
                        </Button>
                        <Button
                          variant="outline"
                          className="border border-destructive py-0.5 px-2 hover:bg-destructive hover:text-white transform hover:-translate-y-1 transition duration-400"
                          onClick={() => handleRejectRequest(request.follower.id, request.follower.username)}
                        >
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-start bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-950 rounded-lg p-2 text-xs text-zinc-600 dark:text-zinc-300 font-medium">
                    You have no follow requests at the moment. 😭
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
    )
}
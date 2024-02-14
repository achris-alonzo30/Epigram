"use client";

import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import { STATUS, User } from "@prisma/client";

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

export const Notifications = ({ followRequests }: NotificationProps) => {
    // TODO: Update the notifications once login user accepted the follow request
    const handleAcceptRequest = async (followerId: string, followerUsername: string) => {
        try {
            await axios.patch(`/api/follow/${followerId}`)
            toast.success(`Successfully accepted ${followerUsername} request 🎉`)
        } catch (error) {
            toast.error("Error accepting request. Please try again.")
        }
    }

    const handleRejectRequest = async (followerId: string, followerUsername: string) => {
        try {
            await axios.delete(`/api/follow/${followerId}`)
            toast.success(`Successfully rejected ${followerUsername} request 😭`)
        } catch (error) {
            toast.error("Error rejecting request. Please try again.")
        }
    }

    return (
        <main className="h-full flex flex-col my-1">
          <div className="w-full mx-auto px-1">
            <div className="w-full mx-auto">
              <div className="flex flex-col gap-y-1">
                {followRequests!.length > 0 ? (
                  followRequests!.map((follower) => (
                    <div
                      className="flex flex-col items-start bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-950 rounded-lg py-1"
                      key={follower.follower.id}
                    >
                      <div className="flex items-center gap-x-2 pl-2">
                        {/* Add badge if user is online */}
                        <Image
                          src={follower.follower.profileImageUrl!}
                          alt="profile-image"
                          height={25}
                          width={25}
                          className="object-cover rounded-full aspect-square"
                        />
                        <Link
                          href={`/profile/${follower.follower.id}/user-profile`}
                          className="text-sm font-bold text-zinc-700 dark:text-zinc-200 dark:hover:text-[#7600FF]/90 cursor-pointer hover:underline hover:text-[#7600FF]/90"
                        >
                          {follower.follower.username}
                        </Link>
                      </div>
                      <p className="pl-10 text-xs font-medium text-zinc-600 dark:text-gray-500 line-clamp-2">
                        <strong>{follower.follower.username}</strong> sent you a follow request.
                      </p>
                      <div className="flex items-center justify-center gap-x-4 mx-auto py-1">
                        <Button
                          variant="outline"
                          className="border border-emerald-600 py-0.5 px-2 hover:bg-emerald-600 hover:text-white  transform hover:-translate-y-1 transition duration-400"
                          onClick={() => handleAcceptRequest(follower.follower.id, follower.follower.username)}
                        >
                          Accept
                        </Button>
                        <Button
                          variant="outline"
                          className="border border-destructive py-0.5 px-2 hover:bg-destructive hover:text-white transform hover:-translate-y-1 transition duration-400"
                          onClick={() => handleRejectRequest(follower.follower.id, follower.follower.username)}
                        >
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-start bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-950 rounded-lg py-1 px-1 text-sm text-zinc-700 dark:text-zinc-200 dark:hover:text-[#7600FF]/90 font-semibold">
                    You have no notifications 😭
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
    )
}
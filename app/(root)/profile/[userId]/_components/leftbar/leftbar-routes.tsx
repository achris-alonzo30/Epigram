"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { User } from "@prisma/client";
import { usePathname } from "next/navigation";

import {
  Home,
  Plus,
  Bookmark,
  PawPrint,
  Settings,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { CreatePost } from "@/components/modals/create-post";
import { SetSettings } from "@/components/modals/set-settings";
import { ViewFollowRequests } from "@/components/modals/view-follow-requests";

type LeftbarRoutesProps = {
  userId: User["id"];
  userPrivacy: User["isPrivate"];
  blockedUsers: { blocked: User }[] | null;
}

export const LeftbarRoutes = ({ userId, userPrivacy, blockedUsers }: LeftbarRoutesProps) => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col">
      <CreatePost>
        <button className="flex items-center px-4 py-2 mt-5 text-zinc-500 transition-colors duration-300 transform rounded-md dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-950 dark:hover:text-zinc-400 hover:text-zinc-700">
          <Plus className="w-5 h-5" />
          <span className="mx-4 font-medium">Create Post</span>
        </button>
      </CreatePost>
      <Separator className="my-2" />
      <Link href={`/profile/${userId}`} className={cn("flex items-center px-4 py-2 mt-5 text-zinc-500 transition-colors duration-300 transform rounded-md dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-950 dark:hover:text-zinc-400 hover:text-zinc-700", {"text-[#7600FF]": pathname.includes(`/profile/${userId}`)})}>
        <Home className="w-5 h-5" />
        <span className="mx-4 font-medium">Home</span>
      </Link>
      <Link href={`/profile/${userId}/user-profile`} className={cn("flex items-center px-4 py-2 mt-5 text-zinc-500 transition-colors duration-300 transform rounded-md dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-950 dark:hover:text-zinc-400 hover:text-zinc-700", {"text-[#7600FF]": pathname.includes(`/profile/${userId}/user-profile`)})}>
        <PawPrint className="w-5 h-5" />
        <span className="mx-4 font-medium">Profile</span>
      </Link>
      <Link href={`/profile/${userId}/saved-posts`} className={cn("flex items-center px-4 py-2 mt-5 text-zinc-500 transition-colors duration-300 transform rounded-md dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-950 dark:hover:text-zinc-400 hover:text-zinc-700", {"text-[#7600FF]": pathname.includes(`/profile/${userId}/saved-posts`)})}>
        <Bookmark className="w-5 h-5" />
        <span className="mx-4 font-medium">Saved Posts</span>
      </Link>
      <ViewFollowRequests />
      <SetSettings userPrivacy={userPrivacy} blockedUsers={blockedUsers}>
        <button className="flex items-center px-4 py-2 mt-5 text-zinc-500 transition-colors duration-300 transform rounded-md dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-950 dark:hover:text-zinc-400 hover:text-zinc-700">
          <Settings className="w-5 h-5" />
          <span className="mx-4 font-medium">Settings</span>
        </button>
      </SetSettings>
    </nav>
  )
}
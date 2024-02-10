
import Link from "next/link";
import { User } from "@prisma/client";

import {
  Home,
  Plus,
  Bookmark,
  UserRound
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SetSettings } from "@/components/modals/set-settings";
import { ViewNotifiactions } from "@/components/modals/view-notifications";


type LeftbarRoutesProps = {
  userId: User["id"];
}

export const LeftbarRoutes = ({ userId }: LeftbarRoutesProps) => {
    return (
        <nav className="flex flex-col">
          <button className="flex items-center px-4 py-2 mt-5 text-gray-500 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-950 dark:hover:text-gray-400 hover:text-gray-700">
            <Plus className="w-5 h-5" />
            <span className="mx-4 font-medium">Create Post</span>
          </button>
          <Separator className="my-2" />
          <Link href={`/profile/${userId}`} className="flex items-center px-4 py-2 mt-5 text-gray-500 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-950 dark:hover:text-gray-400 hover:text-gray-700">
            <Home className="w-5 h-5" />
            <span className="mx-4 font-medium">Home</span>
          </Link>
          <Link href={`/profile/${userId}/user-profile`} className="flex items-center px-4 py-2 mt-5 text-gray-500 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-950 dark:hover:text-gray-400 hover:text-gray-700">
            <UserRound className="w-5 h-5" />
            <span className="mx-4 font-medium">Profile</span>
          </Link>
          <Link href={`/profile/${userId}/saved-posts`} className="flex items-center px-4 py-2 mt-5 text-gray-500 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-950 dark:hover:text-gray-400 hover:text-gray-700">
            <Bookmark className="w-5 h-5" />
            <span className="mx-4 font-medium">Saved Posts</span>
          </Link>
          <ViewNotifiactions />
          <SetSettings />
        </nav>
    )
}
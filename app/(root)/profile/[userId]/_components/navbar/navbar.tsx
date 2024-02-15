"use client";

import Image from "next/image";
import { Block, User } from "@prisma/client";
import { useRouter } from 'next/navigation';
import { useClerk } from "@clerk/clerk-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchBar } from "@/components/search-bar";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileSidebar } from "../mobile-sidebar/mobile-sidebar";



type NavbarProps = {
    user: User;
    blockedUsers: {
        blocked: User;
    }[] | null;
}   

export const Navbar = ({ user, blockedUsers }: NavbarProps) => {
    const { signOut } = useClerk();
    const router = useRouter();
    return (
        <div className="px-4 py-3 border-b h-full flex items-center shadow-sm bg-white dark:bg-zinc-900 dark:border-zinc-700">
            <MobileSidebar userId={user.id} userPrivacy={user.isPrivate} blockedUsers={blockedUsers} />
            <div className="flex gap-x-2 ml-auto">
                <SearchBar />
                <ThemeToggle />
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger>
                        
                        <Image src={user.profileImageUrl!} alt="profile" width={35} height={35} className="rounded-full aspect-square object-cover border-2 border-zinc-500 dark:border-zinc-200 hover:border-zinc-200 dark:hover:border-zinc-500 transform hover:-translate-y-1 transition duration-400 " />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel className="capitalize text-[#7600FF] font-bold line-clamp-1">{user.username}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <button onClick={() => signOut(() => router.push("/"))}>
                                Logout
                            </button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}
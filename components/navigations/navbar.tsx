"use client";

import Image from "next/image";
import { User } from "@prisma/client";
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
import { MobileSidebar } from "./mobile-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";


type NavbarProps = {
    profileImageUrl: User["profileImageUrl"];
    username: User["username"];
    userId: User["id"];
}

export const Navbar = ({profileImageUrl, username, userId}: NavbarProps) => {
    const { signOut } = useClerk();
    const router = useRouter();
    
    return (
        <div className="px-4 py-3 border-b h-full flex items-center shadow-sm bg-white dark:bg-zinc-900 dark:border-zinc-700">
            <MobileSidebar userId={userId!}/>
            <div className="flex gap-x-2 ml-auto">
                <ThemeToggle />
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger>
                        <Image src={profileImageUrl!} alt="profile" width={35} height={35} className="rounded-full" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel className="capitalize text-[#7600FF] font-bold line-clamp-1">{username}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
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
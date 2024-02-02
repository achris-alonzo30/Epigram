"use client"

import Link from "next/link";
import { User } from "@prisma/client";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { MenuIcon } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logo } from "@/components/logo";
import { SearchBar } from "@/components/search-bar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



type NavbarProps = {
    creator: User;
}

export const Navbar = ({ creator }: NavbarProps) => {
    const { signOut } = useClerk();
    const router = useRouter();

    const isCollapse = false;

    return (
        <div className="fixed flex justify-between px-6 py-3 pt-3 w-full items-center gap-x-4 border-b bg-white z-[100] dark:bg-slate-900 dark:border-slate-700">
            {isCollapse && (
                <MenuIcon role="button" className="text-muted-foreground h-6 w-6 hover:text-zinc-400" />
            )}
            <div>
                <Logo />
            </div>
            <div className="flex items-center justify-end w-full space-x-2">
                <div className="md:block hidden pl-60 ">
                    <SearchBar />
                </div>
                <div className="flex items-center gap-x-4">
                    <ThemeToggle />
                    <DropdownMenu modal={false} >
                        <DropdownMenuTrigger asChild className="cursor-pointer shadow-md  ring-1 ring-zinc-900/5 transform hover:-translate-y-1 transition duration-400">
                            <Avatar>
                                <AvatarImage src={creator?.profileImageUrl!} alt="user-profile" height={40} width={40} />
                                <AvatarFallback>AC</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center">
                            <DropdownMenuItem><Link href="/">Profile Settings</Link></DropdownMenuItem>
                            <DropdownMenuItem>
                                <button onClick={() => signOut(() => router.push("/"))}>Logout</button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}


import { UserButton } from "@clerk/nextjs";

import { MenuIcon } from "lucide-react";

import { Logo } from "@/components/logo";
import { SearchInput } from "@/components/search-input";
import { ThemeToggle } from "@/components/theme-toggle";

type NavbarProps = {

}
export const Navbar = () => {
    const isCollapse = false;
    return (
        <div className="fixed flex justify-between px-6 py-3 pt-3 w-full items-center gap-x-4 border-b bg-white z-[100] dark:bg-gray-900 dark:border-gray-700">
            {isCollapse && (
                <MenuIcon role="button" className="text-muted-foreground h-6 w-6 hover:text-zinc-400" />
            )}
            <div>
                <Logo />
            </div>
            <div className="md:block hidden pl-60 ">
                <SearchInput />
            </div>
            <div className="flex items-center justify-end w-full">
                <div className="flex items-center gap-x-4">
                    <ThemeToggle />
                    <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: "h-[40px] w-[40px]"}}} />
                </div>
            </div>
        </div>
    )
}


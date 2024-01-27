import { MenuIcon } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { UserButton } from "@clerk/nextjs";

type NavbarProps = {
    isCollapse: boolean;
    onResetWidth: () => void;
}
export const Navbar = ({ isCollapse, onResetWidth }: NavbarProps) => {
    return (
        <div className="flex justify-between px-6 py-3 pt-2 w-full items-center gap-x-4 border-b">
            {isCollapse && (
                <MenuIcon role="button" onClick={onResetWidth} className="text-muted-foreground h-6 w-6 hover:text-zinc-400" />
            )}
            <div className="flex items-center justify-end w-full">
                <div className="flex items-center gap-x-4">
                    <ThemeToggle />
                    <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: "h-[40px] w-[40px]"}}} />
                </div>
            </div>
        </div>
    )
}
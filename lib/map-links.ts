import { 
    Bookmark, 
    Home, 
    Plus, 
    Search, 
    Settings, 
    UserRound 
} from "lucide-react";

export const SidebarLinks = [
    {
        name: "Home",
        href: "/",
        icon: Home
    }, 
    {
        name: "Profile",
        href: "/profile",
        icon: UserRound
    },
    {
        name: "Create Post",
        href: "/create-post",
        icon: Plus
    },
    {
        name: "Saved Posts",
        href: "/saved-posts",
        icon: Bookmark
    },
    {
        name: "Settings",
        href: "/settings",
        icon: Settings
    },
]
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
        link: "/",
        icon: Home
    }, 
    {
        name: "Profile",
        link: "/profile",
        icon: UserRound
    },
    {
        name: "Search",
        link: "/search",
        icon: Search
    },
    {
        name: "Create Post",
        link: "/create-post",
        icon: Plus
    },
    {
        name: "Saved Posts",
        link: "/saved-posts",
        icon: Bookmark
    },
    {
        name: "Settings",
        link: "/settings",
        icon: Settings
    },
]
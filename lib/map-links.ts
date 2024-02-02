import { 
    Activity,
    Blend,
    Bookmark, 
    Calendar, 
    Gift, 
    HeartHandshake, 
    Home, 
    MessageSquareReply, 
    Plus, 
    Search, 
    Settings, 
    ShieldCheck, 
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

export const FeatureLinks = [
    {
        title: "Dual Mode Engagement",
        description: "We provide a unique dual mode engagement, offering both Fun Mode for social interactions and Work Mode for professional client-trainer relationships.",
        icon: Blend
    },
    {
        title: "Comprehensive Health Data Tracking",
        description: "The Work Mode's focus on health data tracking and with centralized dashboards, enabling users to input and monitor essential health metrics.",
        icon: Activity
    },
    {
       title: "Efficient Calendar Functionality",
       description: "Work Mode is equipped with a user-friendly calendar where users can schedule meetings and appointments. Additionally, timely notifications and email alerts ensure smooth communication.",
       icon: Calendar
    },
    {
       title: "Empowering Supportive Community",
       description: "We ensure a welcoming and inclusive environment for users. This a place for users to encourage and challenge each other, earn rewards and increase user engagement.",
       icon: HeartHandshake
    },
    {
       title: "Privacy Preferences",
       description: "We greatly prioritize privacy preferences and we make sure users have control the visibility of their health information. Users can choose between public, private, or shared only with their trainer, ensuring a personalized and secure experience.",
       icon: ShieldCheck
    },
    {
       title: "User-Centric Feedback System",
       description: "We're commited to continous improvement to enhanced user experience. We value each user's feedback to ensure users feel comfortable and confident in using our app.",
       icon: MessageSquareReply
    },
]

export const MarketingCTALinks = [
    {
        title: "Fun Mode",
        description: "Unleash the social side of health with Fun Mode, where vibrant interactions and peer encouragement turn your wellness journey into a delightful, community-driven experience.",
        buttonTitle: "Start With Fun Mode"
    },
    {
        title: "Work Mode",
        description: "Elevate your fitness journey with personalized guidance and support in Work Mode, fostering a dedicated space for professional client-trainer relationships.",
        buttonTitle: "Start With Work Mode"
    }
]
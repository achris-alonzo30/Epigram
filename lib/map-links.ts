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
        description: "iHealth provides a unique dual mode engagement, offering both Fun Mode for social interactions and Work Mode for professional client-trainer relationships. This caters to a diverse range of user needs within a single platform.",
        icon: Blend
    },
    {
        title: "Comprehensive Health Data Tracking",
        description: "The Work Mode's focus on health data tracking streamlines communication between clients and trainers, enabling users to input and monitor essential health metrics. This centralized dashboard enhances efficiency and collaboration in health management.",
        icon: Activity
    },
    {
       title: "Efficient Calendar Functionality",
       description: "The simple and efficient calendar functionality in iHealth's Work Mode allows seamless scheduling of meetings and appointments. Notifications and email alerts ensure timely communication and coordination between clients and trainers.",
       icon: Calendar
    },
    {
       title: "Empowering Supportive Community",
       description: "The Fun Mode's community-building features, such as group creation and challenges, foster a supportive environment. Users can encourage and challenge each other, earning rewards that enhance customization options and user engagement.",
       icon: HeartHandshake
    },
    {
       title: "Privacy Preferences",
       description: "The inclusion of privacy preferences empowers users to control the visibility of their health information. Users can choose between public, private, or shared only with their trainer, ensuring a personalized and secure experience.",
       icon: ShieldCheck
    },
    {
       title: "User-Centric Feedback System",
       description: "The planned inclusion of a user feedback and improvement section demonstrates a commitment to continuous enhancement. Collecting user input allows for iterative improvements based on the evolving needs and preferences of the iHealth community.",
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
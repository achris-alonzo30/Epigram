import { LeftSidebar } from "@/components/left-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { UserButton } from "@clerk/nextjs";

const LandingPage = () => {
    return (
        <div className="h-full flex ">
            <LeftSidebar />
        </div>
    )
}

export default LandingPage;


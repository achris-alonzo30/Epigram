
import { Feed } from "@/components/feed";
import { Navbar } from "@/components/navbar";
import {LeftSidebar} from "@/components/left-sidebar";
import { RightSidebar } from "@/components/right-sidebar";


const RootPage = () => {

    return (
        <div className="h-full">
            <Navbar />
            <LeftSidebar />
            <RightSidebar />
            <Feed />
        </div>
    )
}

export default RootPage;
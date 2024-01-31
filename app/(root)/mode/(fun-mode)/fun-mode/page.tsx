
import { Navbar } from "@/components/navbar";
import {LeftSidebar} from "@/components/left-sidebar";
import { RightSidebar } from "@/components/right-sidebar";
import { Feed } from "@/components/feed";


const FunModePage = () => {

    return (
        <div className="h-full">
            <Navbar />
            <LeftSidebar />
            <RightSidebar />
            <Feed />
        </div>
    )
}

export default FunModePage;
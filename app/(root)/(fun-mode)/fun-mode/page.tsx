
import { Navbar } from "@/components/navbar";
import {LeftSidebar} from "@/components/left-sidebar";
import { RightSidebar } from "@/components/right-sidebar";


const FunModePage = () => {

    return (
        <div className="h-full">
            <Navbar />
            <LeftSidebar />
            <RightSidebar />
        </div>
    )
}

export default FunModePage;
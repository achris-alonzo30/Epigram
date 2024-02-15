import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CreatePost } from "@/components/modals/create-post";

export const HomepageHeader = () => {
    return (
        <div className="flex justify-between items-center lg:ml-4 lg:mx-0 mx-2">
            <h1 className="text-xl font-semibold">Home</h1>
            <div className="flex items-center gap-x-4">
                <CreatePost>
                    <Button
                        className="items-center inline-flex focus:outline-none justify-center text-white bg-[#7600FF] focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-[#7600FF]/70 hover:border-white hover:text-white lg:w-auto px-3 py-1.5 gap-x-2 rounded-lg text-center w-full transform hover:-translate-y-1 transition duration-400"
                    >
                        <Plus className="h-5 w-5" />
                        Create Post
                    </Button>
                </CreatePost>
            </div>
        </div>
    )
}
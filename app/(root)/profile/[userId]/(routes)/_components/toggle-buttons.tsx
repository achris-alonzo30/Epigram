import { 
    Heart, 
    MessageCircle, 
    Bookmark 
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const ToggleButtons = () => {
    return (
        <div className="flex justify-start gap-x-2">
            <button><Heart className="h-4 w-4" /></button>
            <button><MessageCircle className="h-4 w-4" /></button>
            <button><Bookmark className="h-4 w-4" /></button>
        </div>
    )
}
"use client";

import axios from "axios";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { 
    Heart, 
    MessageCircle, 
    Bookmark 
} from "lucide-react";

import { Button } from "@/components/ui/button";

type ToggleButtonsProps = {
    postId: string;
}
export const ToggleButtons = ({ postId}: ToggleButtonsProps) => {
    const router = useRouter();
    const [ isSaved, setIsSaved ] = useState(false);
    const [ isLiked, setIsLiked ] = useState(false);

    useEffect(() => {
        
    })

    
    const handleSavedPosts = async (postId: string) => {
        try {
            await axios.post(`/api/posts/${postId}`);
            toast.success("Post saved successfully");
            router.refresh();
        } catch (error) {
            toast.error("Failed to saved the post. Please try again.");
        }
    }
    
    return (
        <div className="flex justify-start gap-x-2">
            <button ><Heart fill={isSaved ? "#7600FF" : undefined}  className="h-5 w-5 dark:text-zinc-400 dark:hover:text-zinc-600 text-zinc-600 hover:text-zinc-400 transform hover:-translate-y-1 transition duration-400 " /></button>
            <button><MessageCircle className="h-5 w-5 dark:text-zinc-400 dark:hover:text-zinc-600 text-zinc-600 hover:text-zinc-400 transform hover:-translate-y-1 transition duration-400 " /></button>
            <button onClick={() => handleSavedPosts(postId)}><Bookmark fill={isSaved ? "#7600FF" : undefined} className="h-5 w-5 dark:text-zinc-400 dark:hover:text-zinc-600 text-zinc-600 hover:text-zinc-400 transform hover:-translate-y-1 transition duration-400 "/></button>
        </div>
    )
}
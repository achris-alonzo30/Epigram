"use client";

import axios from "axios";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import {
    Heart,
    Bookmark
} from "lucide-react";

export const ToggleButtons = ({ postId }: { postId: string }) => {
    const router = useRouter();
    const [postStatus, setPostStatus] = useState<{ [postId: string]: { isLiked: boolean, isSaved: boolean } }>({});


    useEffect(() => {
        const fetchedData = async () => {
            try {
                const [likedStatus, savedStatus] = await Promise.all([
                    axios.get(`/api/posts/${postId}/like-post`),
                    axios.get(`/api/posts/${postId}/save-post`)
                ]);
                
                setPostStatus(prevState => ({
                    ...prevState,
                    [postId]: {
                        isLiked: likedStatus.data,
                        isSaved: savedStatus.data
                    }
                }))
            } catch (error) {
                console.log(error)
            }
        }

        fetchedData();

    }, [postId])

    const handleSavedPosts = async (postId: string) => {
        try {
            const response = await axios.post(`/api/posts/${postId}/save-post`);
            toast.success(response.data);
            router.refresh();
            setPostStatus(prevState => ({
                ...prevState,
                [postId]: {
                    ...prevState[postId],
                    isSaved: !prevState[postId].isSaved
                }
            }))
        } catch (error) {
            toast.error("Failed to saved the post. Please try again.");
        }
    }

    const handleLike = async (postId: string) => {
        try {
            const response = await axios.post(`/api/posts/${postId}/like-post`);
            toast.success(response.data);
            router.refresh();
            setPostStatus(prevState => ({
                ...prevState,
                [postId]: {
                    ...prevState[postId],
                    isLiked: !prevState[postId].isLiked
                }
            }))
        } catch (error) {
            toast.error("Failed to like the post. Please try again.");
        }
    }

    // console.log(postStatus)

    return (
        <div className="flex justify-start gap-x-2">
            <button
                onClick={() => handleLike(postId)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cn(" h-5 w-5 transform hover:-translate-y-1 transition duration-400", postStatus[postId]?.isLiked ? "text-[#7600FF] fill-[#7600FF] " : "dark:text-zinc-400 dark:hover:text-zinc-600 text-zinc-600 hover:text-zinc-400")}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            </button>
            <button
                onClick={() => handleSavedPosts(postId)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cn("h-5 w-5 transform hover:-translate-y-1 transition duration-400", postStatus[postId]?.isSaved ? "text-[#7600FF] fill-[#7600FF]" : "dark:text-zinc-400 dark:hover:text-zinc-600 text-zinc-600 hover:text-zinc-400")}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
            </button>
        </div>
    )
}
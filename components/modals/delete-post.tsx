"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Trash2 } from "lucide-react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export const DeletePost = ({ postId }: { postId: string }) => {
    const router = useRouter();

    const handleDelete = async (postId: string) => {
        try {
            await axios.delete(`/api/posts/${postId}/delete`)

            toast.success("Post deleted")
            router.refresh();
        } catch (error) {
            toast.error("Failed to delete the post")
        }
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <button className="-mt-1.5">
                    <Trash2 className="h-4 w-4 text-zinc-500 hover:text-zinc-400 transform hover:-translate-y-1 transition duration-400 " />
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="mb-2">Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your post.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex items-center">
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDelete(postId)} className="mt-2">Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
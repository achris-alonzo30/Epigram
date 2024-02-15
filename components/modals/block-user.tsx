"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { MinusCircle } from "lucide-react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    AlertDialogDescription,
} from "@/components/ui/alert-dialog"

export const BlockUser = ({ otherUserId }: { otherUserId: string }) => {
    const router = useRouter();

    const handleBlock = async () => {
        try {
            await axios.post(`/api/block/${otherUserId}`);

            toast.success("Blocked successfully");
            router.refresh();
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <button className="pb-1.5">
                    <MinusCircle className="h-4 w-4 text-zinc-500 hover:text-zinc-400 transform hover:-translate-y-1 transition duration-400 " />
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="mb-2">You&apos;re about to block this user. Are you absolutely sure about this?</AlertDialogTitle>
                    <AlertDialogDescription>
                        You can always unblock this user in your settings.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex items-center">
                    <AlertDialogCancel>Nevermind</AlertDialogCancel>
                    <AlertDialogAction onClick={handleBlock} className="mt-2">Absolutely Sure!</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
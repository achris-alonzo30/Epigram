"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { MinusCircle, XCircle } from "lucide-react";

import { ActionTooltip } from "./action-tooltip";

type BlockedButton = {
    otherUserId: string;
    style?: string;
}
export const BlockButton = ({ otherUserId, style }: BlockedButton) => {
    const router = useRouter();
    const [isBlocked, setIsBlocked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchBlockedStatus = async () => {
            try {
                const response = await axios.get(`/api/block/${otherUserId}`);
                setIsBlocked(!!response.data);
                router.refresh();
                setIsLoading(false);
            } catch (error) {
                toast.error("Something went wrong. Please try again.");
            }
        }

        fetchBlockedStatus();
    }, [otherUserId, router]);

    const handleBlock = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            await axios.post(`/api/block/${otherUserId}`);
            setIsBlocked(true);
            toast.success("Blocked successfully");
            router.refresh();
            setIsLoading(true);
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    }

    const handleUnBlock = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            await axios.delete(`/api/block/${otherUserId}`);
            setIsBlocked(false);
            toast.success("Blocked successfully");
            router.refresh();
            setIsLoading(true);
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    }
    
    return (
        <div className={style}>
            {isBlocked ?
                (
                    <ActionTooltip title={"Unblock"}>
                        <button onClick={handleUnBlock} disabled={isLoading} className="group">
                            <XCircle className="h-4 w-4 dark:text-zinc-400 text-zinc-600 hover:text-destructive dark:hover:text-destructive transform group-hover:-translate-y-1 transition duration-400" />
                        </button>
                    </ActionTooltip>
                )
                :
                (
                    <ActionTooltip title={"Block"}>
                        <button onClick={handleBlock} disabled={isLoading} className="group">
                            <MinusCircle className="h-4 w-4 dark:text-zinc-400 text-zinc-600 hover:text-destructive dark:hover:text-destructive transform group-hover:-translate-y-1 transition duration-400" />
                        </button>
                    </ActionTooltip>
                )
            }
        </div>
    )
}
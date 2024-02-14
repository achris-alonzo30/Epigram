"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

import { ShieldMinus, ShieldX } from "lucide-react";

import { Button } from "@/components/ui/button";

type BlockedButton = {
    otherUserId: string;
    style?: string;
}
export const BlockButton = ({ otherUserId, style }: BlockedButton) => {
    const [isBlocked, setIsBlocked] = useState(false);
    const handleBlock = async () => {
        try {
            await axios.post(`/api/block/${otherUserId}`);
            setIsBlocked(true);
            toast.success("Blocked successfully");
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    }

    const handleUnBlock = async () => {
        try {
            await axios.delete(`/api/block/${otherUserId}`);
            setIsBlocked(false);
            toast.success("Blocked successfully");
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    }

    return (
        <div className={style}>
            {isBlocked ?
                (
                    <button onClick={handleUnBlock} className="transform hover:-translate-y-1 transition duration-400" >
                        <ShieldMinus className="h-4 w-4 dark:text-zinc-400 text-zinc-600 hover:text-destructive dark:hover:text-destructive" />
                    </button>
                ) :
                (
                    <button onClick={handleBlock} className="transform hover:-translate-y-1 transition duration-400">
                        <ShieldX className="h-4 w-4 dark:text-zinc-400 text-zinc-600 hover:text-destructive dark:hover:text-destructive" />
                    </button>
                )
            }
        </div>
    )
}
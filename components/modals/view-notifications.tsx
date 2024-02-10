"use client";
import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import toast from 'react-hot-toast';
import { STATUS } from "@prisma/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { Bell } from "lucide-react"

import { 
    Form, 
    FormControl, 
    FormDescription, 
    FormField, 
    FormItem, 
    FormLabel 
} from "@/components/ui/form";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"


const formSchema = z.object({
    actions: z.nativeEnum(STATUS),
})

export const ViewNotifiactions = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            actions: STATUS.PENDING,
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        try {
            // TODO: Axios API Request

            toast.success("Post created");
            form.reset();
            router.refresh();
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsOpen(false)
        }
    }

    const handleClose = () => {
        setIsOpen(false);
        form.reset();
    }

    return (
        <Dialog onOpenChange={handleClose}>
            <DialogTrigger asChild>
                <button className="flex items-center px-4 py-2 mt-5 text-gray-500 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-950 dark:hover:text-gray-400 hover:text-gray-700">
                    <Bell className="w-5 h-5" />
                    <span className="mx-4 font-medium">Notifications</span>
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] px-2">
                <DialogHeader>
                    <DialogTitle className="text-zinc-800 dark:text-zinc-100 mb-4 text-lg font-medium">Notifications</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-y-2">
                    <Form {...form}>
                        {/* Render the notifications informations here, include user avatar, username, and the message */}
                        {/* Different types of notifications: liked your posts, commented to your posts, and follower request */}
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8 px-2">
                            <div>
                                <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="actions"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                            <div className="space-y-0.5">
                                            <FormLabel>Privacy</FormLabel>
                                            <FormDescription className="text-zinc-600 dark:text-zinc-400">Change privacy settings for profile visibility.</FormDescription>
                                            </div>
                                            <FormControl>
                                                
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                </div>
                            </div>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    )
}
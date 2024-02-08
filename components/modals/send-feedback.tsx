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
    FormLabel,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    fullName: z.string().min(1, {
        message: "Name is required",
    }),
    email: z.string().email({
        message: "Invalid email",
    }),
    title: z.string().min(1, {
        message: "Title is required",
    }),
    feedback: z.string().min(1, {
        message: "Feedback is required",
    })
})


export const SendFeedback = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            title: "",
            feedback: "",
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {

        } catch (error) {

        } finally {
            setIsOpen(false)
        }
    }

    const handleClose = () => {
        setIsOpen(false);
        form.reset();
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] px-2">
                <DialogHeader>
                    <DialogTitle className="text-zinc-800 dark:text-zinc-100 text-lg font-medium">Send Feedback</DialogTitle>
                    <DialogDescription className="text-zinc-600 dark:text-zinc-400">
                        Your feedback matter to us and it will help us improve.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8 px-2">
                        <div>
                            <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="fullName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Elon Musk" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}

                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="elon_musk@tesla.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}

                                />
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Feedback Title" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}

                                />
                                <FormField
                                    control={form.control}
                                    name="feedback"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter feedback or concerns..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
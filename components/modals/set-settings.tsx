"use client";
import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { Settings } from "lucide-react";

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
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { LoadingSpinner } from "../loading-spinner";


const formSchema = z.object({
    isPublic: z.boolean().optional(),
})


export const SetSettings = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            isPublic: false,
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
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
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogTrigger asChild>
                <button  className="flex items-center px-4 py-2 mt-5 text-gray-500 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-950 dark:hover:text-gray-400 hover:text-gray-700">
                    <Settings className="w-5 h-5" />
                    <span className="mx-4 font-medium">Settings</span>
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] px-2">
                <DialogHeader>
                    <DialogTitle className="text-zinc-800 dark:text-zinc-100 mb-4 text-lg font-medium">Setting</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8 px-2">
                        <div>
                            <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="isPublic"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                            <div className="space-y-0.5">
                                            <FormLabel>Privacy</FormLabel>
                                            <FormDescription className="text-zinc-600 dark:text-zinc-400">Change privacy settings for profile visibility.</FormDescription>
                                            </div>
                                            <FormControl>
                                                <Switch
                                                 checked={field.value}
                                                 onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <DialogFooter className="flex justify-end items-center gap-x-2 px-4">
                            <Button type="submit" disabled={isLoading} className="items-center inline-flex focus:outline-none justify-center text-white bg-[#7600FF] duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-[#7600FF]/70 hover:border-white hover:text-white lg:w-auto px-6 py-3 rounded-lg text-center w-full transform hover:-translate-y-1 transition duration-400">
                                {isLoading ? <LoadingSpinner /> : "Save"}
                            </Button>   
                        </DialogFooter>                         
                    </form>
                </Form>
            </DialogContent>

        </Dialog>
    )
}
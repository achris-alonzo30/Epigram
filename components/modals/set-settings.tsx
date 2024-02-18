"use client";
import * as z from "zod";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import toast from 'react-hot-toast';
import { User } from "@prisma/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { BlockButton } from "../block-button";


const formSchema = z.object({
    isPrivate: z.boolean().optional(),
})

type SetSettingsProps = {
    children: React.ReactNode;
    userPrivacy: User["isPrivate"];
    blockedUsers: { blocked: User }[] | null;
}


export const SetSettings = ({ children, userPrivacy, blockedUsers }: SetSettingsProps) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            isPrivate: userPrivacy || false,
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/settings`, values);

            toast.success("Settings Updated successfully");
            router.refresh();
            form.reset();
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setOpen(false)
        }
    }

    const handleClose = () => {
        setOpen(false);
        form.reset();
    }

    return (
        <Dialog onOpenChange={handleClose}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] px-2">
                <DialogHeader>
                    <DialogTitle className="text-zinc-800 dark:text-zinc-100 mb-4 text-lg font-medium">Settings</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8 px-2">
                        <div>
                            <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="isPrivate"
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
                                <div className="flex flex-col space-y-0.5 rounded-lg border p-3 shadow-sm">
                                    <h2 className="text-sm">Blocked Users</h2>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">These users will not be able to see your profile.</p>
                                    {blockedUsers && blockedUsers.length === 0 ? (
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400">No blocked users</p>
                                    ) : (
                                        blockedUsers?.map((blockedUser) => {

                                            return (
                                                <div className="flex flex-row items-center justify-between rounded-lg border p-2 shadow-sm" key={blockedUser.blocked.id}>
                                                    <div className="flex items-center gap-x-2">
                                                        <Image src={blockedUser.blocked.profileImageUrl!} alt="logo" width="30" height="30" className="rounded-full aspect-square object-cover" />
                                                        <p className="text-sm">{blockedUser.blocked.username}</p>
                                                    </div>

                                                    <BlockButton style="pt-1 pr-2" otherUserId={blockedUser.blocked.id} />
                                                </div>
                                            )
                                        })
                                    )}
                                </div>
                            </div>
                        </div>
                        <DialogFooter className="flex justify-end items-center gap-x-2 px-4">
                            <Button type="submit" disabled={isLoading} className="items-center inline-flex focus:outline-none justify-center text-white bg-[#7600FF] duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-[#7600FF]/70 hover:border-white hover:text-white lg:w-auto px-6 py-3 rounded-lg text-center w-full transform hover:-translate-y-1 transition duration-400">
                                {isLoading ?  <LoadingSpinner size="default" isLabel>Updating</LoadingSpinner> : "Update"}
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>

        </Dialog>
    )
}
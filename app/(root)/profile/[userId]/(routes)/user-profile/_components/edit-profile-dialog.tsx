"use client";

import * as z from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { User } from "@prisma/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal";
import { zodResolver } from "@hookform/resolvers/zod";

import { Pencil } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FileUpload } from "@/components/file-upload";
import { ActionTooltip } from "@/components/action-tooltip";
import { LoadingSpinner } from "@/components/loading-spinner";

const formSchema = z.object({
  username: z.optional(z.string().min(1)),
  bio: z.optional(z.string().min(1)),
  profileImageUrl: z.optional(z.string().min(1)),
  backgroundImageUrl: z.optional(z.string().min(1)),
});

type EditProfileButtonProps = {
  user: User;
}

export const EditProfileDialog = ({ user }: EditProfileButtonProps) => {
  const { onClose } = useModal();
    const router = useRouter();
    // TODO: Get the current logged in user and fetch it's details from the database

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: user?.username ?? "",
            bio: user?.bio ?? "",
            profileImageUrl: user?.profileImageUrl ??"",
            backgroundImageUrl: user?.backgroundImageUrl ?? ""
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            // TODO: Axios API Request
            //await axios.post(`/api/profile/edit-profile`, values);
            console.log(values)
            toast.success("Profile Updated");
            form.reset();
            router.refresh();
            onClose();
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    }

    const handleClose = () => {
        form.reset();
        onClose();
    }
  return (

    <Dialog onOpenChange={handleClose}>
      <DialogTrigger>
        <ActionTooltip title="Edit Profile">
          <Pencil className="h-4 w-4 text-zinc-500" />
        </ActionTooltip>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] px-2">
        <DialogHeader>
          <DialogTitle className="text-zinc-800 dark:text-zinc-100">Edit Profile</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-6 px-4">
              <FormField
                  control={form.control}
                  name="profileImageUrl"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-center text-center mx-auto gap-y-2">
                      <FormLabel>Profile Image</FormLabel>
                      <FormControl>
                        <FileUpload
                          endpoint="profileImageUrl"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormDescription>Max File Size: 16MB </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="backgroundImageUrl"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-center text-center mx-auto gap-y-2" >
                      <FormLabel>Background Image</FormLabel>
                      <FormControl>
                        <FileUpload
                          endpoint="postImageUrl"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormDescription>16:9 Aspect Ratio Recommended</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={user?.username || "Enter Username"}
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={user?.bio || "Enter Bio"}
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>
            <DialogFooter className="flex justify-end items-center gap-x-2 px-4">
              <Button variant="ghost" disabled={isLoading} onClick={() => form.reset()}>
                Reset
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? <LoadingSpinner /> : "Update"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}


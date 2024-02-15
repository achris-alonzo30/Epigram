"use client";

import * as z from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { Post } from "@prisma/client";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { Pencil } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FileUpload } from "@/components/file-upload";
import { LoadingSpinner } from "@/components/loading-spinner";


const formSchema = z.object({
  caption: z.string().min(1, {
    message: "Caption is required",
  }),
  postImageUrl: z.string().min(1, {
    message: "Content is required",
  }),
  tags: z.string().min(3, {
    message: "Tags must be at least 3 characters",
  }),
});

export function EditPost({ post }: { post: Post }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      caption: post?.caption || "",
      postImageUrl: post?.postImageUrl ||"",
      tags: post?.tags || "",
    }
  })

  useEffect(() => {
    form.reset({
      caption: post?.caption || "",
      postImageUrl: post?.postImageUrl ||"",
      tags: post?.tags || "",
    })
  }, [post, form])

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // TODO: Axios API Request
      await axios.patch(`/api/posts/${post.id}/edit-post`, values);

      toast.success("Post updated");
      form.reset();
      router.refresh();
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
        <button className="-mt-1.5">
            <Pencil className="h-4 w-4 text-zinc-500 hover:text-zinc-400 transform hover:-translate-y-1 transition duration-400 " />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] px-2">
        <DialogHeader>
          <DialogTitle className="text-zinc-800 dark:text-zinc-100 text-lg font-medium">Edit Post</DialogTitle>
          <DialogDescription className="text-zinc-600 dark:text-zinc-400">
            Update your post with a fresh photo, tags, and caption.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8 px-2">
            <div>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="postImageUrl"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-center justify-center text-center">
                      <FormLabel>Image Post</FormLabel>
                      <FormControl>
                        <FileUpload
                          endpoint="postImageUrl"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel >Tags</FormLabel>
                      <FormControl>
                        <Input
                          placeholder=""
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
                  name="caption"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Caption</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder=""
                          disabled={isLoading}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter className="flex justify-end items-center gap-x-2">
              <Button variant="ghost" disabled={isLoading} onClick={() => form.reset()}>
                Reset
              </Button>
              <Button type="submit" disabled={isLoading} className="items-center inline-flex focus:outline-none justify-center text-white bg-[#7600FF] duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-[#7600FF]/70 hover:border-white hover:text-white lg:w-auto px-6 py-3 rounded-lg text-center w-full transform hover:-translate-y-1 transition duration-400">
                {isLoading ? <LoadingSpinner size="sm" /> : "Submit"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

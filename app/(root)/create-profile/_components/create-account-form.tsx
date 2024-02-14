"use client";

import * as z from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileUpload } from "@/components/file-upload";

const formSchema = z.object({
  username: z.string({ required_error: "Username is required." }).min(2, {
    message: "Username must be at least 2 characters.",
  }),
  profileImageUrl: z.string({ required_error: "Image URL is required." }).min(1),
});

export const CreateAccountForm = () => {
  const { user } = useUser();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: user?.firstName || "",
      profileImageUrl: user?.imageUrl || "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {

    try {
      const response = await axios.post("/api/profile/create-profile", values);
      form.reset();
      router.refresh();
      toast.success("Profile Created");
      router.push(`/profile/${response.data.id}`);
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  return (
    <Form  {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-2/3 px-3">
        <FormField
          control={form.control}
          name="profileImageUrl"
          render={({ field }) => (
            <FormItem className="space-y-3 flex flex-col items-center">
              <FormLabel>Add Profile Image</FormLabel>
              <FormControl className="">
                <FileUpload
                  endpoint="profileImageUrl"
                  onChange={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder={user?.firstName || "Username"}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end items-center">
          <Button type="submit" disabled={isLoading} className="items-center inline-flex focus:outline-none justify-center text-white bg-[#7600FF] duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-[#7600FF]/70 hover:border-white hover:text-white lg:w-auto px-6 py-3 rounded-lg text-center w-full transform hover:-translate-y-1 transition duration-400">Create</Button>
        </div>
      </form>
    </Form>
  )
}
"use client";

import * as z from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modals";
import { zodResolver } from "@hookform/resolvers/zod";

import { Loader2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { Textarea } from "@/components/ui/textarea";
import { FileUpload } from "@/components/file-upload";

const formSchema = z.object({
    name: z.string().min(1, {
      message: "Group name is required.",
    }),
    groupImageUrl: z.string().min(1, {
      message: "Group image is required.",
    }),
});

export function CreateGroup() {
  const { isOpen, onClose, type } = useModal();

  const router = useRouter();
  const isModalOpen = isOpen && type === "createGroup";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      groupImageUrl: ""
    }
  })

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // TODO: Axios API Request
      await axios.post(`/api/fun-mode/create-group`, values);

      toast.success("Group created");
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
    <Dialog open={isModalOpen} onOpenChange={handleClose} >
      <DialogContent className="sm:max-w-[425px] px-2">
        <DialogHeader>
          <DialogTitle className="text-zinc-800 dark:text-zinc-100">Create Your Own Group</DialogTitle>
          <DialogDescription className="text-zinc-600 dark:text-zinc-400">
            Build a community with your friends and support others.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-6 px-4">
              <div className="flex items-center justify-center text-center">
                <FormField
                  control={form.control}
                  name="groupImageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FileUpload
                          endpoint="postContent"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel >Group Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter a Group Name "
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>
            <DialogFooter className="flex justify-end items-center gap-x-2">
              <Button variant="ghost" disabled={isLoading} onClick={() => form.reset()}>
                Reset
              </Button>
              {isLoading ? (
                <Button type="submit" disabled={isLoading}>
                  <Loader2 className="h-4 w-4 animate-sping text-[#7600FF]" />
                </Button>
              ) : (
                <Button type="submit" disabled={isLoading}>
                  Create
                </Button>
              )}

            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

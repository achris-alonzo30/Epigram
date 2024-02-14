"use client";

import * as z from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Comment, Post, User } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { getPostComments } from "@/actions/get-post-comments";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    comment: z.string({ required_error: "Comment is required." }).min(1, {
        message: "Comment must be at least 1 character.",
    }),
})

type CommentFormProps = {
    post: Post;
    userId: User["id"];
}

export const CommentForm = ({ post, userId }: CommentFormProps) => {


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            comment: "",
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await axios.post(`/api/posts/${post.id}/comment-post`, values)
            toast.success("Comment added successfully");
            form.reset();


        } catch (error) {
            toast.error("Comment failed to add. Please try again.");
        }
    }

    const handleKeyPress: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            form.handleSubmit(onSubmit)();
        }
    }

    // TODO: Filter all the badwords in the comment

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                    <FormField
                        control={form.control}
                        name="comment"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea {...field} placeholder="Add a comment..." onKeyDown={handleKeyPress} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </>
    )
}
"use client";

import * as z from "zod";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Post, User } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";

import { ChevronDownCircle, ChevronUpCircle } from "lucide-react";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { ActionTooltip } from "@/components/action-tooltip";


const formSchema = z.object({
    comment: z.string({ required_error: "Comment is required." }).min(1, {
        message: "Comment must be at least 1 character.",
    }),
})

type CommentFormProps = {
    post: Post;
    userId: User["id"];
}

type Comment = {
    id: string;
    userId: User["id"];
    postId: string;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
    commenter: {
        id: User["id"];
        username: User["username"];
        profileImageUrl: User["profileImageUrl"];
    }
}

export const CommentForm = ({ post, userId }: CommentFormProps) => {
    // TODO: Filter all the badwords in the comment
    const [comments, setComments] = useState<Comment[]>([]);
    const [showAllComments, setShowAllComments] = useState(false);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const fetchedComments = await getAllCommentsOnPost();
                if (fetchedComments !== null) {
                    setComments(fetchedComments);
                }
            } catch (error) {
                toast.error("Something wrong while fetching comments. Please try again");
            }
        }
        fetchComments();
    }, [post.id]);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            comment: "",
        }
    })

    const getAllCommentsOnPost = async () => {
        try {
            const response = await axios.get(`/api/posts/${post.id}/comment-post`);
            return response.data
        } catch (error) {
            throw new Error("Something wrong while fetching comments. Please try again");
        }
    }


    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post(`/api/posts/${post.id}/comment-post`, values)
            toast.success("Comment added successfully");
            form.reset();

            const updatedComments = await getAllCommentsOnPost();
            if (updatedComments !== null) {
                setComments(updatedComments);
            }
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

    const toggleShowAllComments = () => {
        setShowAllComments(!showAllComments);
    }


    return (
        <div className="flex flex-col w-full">
            <div className="max-h-40 overflow-y-auto">
            {comments.slice(0, showAllComments ? comments.length : 3).map((comment) => (
                <div key={comment.id} className="flex items-center gap-x-2 p-2 hover:border hover:border-bg-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-600 rounded-xl">
                    <ActionTooltip title={comment.commenter.username}>
                        <Image src={comment.commenter.profileImageUrl!} alt=" profile" height="20" width="20" className="rounded-full object-cover aspect-square " />
                    </ActionTooltip>
                    <p className="text-xs font-medium text-foreground">{comment.comment}</p>
                </div>
            ))}
            </div>
            {comments.length > 3 && (
                <button  className="flex mx-auto my-2 text-zinc-400 hover:text-zinc-300 dark:text-zinc-700 dark:hover:text-zinc-600 cursor-pointer" onClick={toggleShowAllComments}>
                    {showAllComments ? <ChevronUpCircle className="h-4 w-4 " /> : <ChevronDownCircle className="h-4 w-4" />}
                </button>
            )}
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
        </div>
    )
}
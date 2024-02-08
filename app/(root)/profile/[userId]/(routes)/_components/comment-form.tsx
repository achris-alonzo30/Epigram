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
    FormMessage 
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    comment: z.string({ required_error: "Comment is required." }).min(1, {
        message: "Comment must be at least 1 character.",
    }),
})

export const CommentForm = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            comment: "",
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            console.log(values)

        } catch (error) {
            toast.error("Something went wrong");
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea {...field} placeholder="Add a comment..." />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="hidden"/>
            </form>
        </Form>
    )
}
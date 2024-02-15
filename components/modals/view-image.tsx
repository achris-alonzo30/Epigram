"use client";

import Image from "next/image"
import { Post } from "@prisma/client";

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";

type ViewImageProps = {
    postImageUrl: Post["postImageUrl"];
    children: React.ReactNode
}

export const ViewImage = ({ postImageUrl, children }: ViewImageProps) => {
    return (
        <Dialog>
            <DialogTrigger>
                {children}
            </DialogTrigger>
            <DialogContent>
                <Image src={postImageUrl!} alt="post" width="250" height="250" className="w-full h-full aspect-square object-cover" />
            </DialogContent>
        </Dialog>
    )
}
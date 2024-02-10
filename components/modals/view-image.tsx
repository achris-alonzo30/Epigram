"use client";

import * as z from "zod";
import axios from "axios";
import Image from "next/image"
import { useState } from "react";
import toast from 'react-hot-toast';
import { Post } from "@prisma/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";



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
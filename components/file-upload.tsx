"use client";

import toast from "react-hot-toast";
import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";

import "@uploadthing/react/styles.css";
import Image from "next/image";
import { X } from "lucide-react";
import { Label } from "@/components/ui/label";

type FileUploadProps = {
    onChange: (url?: string) => void;
    endpoint: keyof typeof ourFileRouter;
    value: string;
}

export const FileUpload = ({ onChange, endpoint, value }: FileUploadProps) => {
    const fileType = value?.split(".").pop();
    console.log(endpoint)
    if (value && fileType && endpoint === "profileImageUrl") {
        return (
            <div className="relative h-20 w-20">
                <Image
                    src={value}
                    fill
                    alt="Upload"
                    className="rounded-full object-cover"
                />
                <button type="button" className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm" onClick={() => onChange("")}>
                    <X className="h-4 w-4" />
                </button>
            </div>
        )
    }
    if (value && fileType && endpoint === "postImageUrl") {
        return (
            <div className="relative h-60 w-60">
                <Image
                    src={value}
                    fill
                    alt="Upload"
                    className="rounded-lg aspect-square object-cover"
                />
                <button type="button" className="bg-rose-500 text-white p-1 rounded-full absolute -top-3 -right-3 shadow-sm" onClick={() => onChange("")}>
                    <X className="h-4 w-4" />
                </button>
            </div>
        )
    }
    return (
        <div className="flex flex-col items-center gap-y-2">
            <UploadDropzone
                endpoint={endpoint}
                onClientUploadComplete={(res) => { onChange(res?.[0].url) }}
                onUploadError={(error: Error) => {
                    toast.error(`Error: ${error?.message}`)
                }}
            />
            <Label className="text-sm font-medium text-muted-foreground">
                To uploading multiple files you can select then drag and drop the files here.
            </Label>
        </div>
    )
}
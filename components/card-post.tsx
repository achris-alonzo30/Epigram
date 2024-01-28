import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dropdown } from "@/components/dropdown";
import { FormInput } from "@/components/form-input";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Bookmark, Heart, MessageCircle } from "lucide-react";

type CardWrapperProps = {
  username: string;
  avatarUrl?: string;
  postDescription?: string;
  postTitle?: string;
  postImageUrl?: string;
};

export const CardPost = () => {
  return (
    <Card className="w-[450px] h-auto border-0 shadow-md ">
      <CardHeader>
        <CardTitle className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-x-2">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                height={30}
                width={30}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-base font-medium text-gray-500">
              Username
            </span>
          </div>
          <div>
            <Dropdown />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center px-3">
        {/* TODO: Add Carousel */}
        {/* TODO: Make it applicable for videos */}
        <Image
          src="/corgi.avif"
          alt="corgi"
          width={250}
          height={250}
          className=" object-cover"
        />
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-y-4 mt-3 mx-auto">
        <div className="flex items-center gap-x-3 text-gray-500">
          <Heart className="h-5 w-5" />
          <MessageCircle className="h-5 w-5" />
          <Bookmark className="h-5 w-5" />
        </div>

        <p className="line-clamp-2 text-muted-foreground text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam a
          aut itaque nostrum tenetur sed nam quis ea ratione totam mollitia,
          voluptatum omnis animi tempora deserunt cupiditate, ipsum eligendi
          excepturi?
        </p>
        <Separator />
        <div className="w-full">
          <FormInput />
        </div>
      </CardFooter>
    </Card>
  );
};

import Image from "next/image";

import {
  Star,
  Heart,
  MessageCircle,
  MoreHorizontal
} from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FormInput } from "@/components/form-input";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export const PostCard = () => {
  // Todo: Fetch all the currentUser posts
  return (
    <Card className="w-full md:w-[450px] h-fit border-0 shadow-md rounded-xl px-1 ">
      <CardHeader>
        <CardTitle className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-x-2">
            {/* TODO: Add a badge in the avatar that shows that the user is verified */}
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
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger>
                <MoreHorizontal className="h-6 w-6 hover:bg-gray-500 border-none rounded-md" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
          <Star className="h-5 w-5" />
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

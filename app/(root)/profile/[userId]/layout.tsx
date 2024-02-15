import { redirect } from "next/navigation";
import { getLoginUser } from "@/actions/auth-service";
import { getBlockedUsers } from "@/actions/block-service";

import { Navbar } from "@/app/(root)/profile/[userId]/_components/navbar/navbar";
import { Leftbar } from "@/app/(root)/profile/[userId]/_components/leftbar/leftbar";
import { Rightbar } from "@/app/(root)/profile/[userId]/_components/rightbar/rightbar";


const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
    const user = await getLoginUser();

    if (!user) return redirect("/");

    const blockedUsers = await getBlockedUsers(user?.id)
    
    return (
        <div className="h-full">
            <div className="h-[60px] md:pl-56 fixed inset-y-0 w-full z-50">
                <Navbar user={user} blockedUsers={blockedUsers}/>
            </div>
            <div className="hidden md:flex flex-col h-full w-56 fixed inset-y-0 z-50">
                <Leftbar userId={user?.id!} userPrivacy={user?.isPrivate} blockedUsers={blockedUsers} />
            </div>
            <div className="absolute right-0 h-full lg:w-60 top-16 bottom-0 lg:block hidden">
                <Rightbar user={user}/>
            </div>
            <main className="md:pl-64 lg:pr-64 pt-[80px] h-full">
              {children}  
            </main>
        </div>
    );
};

export default ProfileLayout;
import { Navbar } from "@/app/(root)/profile/[userId]/_components/navbar/navbar";
import { Leftbar } from "@/app/(root)/profile/[userId]/_components/leftbar/leftbar";
import { Rightbar } from "@/app/(root)/profile/[userId]/_components/rightbar/rightbar";
import { getLoginUser } from "@/actions/get-login-user";

type ProfileLayoutProps = {
    children: React.ReactNode;
    params: { userId: string };
}

const ProfileLayout = async ({ children, params }: ProfileLayoutProps) => {
    const user = await getLoginUser();

    // TODO: Add a skeleton loader

    return (
        <div className="h-full">
            <div className="h-[60px] md:pl-56 fixed inset-y-0 w-full z-50">
                <Navbar username={user?.username!} profileImageUrl={user?.profileImageUrl!} userId={user?.id!}  />
            </div>
            <div className="hidden md:flex flex-col h-full w-56 fixed inset-y-0 z-50">
                <Leftbar userId={user?.id!} />
            </div>
            <div className="absolute right-0 h-full lg:w-60 top-16 bottom-0 lg:block hidden">
                <Rightbar />
            </div>
            <main className="md:pl-64 lg:pr-64 pt-[80px] h-full">
              {children}  
            </main>
        </div>
    );
};

export default ProfileLayout;
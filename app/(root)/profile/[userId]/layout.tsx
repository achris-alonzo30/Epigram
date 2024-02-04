import { Navbar } from "@/components/navigations/navbar";
import { Leftbar } from "@/components/navigations/leftbar";
import { Rightbar } from "@/components/navigations/rightbar";
import { getCurrentUser } from "@/actions/get-user-details";

const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
    const user = await getCurrentUser();

    return (
        <div className="h-full">
            <div className="h-[60px] md:pl-56 fixed inset-y-0 w-full z-50">
                <Navbar username={user?.username!} profileImageUrl={user?.profileImageUrl!}  />
            </div>
            <div className="hidden md:flex flex-col h-full w-56 fixed inset-y-0 z-50">
                <Leftbar />
            </div>
            <div className="absolute right-0 h-full w-60 top-16 bottom-0 lg:block hidden">
                <Rightbar />
            </div>
            <main className="md:pl-56 pt-[80px] h-full">
              {children}  
            </main>
        </div>
    );
};

export default ProfileLayout;
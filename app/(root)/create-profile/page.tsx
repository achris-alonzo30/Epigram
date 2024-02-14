import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import { getLoginUser } from "@/actions/auth-service";
import { Separator } from "@/components/ui/separator";
import { CreateAccountForm } from "./_components/create-account-form";


const CreateProfilePage = async () => {
    const user = await currentUser();

    // Check if the user is already existed in the database
    const existingUser = await getLoginUser();

    // Then redirect to their profile page
    if (existingUser?.userId === user?.id) return redirect(`/profile/${existingUser?.id}`);

    // else return the create account form
    return (
        <section className="h-full">
            <div className="h-full max-w-3xl flex flex-col items-center justify-center mx-auto mt-6 ">
                <div className="flex flex-col space-y-2 items-center justify-center text-center ">
                    <div className="lg:text-6xl md:text-4xl text-2xl font-extrabold dark:text-zinc-100 text-zinc-800">
                        <h1>Welcome <span className="capitalize inline-flex animate-text-gradient bg-gradient-to-r from-[#FFA0A0] via-[#7600FF] to-[#c7d2fe] bg-[240%_auto] bg-clip-text lg:text-6xl md:text-4xl text-2xl font-extrabold text-transparent">{user?.firstName}</span>!</h1>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-base font-medium">Let&apos;s start creating your profile</p>
                </div>
                <Separator className="w-2/3 my-4" />
                <CreateAccountForm />
            </div>
        </section>
    )
}

export default CreateProfilePage
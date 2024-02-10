import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs";
import { getLoginUser } from "@/actions/get-login-user";
import { CreateProfileForm } from "./_components/create-profile-form"

const CreateProfilePage = async () => {
    const { userId } = auth();
    // Check first if the user is existed in the database
    const existingUser = await getLoginUser();

    // Redirect them to their account feed
    if (existingUser?.userId === userId) return redirect(`/profile/${existingUser?.id}`);
    return (
        <div className="h-full">
            <CreateProfileForm  />
        </div>
    )
}

export default CreateProfilePage
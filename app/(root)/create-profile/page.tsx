import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"

import { currentProfile } from "@/lib/current-profile";
import { CustomizeProfileForm } from "./_components/customize-form"

const CustomizeProfilePage = async () => {
    // Check if the user is existed in the database
    const existingUser = await currentProfile();
    const userMode = await db.userSetting.findFirst({
        where: {
            userId: existingUser?.id
        },
        select: {
            mode: true
        }
    })
    // Redirect them to their account feed
    const routeMode = `${userMode?.mode!.toLowerCase()}-mode`;    
    if (existingUser) return redirect(`/mode/${routeMode}/${existingUser?.id}`)

    return (
        <div className="h-full">
            <CustomizeProfileForm />
        </div>
    )
}

export default CustomizeProfilePage
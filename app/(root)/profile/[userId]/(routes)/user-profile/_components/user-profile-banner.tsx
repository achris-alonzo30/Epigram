import { User } from "@prisma/client";

import { UserProfileBio } from "./user-profile-bio";
import { UserProfileBadge } from "./user-profile-badge";
import { EditProfileDialog } from "./edit-profile-dialog";
import { UserProfileSocialCount } from "./user-profile-social-count";

type UserProfileBannerProps = {
    user: User;
}

export const UserProfileBanner = ({ user }: UserProfileBannerProps) => {
    // TODO: Add background image
    // TODO: Take the length of the followers, following, and posts count
    return (
        <div className="p-6 border shadow-md rounded-lg lg:ml-4 lg:mx-0 mx-2 ">
            <div className="flex flex-col px-3 py-1.5">   
                <div className="p-2 flex flex-row justify-between">
                    <UserProfileBadge user={user!} />
                    <div>
                        <EditProfileDialog user={user!} />
                    </div>
                </div>
                <UserProfileBio user={user!} />
                <UserProfileSocialCount />
            </div>
        </div>
    )
}
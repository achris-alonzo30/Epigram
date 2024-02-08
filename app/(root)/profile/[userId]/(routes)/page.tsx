
import { PostCard} from "./_components/post-card";
import { HomepageHeadings } from "./_components/homepage-headings";

const ProfilePage = () => {
    // TODO: Add loading state
    // TODO: If there are no posts, show a message
    // TODO: Add Infinite scroll
    // TODO: Fetch all posts of the user and the accepted followers
    return (
        <div className="p-6">
            <HomepageHeadings />
            <div className="flex flex-col items-center gap-y-4 my-4 mt-4">
                <PostCard />
            </div>
        </div>
    )
}

export default ProfilePage;
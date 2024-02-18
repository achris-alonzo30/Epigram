import Image from "next/image";
import { Eye, Heart } from "lucide-react";
import { ViewImage } from "@/components/modals/view-image";
import { getProfileDetails } from "@/actions/user-profile-service";
import { getAllSavedPosts, getNumberOfLikes } from "@/actions/post-service";

const UserSavedPostsPage = async ({ params }: { params: { userId: string } }) => {
    // TODO: Fetch all the saved posts of the user from the database
    // TODO: Do infinite scroll
    // TODO: Add filter posts
    // TODO: Add the framer motion effect

    const savedPosts = await getAllSavedPosts(params.userId);
    const user = await getProfileDetails(params.userId);
    const postIds = user?.posts ? user?.posts.map((post) => post.id) : [];
    const numberOfLikesPerPost = await getNumberOfLikes(postIds);
    return (
        <div className="p-6">
            {savedPosts && savedPosts.length === 0 && (
                <div className="flex flex-col items-center mx-auto gap-y-2">
                    <Image src="/image.svg" alt="image" width="100" height="100" />
                    <p className="text-center">No saved posts</p>
                </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full overflow-y-auto">
                {savedPosts?.map((savedPost) => (
                    <div className="relative rounded-lg min-w-0" key={savedPost.post.id}>
                        <div className="group relative rounded-xl h-full w-full overflow-hidden">
                            <ViewImage post={savedPost.post} username={savedPost.post.creator.username} userProfileImageUrl={savedPost.post.creator.profileImageUrl} userId={savedPost.post.creator.id}>
                                <div role="button" className="relative">
                                    {/* Mask with the same size as the image */}
                                    <div className="hidden group-hover:flex absolute inset-0 bg-black/40 rounded-xl">
                                        <div className="flex justify-center items-center mx-auto my-auto gap-x-8">
                                            <div className="flex flex-col items-center">
                                                <Heart className="h-4 w-4 text-white" />
                                                <p className="text-sm hidden group-hover:block text-zinc-300">{numberOfLikesPerPost}</p>
                                            </div>
                                            <div className="flex flex-col items-center ">
                                                <Eye className="h-4 w-4 text-white" />
                                                <p className="text-sm hidden group-hover:block text-zinc-300">{savedPost.post.views}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <Image
                                        src={savedPost.post.postImageUrl!}
                                        alt="post"
                                        width="300"
                                        height="300"
                                        className="rounded-xl aspect-square object-cover"
                                    />
                                </div>
                            </ViewImage>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>

    )
}

export default UserSavedPostsPage;
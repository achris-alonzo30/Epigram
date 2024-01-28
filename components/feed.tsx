import { CardPost } from "@/components/card-post"

export const Feed = () => {
    return (
        <section className="absolute pt-14 w-full">
            <main className="flex flex-col mx-auto h-full py-10 items-center justify-center">
                <div>
                    {/* TODO: Add Stories */}
                </div>
                <div className="flex flex-col items-center justify-center px-16 pt-8">
                    <CardPost />
                </div>
            </main>
        </section>
    )
}

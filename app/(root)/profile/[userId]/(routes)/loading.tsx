import { LoadingSpinner } from "@/components/loading-spinner";

export default function Loading() {
    return (
        <div className="flex flex-col space-y-2mx-auto justify-center items-center">
            <LoadingSpinner />
            <h1 className="text-2xl text-zinc-600 dark:text-zinc-400">Loading...</h1>
        </div>
    )
}
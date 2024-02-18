import { TextGradient } from "@/components/animated-ui/text-gradient";
import { LoadingSpinner } from "@/components/loading-spinner";

export default function Loading() {
    return (
        <div className="flex flex-col space-y-2 mx-auto justify-center items-center h-full">
            <TextGradient>
            <LoadingSpinner size="icon" />
            </TextGradient>
            <h1 className="text-2xl text-zinc-600 dark:text-zinc-400">Loading...</h1>
        </div>
    )
}
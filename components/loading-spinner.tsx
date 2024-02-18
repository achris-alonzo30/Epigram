import { Loader } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const spinnerVariants = cva(
    "text-muted-foreground animate-spin",
    {
        variants: {
            size: {
                default: "w-4 h-4",
                sm: "w-2 h-2",
                lg: "w-6 h-6",
                icon: "h-10 w-10",
            }
        },
        defaultVariants: {
            size: "default"
        }
    }
)

type LoadingSpinnerProps = {
    size: VariantProps<typeof spinnerVariants>["size"];
    isLabel?: boolean;
    children?: React.ReactNode
}

export const LoadingSpinner = ({size, isLabel, children }: LoadingSpinnerProps) => {
  return (
    <div className="flex flex-row items-center gap-x-2">
        <Loader className={cn(spinnerVariants({size}))} />
        {isLabel && <span className="text-sm">{children}</span>}
    </div>
  )
}

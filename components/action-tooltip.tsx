import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


type ActionTooltipProps = {
  children: React.ReactNode;
  title: string;
}

export const ActionTooltip = ({ title, children }: ActionTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p className="font-semibold text-sm capitalize">{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
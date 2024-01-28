import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"


type HoverContentProps = {
    children: React.ReactNode;
    title: string;
}
  
export const HoverTooltip = ({ title, children }: HoverContentProps) => {
    return (
        <TooltipProvider>
  <Tooltip>
    <TooltipTrigger>{children}</TooltipTrigger>
    <TooltipContent>
      <p>{title}</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

    )
}
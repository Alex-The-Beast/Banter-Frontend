import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export const Hint = ({ children, label, side, align }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className="bg-black text-white p-2 rounded-lg  border border-white/5" side={side} align={align}>
          <p className="text-sm font-medium ">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

import { TTag } from "@/utils/types/common";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ITagComponentProps {
  tag: TTag;
}

export default function TagComponent({ tag }: ITagComponentProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger>
          <div
            className={cn(
              "rounded-md px-2 py-1 text-xs border  cursor-pointer",
              tag.type === "normal" && "bg-white border-gray-500",
              tag.type === "category" && "bg-blue-600 text-white"
            )}
          >
            {tag.text}
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-white shadow-tooltip select-none">
          <span className="text-[#00000d] text-xs font-montserrat font-normal">
            {tag.description}
          </span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

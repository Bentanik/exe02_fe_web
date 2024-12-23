import { TTag } from "@/utils/types/common";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ITagComponentProps {
  tag: TTag;
}

export default function TagComponent({ tag }: ITagComponentProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger>
          <div
            className={`rounded-md px-2 py-1 text-xs border border-gray-500 cursor-pointer ${
              tag.type === "normal" && "bg-white"
            }`}
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

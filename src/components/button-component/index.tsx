import Link from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IButtonAdminProps {
  children: ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type: "none" | "admin";
  active: false | true;
  tooltip?: "not-full" | "full"; // set parent with tooltip
  description?: string;
  rest?:
    | ButtonHTMLAttributes<HTMLButtonElement>
    | AnchorHTMLAttributes<HTMLAnchorElement>;
}

export default function ButtonComponent({
  children,
  href,
  onClick,
  type,
  active,
  className,
  description,
  tooltip = "full",
  ...rest
}: IButtonAdminProps) {
  const baseClass = `min-h-10 px-4 flex items-center gap-x-3 rounded-md bg-white text-gray-800 hover:bg-gray-100 ${className}`;

  const [stateBaseClass, setStateBaseClass] = useState<string>(baseClass);
  const [mounted, setMounted] = useState(false); // Track if the component is mounted

  // Set mounted to true when the component is mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Only modify class after the component is mounted on the client
      if (type === "admin") {
        if (active) {
          setStateBaseClass(
            (prevClass) => `${prevClass} !bg-primary-admin !text-white`
          );
        } else {
          setStateBaseClass((prevClass) =>
            prevClass.replace("!bg-primary-admin !text-white", "")
          );
        }
      }
    }
  }, [mounted, type, active, className]);

  // Prevent rendering before the component has mounted (no SSR mismatch)
  if (!mounted) return null;

  // Render Link if href is provided
  if (href) {
    return (
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger className={`${tooltip === "full" && "w-full"}`}>
            <Link
              href={href}
              className={stateBaseClass}
              {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
              {children}
            </Link>
          </TooltipTrigger>
          <TooltipContent
            className={`bg-white shadow-tooltip select-none ${
              !description && "hidden"
            }`}
          >
            <span className="text-[#00000d] text-xs font-montserrat font-normal">
              {description}
            </span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  // Render Button if no href is provided
  return (
    <button
      onClick={onClick}
      className={stateBaseClass}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

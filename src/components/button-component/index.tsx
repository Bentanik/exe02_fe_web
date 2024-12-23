import Link from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface IButtonAdminProps {
  children: ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type: "none" | "admin";
  active: false | true;
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
  ...rest
}: IButtonAdminProps) {
  const baseClass = `min-h-10 px-4 flex items-center gap-x-3 rounded-md bg-white text-gray-800 hover:opacity-95 ${className}`;

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
      <Link
        href={href}
        className={stateBaseClass}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
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

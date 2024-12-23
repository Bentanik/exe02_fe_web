import { ReactNode } from "react";

export type TButton = {
  pathname?: string;
  onClick?: () => void;
  icon?: ReactNode;
  text?: string;
};

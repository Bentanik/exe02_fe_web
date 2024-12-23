import { ReactNode } from "react";

export type TNavbarAdmin = {
  pathname: string;
  onClick?: () => void;
  icon: ReactNode;
  text: string;
};

export type TDropdownAdmin = {
  pathname?: string;
  onClick?: () => void;
  icon: ReactNode;
  text: string;
};

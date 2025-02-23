import { ReactNode } from "react";

declare type TAdminLink = {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
};

declare type TButton = {
  pathname?: string;
  onClick?: () => void;
  icon?: ReactNode;
  text?: string;
  description?: string;
};

declare type TProgressStep = {
  onClick?: () => void;
  text?: string;
};

declare type TBreadcrumb = {
  link: string;
  title: string;
  isActive: boolean;
};

declare type TTag = {
  text: string;
  description: string;
  type: "normal" | "new" | "category";
};

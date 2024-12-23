import { TButton } from "@/utils/types/common";
import {
  Bolt,
  ChartColumnBig,
  CirclePlus,
  FolderKanban,
  House,
  LogOut,
  MailQuestion,
  UserPen,
  UserRoundCog,
} from "lucide-react";

export const NAV_SIDEBAR_TOP_ADMIN: TButton[] = [
  {
    pathname: "/admin/home",
    icon: <House className="text-base" strokeWidth={1.5} />,
    text: "Trang chủ",
  },
  {
    pathname: "/admin/analytic",
    icon: <ChartColumnBig className="text-base" strokeWidth={1.5} />,
    text: "Phân tích",
  },
  {
    pathname: "/admin/manage-user",
    icon: <UserRoundCog className="text-base" strokeWidth={1.5} />,
    text: "Quản lí người dùng",
  },
  {
    pathname: "/admin/manage-course",
    icon: <FolderKanban className="text-base" strokeWidth={1.5} />,
    text: "Quản lí khóa học",
  },
  {
    pathname: "/admin/support",
    icon: <MailQuestion className="text-base" strokeWidth={1.5} />,
    text: "Hỗ trợ người dùng",
  },
];

export const NAV_SIDEBAR_TOOL_ADMIN: TButton[] = [
  {
    pathname: "/admin/setting",
    icon: <Bolt className="text-base" strokeWidth={1.5} />,
    text: "Cài đặt",
  },
  {
    pathname: "/admin/profile",
    icon: <UserPen className="text-base" strokeWidth={1.5} />,
    text: "Hồ sơ",
  },
];

export const NAV_SIDEBAR_BOTTOM_ADMIN: TButton[] = [
  {
    pathname: "#!",
    onClick: () => alert("Đăng xuất"),
    icon: <LogOut className="text-base" strokeWidth={1.5} />,
    text: "Đăng xuất",
  },
];

export const DROPDOWN_MENU_ADMIN: TButton[] = [
  {
    pathname: "/admin/setting",
    icon: <Bolt className="text-base" strokeWidth={1.5} />,
    text: "Cài đặt",
  },
  {
    icon: <LogOut className="text-base" strokeWidth={1.5} />,
    text: "Đăng xuất",
  },
];

export const NAV_HEADER_ADMIN: TButton = {
  pathname: "/admin/create-course",
  icon: <CirclePlus className="text-base" strokeWidth={1.5} />,
  text: "Tạo khóa học",
};

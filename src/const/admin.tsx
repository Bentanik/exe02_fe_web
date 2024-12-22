import { TNavbarAdmin } from "@/utils/types/admin";
import {
  Bolt,
  ChartColumnBig,
  House,
  LogOut,
  MailQuestion,
  UserPen,
  UserRoundCog,
} from "lucide-react";

export const NAV_TOP_ADMIN: TNavbarAdmin[] = [
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
    icon: <ChartColumnBig className="text-base" strokeWidth={1.5} />,
    text: "Quản lí khóa học",
  },
  {
    pathname: "/admin/support",
    icon: <MailQuestion className="text-base" strokeWidth={1.5} />,
    text: "Hỗ trợ người dùng",
  },
];

export const NAV_TOOL_ADMIN: TNavbarAdmin[] = [
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

export const NAV_BOTTOM_ADMIN: TNavbarAdmin[] = [
  {
    pathname: "#!",
    onClick: () => alert("Đăng xuất"),
    icon: <LogOut className="text-base" strokeWidth={1.5} />,
    text: "Đăng xuất",
  },
];

import { TBreadcrumb, TButton, TProgressStep } from "@/utils/types/common";
import {
  Bolt,
  BookOpenText,
  BookPlus,
  ChartColumnBig,
  CirclePlus,
  FolderKanban,
  House,
  LogOut,
  MailQuestion,
  NotebookTabs,
  UserPen,
  UserRoundCog,
} from "lucide-react";

export const NAV_SIDEBAR_TOP_ADMIN: TButton[] = [
  {
    pathname: "/admin/home",
    icon: <House className="text-base" strokeWidth={1.5} />,
    text: "Trang chủ",
    description: "Trang chủ",
  },
  {
    pathname: "/admin/analytic",
    icon: <ChartColumnBig className="text-base" strokeWidth={1.5} />,
    text: "Phân tích",
    description: "Phân tích",
  },
  {
    pathname: "/admin/manage-user",
    icon: <UserRoundCog className="text-base" strokeWidth={1.5} />,
    text: "Quản lí người dùng",
    description: "Quản lí người dùng",
  },
  {
    pathname: "/admin/manage-course",
    icon: <FolderKanban className="text-base" strokeWidth={1.5} />,
    text: "Quản lí khóa học",
    description: "Quản lí khóa học",
  },
  {
    pathname: "/admin/support",
    icon: <MailQuestion className="text-base" strokeWidth={1.5} />,
    text: "Hỗ trợ người dùng",
    description: "Hỗ trợ người dùng",
  },
];

export const NAV_SIDEBAR_TOOL_ADMIN: TButton[] = [
  {
    pathname: "/admin/setting",
    icon: <Bolt className="text-base" strokeWidth={1.5} />,
    text: "Cài đặt",
    description: "Cài đặt",
  },
  {
    pathname: "/admin/profile",
    icon: <UserPen className="text-base" strokeWidth={1.5} />,
    text: "Hồ sơ",
    description: "Hồ sơ",
  },
];

export const NAV_SIDEBAR_BOTTOM_ADMIN: TButton[] = [
  {
    pathname: "#!",
    onClick: () => alert("Đăng xuất"),
    icon: <LogOut className="text-base" strokeWidth={1.5} />,
    text: "Đăng xuất",
    description: "Đăng xuất",
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

export const DROPDOWN_CREATE_COURSE: TButton[] = [
  {
    pathname: "/admin/manage-courses/manage-course/create-course",
    icon: <BookPlus className="text-base" strokeWidth={1.5} />,
    text: "Tạo khóa học",
  },
  {
    pathname: "/admin/manage-courses/manage-course/create-chapter",
    icon: <NotebookTabs className="text-base" strokeWidth={1.5} />,
    text: "Tạo chương",
  },
  {
    pathname: "/admin/manage-courses/manage-course/create-course",
    icon: <BookOpenText className="text-base" strokeWidth={1.5} />,
    text: "Tạo bài giảng",
  },
];

export const NAV_HEADER_ADMIN: TButton = {
  pathname: "/admin/manage-course/manage-course/create-course",
  icon: <CirclePlus className="text-base" strokeWidth={1.5} />,
  text: "Tạo khóa học",
  description: "Tạo khóa học",
};

export const CREATE_COURSE_STEPS: TProgressStep[] = [
  {
    text: "Thông tin khóa học",
  },
  {
    text: "Tạo các chương học",
  },
  {
    text: "Tạo bài học",
  },
  {
    text: "Học phí",
  },
  {
    text: "Xuất bản khóa học",
  },
];

export const BREADCRUMB_CREATECOURSE: TBreadcrumb[] = [
  {
    link: "123",
    title: "Quản lí khóa học",
    isActive: false,
  },
  {
    link: "123",
    title: "Tạo khóa học",
    isActive: false,
  },
];

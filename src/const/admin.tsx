import { TAdminLink, TBreadcrumb, TButton, TProgressStep } from "@/utils/types/common";
import {
  Bolt,
  BookAudio,
  BookOpen,
  BookOpenText,
  BookPlus,
  CirclePlus,
  LogOut,
  MailQuestion,
  NotebookPen,
  NotebookTabs,
  Package2,
  SquareLibrary,
  UserPen,
  UserRoundCog,
} from "lucide-react";

export const NAV_SIDEBAR_TOP_ADMIN: TAdminLink[] = [
{
    href: "/admin/manage-donate",
    icon: <UserRoundCog className="text-base" strokeWidth={1.5} />,
    label: "Quản lí lượt ủng hộ",
  },
  {
    href: "/admin/manage-user",
    icon: <UserRoundCog className="text-base" strokeWidth={1.5} />,
    label: "Quản lí người dùng",
  },
  {
    href: "/admin/manage-courses",
    icon: <SquareLibrary  className="text-base" strokeWidth={1.5} />,
    label: "Quản lí khóa học",
  },
  {
    href: "/admin/manage-chapters",
    icon: <BookAudio  className="text-base" strokeWidth={1.5} />,
    label: "Quản lí chương học",
  },
  {
    href: "/admin/manage-lectures",
    icon: <BookOpen  className="text-base" strokeWidth={1.5} />,
    label: "Quản lí bài học",
  },
  {
    href: "/admin/manage-subscription",
    icon: <Package2  className="text-base" strokeWidth={1.5} />,
    label: "Quản lí gói đăng ký",
  },
  {
    href: "/admin/manage-blogs",
    icon: <NotebookPen  className="text-base" strokeWidth={1.5} />,
    label: "Quản lí bài viết",
  },
  {
    href: "/admin/support",
    icon: <MailQuestion className="text-base" strokeWidth={1.5} />,
    label: "Hỗ trợ người dùng",
  }
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
    pathname: "/admin/manage-courses/manage-course/create-lecture",
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
    link: "/admin/home",
    title: "Trang chủ",
    isActive: false,
  },
  {
    link: "/admin/manage-courses",
    title: "Quản lí khóa học",
    isActive: false,
  },
  {
    link: "/admin/manage-courses/manage-course/create-course",
    title: "Tạo khóa học",
    isActive: false,
  },
];

export const BREADCRUMB_CREATECHAPTER: TBreadcrumb[] = [
  {
    link: "/admin/home",
    title: "Trang chủ",
    isActive: false,
  },
  {
    link: "/admin/manage-lectures",
    title: "Quản lí bài học",
    isActive: false,
  },
  {
    link: "/admin/manage-lectures/manage-lecture/create-lecture",
    title: "Tạo bài học",
    isActive: true,
  },
];

export const BREADCRUMB_MANAGECOURSES: TBreadcrumb[] = [
  {
    link: "/admin/home",
    title: "Trang chủ",
    isActive: false,
  },
  {
    link: "/admin/manage-courses/view-courses",
    title: "Quản lí khóa học",
    isActive: true,
  }
];

export const BREADCRUMB_MANAGECHAPTERS: TBreadcrumb[] = [
  {
    link: "/admin/home",
    title: "Trang chủ",
    isActive: false,
  },
  {
    link: "/admin/manage-chapters",
    title: "Quản lí chương học",
    isActive: true,
  }
];

export const BREADCRUMB_MANAGELECTURES: TBreadcrumb[] = [
  {
    link: "/admin/home",
    title: "Trang chủ",
    isActive: false,
  },
  {
    link: "/admin/manage-lectures",
    title: "Quản lí bài học",
    isActive: true,
  }
];

export const BREADCRUMB_MANAGECHAPTER_LIST: TBreadcrumb[] = [
  {
    link: "/admin/manage-courses/view-courses",
    title: "Quản lí khóa học",
    isActive: false,
  },
  {
    link: "/admin/manage-courses/manage-course/manage-chapters",
    title: "Quản lí chương học",
    isActive: false,
  },
  {
    link: "/admin/manage-courses/manage-course/manage-chapters",
    title: "Danh sách chương học",
    isActive: false,
  },
];

export const BREADCRUMB_CREATELECTURE: TBreadcrumb[] = [
  {
    link: "/admin/home",
    title: "Trang chủ",
    isActive: false,
  },
  {
    link: "/admin/manage-lectures",
    title: "Quản lí bài học",
    isActive: false,
  },
  {
    link: "/admin/manage-lecture/create-lecture",
    title: "Tạo bài học",
    isActive: true,
  },
];

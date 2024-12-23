"use client";

import { NAV_SIDEBAR_BOTTOM_ADMIN, NAV_SIDEBAR_TOOL_ADMIN, NAV_SIDEBAR_TOP_ADMIN } from "@/const/admin";
import { TNavbarAdmin } from "@/utils/types/admin";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarAdmin() {
  const pathname = usePathname();

  const renderNavAdmin = (navbar: TNavbarAdmin[]) => {
    return navbar.map((nav, index) => {
      return (
        <li key={index} onClick={nav?.onClick ? nav.onClick : () => {}}>
          <Link
            href={nav.pathname}
            className={`h-10 px-4 flex items-center gap-x-3 rounded-md hover:bg-primary-admin hover:text-white ${
              pathname === nav.pathname
                ? "bg-primary-admin text-white"
                : "bg-white text-gray-800 hover:opacity-85"
            }`}
          >
            {nav.icon}
            <span className="text-base">{nav.text}</span>
          </Link>
        </li>
      );
    });
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <div className="mx-auto h-[60px] px-4 flex items-center justify-between">
          <h4>antiSCM</h4>
        </div>
        <div className="border-t py-6 flex flex-col gap-y-4">
          <div className="px-4">
            <ul className="flex flex-col gap-y-3">
              {renderNavAdmin(NAV_SIDEBAR_TOP_ADMIN)}
            </ul>
          </div>
          <div className="px-4">
            <h3>Công cụ</h3>
            <div className="mt-6">
              <ul className="flex flex-col gap-y-3">
                {renderNavAdmin(NAV_SIDEBAR_TOOL_ADMIN)}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-2 px-4">
        <ul className="flex flex-col gap-y-3">
          {renderNavAdmin(NAV_SIDEBAR_BOTTOM_ADMIN)}
        </ul>
      </div>
    </div>
  );
}

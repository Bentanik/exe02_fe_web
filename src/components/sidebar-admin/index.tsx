"use client";

import {
  NAV_SIDEBAR_BOTTOM_ADMIN,
  NAV_SIDEBAR_TOOL_ADMIN,
  NAV_SIDEBAR_TOP_ADMIN,
} from "@/const/admin";
import { TButton } from "@/utils/types/common";
import { usePathname } from "next/navigation";
import ButtonComponent from "@/components/button-component";

export default function SidebarAdmin() {
  const pathname = usePathname();

  const renderNavAdmin = (navbar: TButton[]) => {
    return navbar.map((nav, index) => {
      return (
        <li key={index}>
          <ButtonComponent
            href={nav.pathname}
            type="admin"
            active={pathname === nav.pathname ? true : false}
          >
            {nav.icon}
            <span className="text-base">{nav.text}</span>
          </ButtonComponent>
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

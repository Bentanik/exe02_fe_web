"use client";

import { DROPDOWN_MENU_ADMIN } from "@/const/admin";
import { TDropdownAdmin } from "@/utils/types/common";
import Link from "next/link";

interface IAvatarMenuAdminProps {
  onClose: () => void;
}

export default function AvatarMenuAdmin({ onClose }: IAvatarMenuAdminProps) {
  const renderDropdowns = (dropdowns: TDropdownAdmin[]) => {
    return dropdowns?.map((dropdown, index) => {
      return (
        <li key={index} onClick={onClose}>
          <Link
            href="#!"
            className="flex items-center gap-x-2 px-4 py-3 hover:bg-primary-admin hover:text-white"
          >
            {dropdown.icon}
            <span className="text-base">{dropdown.text}</span>
          </Link>
        </li>
      );
    });
  };

  return (
    <div className="z-10 bg-white right-0 rounded-lg shadow-box w-64 overflow-hidden">
      <div className="px-4 py-1 text-lg text-gray-900 select-none cursor-pointer">
        <div className="font-bold">Ngày mới tốt lành</div>
      </div>
      <ul
        className="border-t text-sm text-gray-700"
        aria-labelledby="avatarButton"
      >
        {renderDropdowns(DROPDOWN_MENU_ADMIN)}
      </ul>
    </div>
  );
}

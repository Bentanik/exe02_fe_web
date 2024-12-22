"use client";

import Link from "next/link";

export default function AvatarAdminMenu() {
  return (
    <div className="z-10 bg-white right-0 rounded-lg shadow-box w-64 overflow-hidden">
      <div className="px-4 py-1 text-lg text-gray-900 select-none cursor-pointer">
        <div className="font-bold">Ngày mới tốt lành</div>
      </div>
      <ul className="border-t py-2 text-sm text-gray-700" aria-labelledby="avatarButton">
        <li>
          <Link href="#!">
            <span>text</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

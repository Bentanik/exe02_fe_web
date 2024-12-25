"use client";

import { DROPDOWN_MENU_ADMIN } from "@/const/admin";
import { TButton } from "@/utils/types/common";
import ButtonComponent from "@/components/button-component";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function AvatarMenuAdmin() {
  const renderDropdowns = (dropdowns: TButton[]) => {
    return dropdowns?.map((dropdown, index) => {
      return (
        <li key={index}>
          <ButtonComponent
            href="#!"
            type="admin"
            active={false}
            className="flex items-center gap-x-2 px-4 py-3 hover:bg-primary-admin hover:text-white"
          >
            {dropdown.icon}
            <span className="text-base">{dropdown.text}</span>
          </ButtonComponent>
        </li>
      );
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="focus:outline-none">
        <div>
          <figure className="rounded-full overflow-hidden w-11 h-11 flex items-center justify-center">
            <Image
              id="avatarButton"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full cursor-pointer"
              src={"/images/avatar.jpg"}
              alt="User dropdown"
            />
          </figure>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <ul>{renderDropdowns(DROPDOWN_MENU_ADMIN)}</ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

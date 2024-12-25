"use client";

import { TButton } from "@/utils/types/common";
import ButtonComponent from "@/components/button-component";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DROPDOWN_CREATE_COURSE, NAV_HEADER_ADMIN } from "@/const/admin";
import { useState } from "react";

export default function ButtonCreateCourseHeaderAdmin() {
  const [open, setOpen] = useState<boolean>(true);

  const renderDropdowns = (dropdowns: TButton[]) => {
    return dropdowns?.map((dropdown, index) => {
      return (
        <li key={index} className="list-none" onClick={() => setOpen(false)}>
          <ButtonComponent
            href={dropdown.pathname}
            type="admin"
            active={false}
            className="w-full !min-h-3 flex items-center gap-x-2 px-4 py-2 hover:bg-primary-admin hover:text-white"
          >
            {dropdown.icon}
            <span className="text-base">{dropdown.text}</span>
          </ButtonComponent>
        </li>
      );
    });
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild className="focus:outline-none">
        <ButtonComponent
          onClick={() => setOpen(true)}
          type="admin"
          active={true}
        >
          {NAV_HEADER_ADMIN.icon}
          <span className="text-base">{NAV_HEADER_ADMIN.text}</span>
        </ButtonComponent>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <ul>{renderDropdowns(DROPDOWN_CREATE_COURSE)}</ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

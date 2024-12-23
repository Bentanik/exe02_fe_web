"use client";

import SearchSidebar from "@/components/search-sidebar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import AvatarMenuAdmin from "@/components/avatar-menu-admin";
import Image from "next/image";
import ButtonComponent from "@/components/button-component";
import { NAV_HEADER_ADMIN } from "@/const/admin";

export default function HeaderAdmin() {

  const [avatarTooltip, setAvatarTooltip] = useState<boolean>(false);

  const handleToggleAvatarTooltip = () => {
    setAvatarTooltip((prev) => !prev);
  };

  const handleCloseAvatarTooltip = () => {
    setAvatarTooltip(false);
  };

  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <SearchSidebar />
      </div>
      <div className="flex items-center gap-x-3">
        <ButtonComponent
          href={NAV_HEADER_ADMIN.pathname}
          type="admin"
          active={true}
        >
          {NAV_HEADER_ADMIN.icon}
          <span className="text-base">{NAV_HEADER_ADMIN.text}</span>
        </ButtonComponent>
        <div>
          <Popover open={avatarTooltip} onOpenChange={setAvatarTooltip}>
            <PopoverTrigger asChild>
              <div onClick={handleToggleAvatarTooltip}>
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
            </PopoverTrigger>
            <PopoverContent
              side="bottom"
              align="end"
              className="w-auto h-auto rounded-md p-0"
            >
              <AvatarMenuAdmin onClose={handleCloseAvatarTooltip} />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

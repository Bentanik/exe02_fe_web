"use client";

import SearchSidebar from "@/components/search-sidebar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import AvatarAdminMenu from "@/components/avatar-admin-menu";

export default function HeaderSidebar() {
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
      <div>
        <div>
          <Popover open={avatarTooltip} onOpenChange={setAvatarTooltip}>
            <PopoverTrigger asChild>
              <div onClick={handleToggleAvatarTooltip}>
                <figure className="rounded-full overflow-hidden w-11 h-11 flex items-center justify-center">
                  <img
                    id="avatarButton"
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
              <AvatarAdminMenu />
              {/* <AvatarMenu onCloseTooltip={handleCloseAvatarMenuTooltip} /> */}
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

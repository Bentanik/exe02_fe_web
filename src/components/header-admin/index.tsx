"use client";

import SearchSidebar from "@/components/search-sidebar";
import AvatarMenuAdmin from "@/components/avatar-menu-admin";
import ButtonCreateCourseHeaderAdmin from "@/components/button-create-course-header-admin";

export default function HeaderAdmin() {
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <SearchSidebar />
      </div>
      <div className="flex items-center gap-x-5">
        <div>
          <ButtonCreateCourseHeaderAdmin />
        </div>
        <div>
          <AvatarMenuAdmin />
        </div>
      </div>
    </div>
  );
}

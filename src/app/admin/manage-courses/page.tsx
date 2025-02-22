import { Metadata } from "next";
import ManageCourses from "@/app/admin/manage-courses/components";

export const metadata: Metadata = {
  title: "Quản lí nhiều khóa học",
  description: "Quản lí với nhiều khóa học với antiSCM",
};

export default function ManageCoursesPage() {
  return (
    <div>
      <ManageCourses />
    </div>
  );
}

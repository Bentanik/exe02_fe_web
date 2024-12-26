import { Metadata } from "next";
import CreateCourse from "@/app/admin/manage-courses/manage-course/create-course/components";

export const metadata: Metadata = {
  title: "Tạo khóa học",
  description: "Tạo khóa học với antiSCM",
};

export default function CreateCoursePage() {
  return (
    <div>
      <CreateCourse />
    </div>
  );
}

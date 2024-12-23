import { Metadata } from "next";
import CreateCourseForm from "@/app/admin/manage-course/create-course/components";

export const metadata: Metadata = {
  title: "Tạo khóa học",
  description: "Tạo khóa học với antiSCM",
};

export default function CreateCoursePage() {
  return (
    <div>
      <CreateCourseForm />
    </div>
  );
}

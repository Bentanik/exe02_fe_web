import { Metadata } from "next";
import CreateChapterForm from "@/app/admin/manage-courses/manage-course/create-chapter/components";

export const metadata: Metadata = {
  title: "Tạo khóa học",
  description: "Tạo khóa học với antiSCM",
};

export default function CreateChapterPage() {
  return (
    <div>
      <CreateChapterForm />
    </div>
  );
}

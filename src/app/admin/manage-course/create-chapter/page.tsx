import { Metadata } from "next";
import CreateChapter from "@/app/admin/manage-course/create-chapter/components";

export const metadata: Metadata = {
  title: "Tạo chương học",
  description: "Tạo khóa học với antiSCM",
};

export default function CreateChapterPage() {
  return (
    <div>
      <CreateChapter />
    </div>
  );
}

import CreateChapter from "@/app/admin/manage-chapter/create-chapter/components";
import { Metadata } from "next";

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

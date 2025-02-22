import { Metadata } from "next";
import ManageChapterComponent from "@/app/admin/manage-course/manage-chapters/components";

export const metadata: Metadata = {
  title: "Quản lí chương học",
  description: "Quản lí chương học antiSCM",
};

export default function CreateChapterPage() {
  return (
    <div>
      <ManageChapterComponent />
    </div>
  );
}

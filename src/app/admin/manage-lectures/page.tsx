import ManageLectures from "@/app/admin/manage-lectures/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quản lí nhiều bài học",
  description: "Quản lí với nhiều bài học với antiSCM",
};

export default function ManageLecturesPage() {
  return (
    <div>
      <ManageLectures />
    </div>
  );
}

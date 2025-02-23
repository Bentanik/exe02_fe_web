import ManageChapters from "@/app/admin/manage-chapters/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quản lí nhiều chương học",
  description: "Quản lí với nhiều chương học với antiSCM",
};

export default function ManageChaptersPage() {
  return (
    <div>
      <ManageChapters />
    </div>
  );
}

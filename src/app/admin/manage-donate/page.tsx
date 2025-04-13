import ManageDonate from "@/app/admin/manage-donate/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quản lý lượt ủng hộ",
  description: "Quản lý lượt ủng hộ",
};

export default function ManageDonatePage() {
  return (
    <div>
      <ManageDonate />
    </div>
  )
}

import ManageUser from "@/app/admin/manage-user/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quản lý người dùng",
  description: "Quản lý người dùng",
};

export default function ManageUserPage() {
  return (
    <div>
      <ManageUser />
    </div>
  )
}

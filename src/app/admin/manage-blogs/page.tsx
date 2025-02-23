import { Metadata } from "next";
import ManageBlogs from "@/app/admin/manage-blogs/components";

export const metadata: Metadata = {
  title: "Quản lí nhiều bài viết",
  description: "Quản lí với nhiều khóa viết với antiSCM",
};

export default function ManageBlogsPage() {
  return (
    <div>
      <ManageBlogs />
    </div>
  );
}

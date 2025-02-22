import { Metadata } from "next";
import CreateLecture from "@/app/admin/manage-course/create-lecture/components";

export const metadata: Metadata = {
  title: "Tạo bài học",
  description: "Tạo bài học với antiSCM",
};

export default function CreateLecturePage() {
  return (
    <div>
      <CreateLecture />
    </div>
  );
}

"use client";

import CreateInformationCourseForm from "@/app/admin/manage-courses/manage-course/create-course/components/create-course-form";
import { BREADCRUMB_CREATECOURSE } from "@/const/admin";
import { ArrowLeft } from "lucide-react";
import ButtonComponent from "@/components/button-component";
import BreadcrumbComponent from "@/components/breadcrumb-component";
import TagComponent from "@/components/tag-component";

export default function CreateCourse() {
  const handleNextStep = () => {
    alert(1);
  };

  return (
    <div className="px-4 py-4">
      <header>
        <div className="flex items-center gap-x-3">
          <ButtonComponent
            href="/admin/home"
            type="none"
            active={false}
            className="!px-2 !py-[5px] !min-h-[5px] hover:!bg-none"
            tooltip="not-full"
            description="Quay lại trang chủ"
          >
            <ArrowLeft className="w-5 h-5" />
          </ButtonComponent>
          <h1 className="text-xl font-semibold text-primary-admin">
            Tạo khóa học
          </h1>
          <TagComponent
            tag={{
              text: "Nháp",
              type: "normal",
              description: "Chờ khóa học được xuất bản",
            }}
          />
        </div>
        <div className="mt-3 ml-12">
          <BreadcrumbComponent breadcrumbs={BREADCRUMB_CREATECOURSE} />
        </div>
      </header>
      <main className="my-4 border rounded-md">
        <CreateInformationCourseForm onNextStep={handleNextStep} />
      </main>
    </div>
  );
}

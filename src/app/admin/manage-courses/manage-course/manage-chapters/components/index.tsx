"use client";

import {
  BREADCRUMB_CREATECOURSE,
  BREADCRUMB_MANAGECHAPTER,
  BREADCRUMB_MANAGECHAPTER_LIST,
} from "@/const/admin";
import { ArrowLeft } from "lucide-react";
import ButtonComponent from "@/components/button-component";
import BreadcrumbComponent from "@/components/breadcrumb-component";
import TagComponent from "@/components/tag-component";

import ManageChapter from "@/app/admin/manage-courses/manage-course/manage-chapters/components/manage-chapter";
import SelectCourse from "@/app/admin/manage-courses/manage-course/manage-chapters/components/select-course";
import { useEffect, useState } from "react";

export default function ManageChapterComponent() {
  const [course, setCourse] = useState<API.TCourse | null>(null);

  useEffect(() => {
    setCourse(null);
  }, []);

  const handleChangeSelectCourse = (course: API.TCourse) => {
    setCourse(course);
  };

  return (
    <div className="px-4 py-4">
      <header>
        <div className="flex items-center gap-x-3">
          <ButtonComponent
            href={
              course
                ? BREADCRUMB_MANAGECHAPTER_LIST[
                    BREADCRUMB_MANAGECHAPTER_LIST.length - 2
                  ].link
                : BREADCRUMB_MANAGECHAPTER[BREADCRUMB_MANAGECHAPTER.length - 2]
                    .link
            }
            type="none"
            active={false}
            className="!px-2 !py-[5px] !min-h-[5px] hover:!bg-none"
            tooltip="not-full"
            description="Quay lại trang chủ"
          >
            <ArrowLeft className="w-5 h-5" />
          </ButtonComponent>
          <h1 className="text-xl font-semibold text-primary-admin">
            Quản lí chương học
          </h1>
        </div>
        <div className="mt-3 ml-12">
          <BreadcrumbComponent
            breadcrumbs={
              course ? BREADCRUMB_MANAGECHAPTER_LIST : BREADCRUMB_MANAGECHAPTER
            }
          />
        </div>
      </header>
      <main className="mt-5 mb-4 px-12">
        {course === null ? (
          <div className="flex flex-col gap-y-4">
            <SelectCourse onChange={handleChangeSelectCourse} />
          </div>
        ) : (
          <div>
            <ManageChapter />
          </div>
        )}
      </main>
    </div>
  );
}

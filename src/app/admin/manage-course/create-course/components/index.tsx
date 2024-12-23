"use client";

import { useEffect } from "react";
import CreateInformationCourse from "@/app/admin/manage-course/create-course/components/create-information-course";
import ProgressStep from "@/components/progress-step";
import { BREADCRUMB_CREATECOURSE, CREATE_COURSE_STEPS } from "@/const/admin";
import { useProgressStep } from "@/hooks/use-step";
import { ArrowLeft } from "lucide-react";
import ButtonComponent from "@/components/button-component";
import BreadcrumbComponent from "@/components/breadcrumb-component";
import TagComponent from "@/components/tag-component";

export default function CreateCourseForm() {
  const totalSteps = CREATE_COURSE_STEPS?.length;
  const { currentStep, handleNextStep, handlePrevStep } =
    useProgressStep(totalSteps);

  const renderComponentStep = (step: number) => {
    if (step === 1)
      return <CreateInformationCourse onNextStep={handleNextStep} />;
    if (step === 2) return <div>Step 2</div>;
    if (step === 3) return <div>Step 3</div>;
    if (step === 4) return <div>Step 4</div>;
    if (step === 4) return <div>Step 5</div>;
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
      <div className="mt-5 w-full flex justify-center py-3">
        <ProgressStep
          stepValue={CREATE_COURSE_STEPS}
          currentStep={currentStep}
        />
      </div>
      <main className="my-16 border rounded-md">
        {renderComponentStep(currentStep)}
      </main>
    </div>
  );
}

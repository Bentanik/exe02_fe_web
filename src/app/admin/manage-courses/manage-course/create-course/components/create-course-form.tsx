"use client";

import ButtonComponent from "@/components/button-component";
import { FileUpload } from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import MultiSelectDropdownAdmin from "@/components/multi-select-dropdown-admin.tsx/multi-select-dropdown-admin";
import { Categories } from "@/mooks/category";
import { Levels } from "@/mooks/level";
import { Courses } from "@/mooks/course";

interface ICreateCourseFormProps {
  onNextStep: () => void;
}

export default function CreateCourseForm({
  onNextStep,
}: ICreateCourseFormProps) {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
  };

  const handleNextStep = () => {
    if (files) onNextStep();
  };

  return (
    <div>
      <div className="px-12 py-2 border-b">
        <h2 className="font-semibold text-xl">Tạo khóa học</h2>
        <p className="mt-2 text-base text-gray-500 font-semibold">
          Tạo khóa học với các thông tin như tên khóa học, thể loại, cấp độ
          người học, mô tả và thumbnail
        </p>
      </div>
      <div className="px-12 py-2">
        <div className="flex items-start gap-x-10 pb-4">
          <div className="basis-[60%] flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="namecourse" className="text-base">
                Tên khóa học
              </label>
              <Input id="namecourse" type="text" />
            </div>
            <div className="flex items-center gap-x-2">
              <div className="w-full flex flex-col gap-y-2">
                <label htmlFor="category" className="text-base">
                  Chọn thể loại
                </label>
                <MultiSelectDropdownAdmin
                  id="category"
                  title="thể loại"
                  values={Categories}
                />
              </div>
              <div className="w-full flex flex-col gap-y-2">
                <label htmlFor="level" className="text-base">
                  Chọn cấp độ người học
                </label>
                <MultiSelectDropdownAdmin
                  id="level"
                  title="cấp độ"
                  values={Levels}
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-y-2">
              <label htmlFor="addlecture" className="text-base">
                Thêm chương học
              </label>
              <MultiSelectDropdownAdmin
                id="addlecture"
                title="chương học"
                values={Courses?.at(0)?.chapters || []}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="description" className="text-base">
                Mô tả
              </label>
              <Textarea
                id="description"
                placeholder="Xin vui lòng điền mô tả khóa học ở đây."
                style={{ resize: "none" }}
                className="resize-none h-[200px]"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="" className="text-base">
                Thumbnail
              </label>
              <div className="border rounded-lg">
                <FileUpload
                  title="Tải ảnh thumbnail khóa học lên"
                  description="Xin vui lòng kéo hoặc click vào để tải ảnh"
                  onChange={handleFileUpload}
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-x-3">
              <ButtonComponent
                onClick={handleNextStep}
                type="admin"
                active={false}
                className="hover:opacity-90"
              >
                <span className="text-base">Lưu bản nháp</span>
              </ButtonComponent>
              <ButtonComponent
                onClick={handleNextStep}
                type="admin"
                active={true}
                className="hover:opacity-90"
              >
                <span className="text-base">Tiếp tục</span>
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

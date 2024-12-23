"use client";

import ButtonComponent from "@/components/button-component";
import MultiSelectDropdown from "@/components/mutiple-select-dropdown";
import { FileUpload } from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface ICreateInformationCourseProps {
  onNextStep: () => void;
}

export default function CreateInformationCourse({
  onNextStep,
}: ICreateInformationCourseProps) {
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
        <h2 className="font-semibold text-xl">Thêm thông tin khóa học</h2>
        <p className="mt-2 text-base text-gray-500 font-semibold">
          Thêm thông tin khóa học bao gồm các yếu tố cơ bản như hình ảnh
          thumbnail, tên khóa học và mô tả chi tiết.
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
                <label htmlFor="description" className="text-base">
                  Chọn thể loại
                </label>
                <MultiSelectDropdown />
              </div>
              <div className="w-full flex flex-col gap-y-2">
                <label htmlFor="description" className="text-base">
                  Chọn cấp độ người học
                </label>
                <MultiSelectDropdown />
              </div>
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
            <div className="mt-4 flex justify-end">
              <ButtonComponent
                onClick={handleNextStep}
                type="admin"
                active={true}
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

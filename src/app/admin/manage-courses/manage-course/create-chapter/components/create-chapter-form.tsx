"use client";

import ButtonComponent from "@/components/button-component";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import MultiSelectDropdownAdmin from "@/components/multi-select-dropdown-admin.tsx/multi-select-dropdown-admin";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Courses } from "@/mooks/course";

interface ICreateChapterFormProps {
  onNextStep: () => void;
}

export default function CreateChapterForm({
  onNextStep,
}: ICreateChapterFormProps) {
  useEffect(() => {
    setCourses(Courses);
  }, []);

  const handleNextStep = () => {
    onNextStep();
  };

  const [courses, setCourses] = useState<API.TCourse[]>([]);
  const [course, setCourse] = useState<string>("");

  const renderCourses = (courses_arr: API.TCourse[]) => {
    return courses_arr.map((course, index) => (
      <SelectItem key={index} value={index.toString() || ""}>
        {course.name}
      </SelectItem>
    ));
  };

  return (
    <div>
      <div className="px-12 py-2 border-b">
        <h2 className="font-semibold text-xl">Tạo chương học</h2>
        <p className="mt-2 text-base text-gray-500 font-semibold">
          Tạo chương học với các thông tin như tên chương học, mô tả ngắn và mô
          tả chi tiết
        </p>
      </div>
      <div className="px-12 py-2">
        <div className="flex items-start gap-x-10 pb-4">
          <div className="basis-[60%] flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="namecourse" className="text-base">
                Khóa học
              </label>
              <Select value={course} onValueChange={setCourse}>
                <SelectTrigger className="focus-visible:ring-0 focus-visible:border-gray-400 px-4 py-5 border border-gray-300 rounded-md">
                  <SelectValue placeholder="Xin vui lòng lựa chọn khóa học" />
                </SelectTrigger>
                <SelectContent>{renderCourses(courses)}</SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="namecourse" className="text-base">
                Tên chương học
              </label>
              <Input id="namecourse" type="text" />
            </div>
            <div>
              <div className="w-full flex flex-col gap-y-2">
                <label htmlFor="addlecture" className="text-base">
                  Thêm bài học
                </label>
                <MultiSelectDropdownAdmin
                  id="addlecture"
                  title="bài học"
                  values={courses?.at(0)?.chapters?.at(0)?.lectures || []}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="description" className="text-base">
                Mô tả ngắn và tổng quan
              </label>
              <Textarea
                id="description"
                placeholder="Xin vui lòng điền mô tả khóa học ở đây."
                style={{ resize: "none" }}
                className="resize-none h-[100px]"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col gap-y-2">
                <label htmlFor="description" className="text-base">
                  Mô tả chi tiết
                </label>
                <Textarea
                  id="description"
                  placeholder="Xin vui lòng điền mô tả khóa học ở đây."
                  style={{ resize: "none" }}
                  className="resize-none h-[250px]"
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

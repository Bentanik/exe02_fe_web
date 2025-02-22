"use client";

import ButtonComponent from "@/components/button-component";
import { FileUpload } from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
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

export default function CreateLectureForm({
  onNextStep,
}: ICreateChapterFormProps) {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
  };

  useEffect(() => {
    setCourses(Courses);
    setChapters(Courses[0].chapters || []);
  }, []);

  const handleNextStep = () => {
    if (files) onNextStep();
  };

  const [courses, setCourses] = useState<API.TCourse[]>([]);
  const [course, setCourse] = useState<string>("");

  const [chapters, setChapters] = useState<API.TChapter[]>([]);
  const [chapter, setChapter] = useState<string>("");

  const renderCourses = (courses_arr: API.TCourse[]) => {
    return courses_arr.map((course, index) => (
      <SelectItem key={index} value={index.toString() || ""}>
        {course.name}
      </SelectItem>
    ));
  };

  const renderChapters = (chapters_arr: API.TChapter[]) => {
    return chapters_arr.map((chapter, index) => (
      <SelectItem key={index} value={index.toString() || ""}>
        {chapter.name}
      </SelectItem>
    ));
  };

  return (
    <div>
      <div className="px-12 py-2 border-b">
        <h2 className="font-semibold text-xl">Tạo bài học</h2>
        <p className="mt-2 text-base text-gray-500 font-semibold">
          Tạo bài học với các thông tin như tên bài học, mô tả, thumbnail, video
          về bài học
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
                <SelectTrigger
                  id="namecourse"
                  className="focus-visible:ring-0 focus-visible:border-gray-400 px-4 py-5 border border-gray-300 rounded-md"
                >
                  <SelectValue placeholder="Xin vui lòng lựa chọn khóa học" />
                </SelectTrigger>
                <SelectContent>{renderCourses(courses)}</SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="namechapter" className="text-base">
                Chương học
              </label>
              <Select value={chapter} onValueChange={setChapter}>
                <SelectTrigger
                  id="namechapter"
                  className="focus-visible:ring-0 focus-visible:border-gray-400 px-4 py-5 border border-gray-300 rounded-md"
                >
                  <SelectValue placeholder="Xin vui lòng lựa chọn chương học" />
                </SelectTrigger>
                <SelectContent>{renderChapters(chapters)}</SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="namelecture" className="text-base">
                Tên bài học
              </label>
              <Input id="namelecture" type="text" />
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
              <div className="flex flex-col gap-y-2">
                <label htmlFor="lecturevideocoursecreate" className="text-base">
                  Tải lên thumbnail và video bài học
                </label>
                <div className="border rounded-lg">
                  <FileUpload
                    title="Tải ảnh và video bài học lên"
                    description="Xin vui lòng kéo hoặc click vào để tải lên"
                    onChange={handleFileUpload}
                    isReset={false}
                    single={true}
                  />
                </div>
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

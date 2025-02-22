"use client";

import ButtonComponent from "@/components/button-component";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { Backdrop } from "@/components/backdrop";
import { isTResponseData } from "@/utils/compare";
import SelectFieldCreateChapter from "@/app/admin/manage-course/create-chapter/components/select-field-create-chapter";
import { getLecturesAsync } from "@/services/lecture/api-services";
import { useSubmitCreateChapter } from "@/app/admin/manage-course/create-chapter/hooks/useSubmitCreateChapter";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getCoursesAsync } from "@/services/course/api-services";

export default function CreateChapterForm() {
  // State
  const [courses, setCourses] = useState<API.TCourse[] | []>([]);
  const [lectures, setLectures] = useState<API.TLecture[] | []>([]);

  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const [courseSelect, setCourseSelect] = useState<string>("");
  const [lectureSelect, setLectureSelect] = useState<string[] | null>(null);

  const [nameError, setNameError] = useState<string>("");
  const [descError, setDescError] = useState<string>("");


  const { onSubmit, isPending, isSuccess } = useSubmitCreateChapter();

  // Function

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        handleGetCoursesAsync(),
        handleGetLecturesAsync()
      ]);
    };

    fetchData();
  }, [])

  const handleGetCoursesAsync = async () => {
    const form = {
      pageSize: 100,
    } as REQUEST.TGetCourses

    const res = await getCoursesAsync(form);
    if (isTResponseData(res)) {
      setCourses(res.value.data.courses.items);
    }
  }

  const handleGetLecturesAsync = async () => {
    const form = {
      noneAssignedChapter: true
    } as REQUEST.TGetLectures

    const res = await getLecturesAsync(form);
    if (isTResponseData(res)) {
      setLectures(res.value.data.lectures.items);
    }
  }

  const handleLecturesSelect = (selected: number[]) => {
    const chapterIds = selected
      .map(item => lectures[item]?.id)
      .filter(id => id !== null && id !== undefined);
    setLectureSelect(chapterIds);
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleChangeDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  }


  const handleResetState = () => {
    setName("");
    setDesc("");
    setNameError("");
    setDescError("");
    setCourseSelect("");
    setLectureSelect(null);

    handleGetLecturesAsync();
  }

  const handleSetErrorField = (nameError: string | null) => {
    if (nameError !== null && nameError !== "")
      setNameError(nameError);
  }

  const handleSubmit = () => {
    if (name === "") {
      setNameError("Tên chương học là bắt buộc");
    } else {
      setNameError("");
    }

    if (desc === "") {
      setDescError("Mô tả chương học là bắt buộc");
    } else {
      setDescError("");
    }

    const isVerify = name !== "" && desc !== "";

    if (isVerify) {
      const form = {
        name: name,
        courseId: courseSelect !== "" && courses[+courseSelect].id,
        description: desc,
        lectureIds: lectureSelect
      } as REQUEST.TCreateChapter

      onSubmit(form, handleResetState, handleSetErrorField);
    }
  };

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
          Tạo chương học với các thông tin như tên chương học, mô tả
        </p>
      </div>
      <div className="px-12 py-2">
        <div className="flex items-start gap-x-10 pb-4">
          <div className="w-full flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="namecourse" className="text-base">
                Khóa học
              </label>
              <Select value={courseSelect} onValueChange={setCourseSelect}>
                <SelectTrigger className="focus-visible:ring-0 focus-visible:border-gray-400 px-4 py-5 border border-gray-300 rounded-md">
                  <SelectValue placeholder="Xin vui lòng lựa chọn khóa học" />
                </SelectTrigger>
                <SelectContent>{renderCourses(courses)}</SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="namechapter" className="text-base">
                Tên chương học
              </label>
              <Input id="namechapter" type="text" value={name} onChange={handleChangeName} className={`${nameError != "" && "border-red-600"}`} />
              <p className="text-red-600 text-[15px]">{nameError}</p>
            </div>
            <div className="w-full flex flex-col gap-y-2">
              <SelectFieldCreateChapter id="chapter" title="Bài học (có hoặc không)" value={lectures} onSelectMulti={handleLecturesSelect} isReset={isSuccess == true ? true : false} isMultiSelect={true} />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="description" className="text-base">
                Mô tả
              </label>
              <Textarea
                id="description"
                placeholder="Xin vui lòng điền mô tả chương học ở đây."
                style={{ resize: "none" }}
                className={`resize-none h-[250px] ${descError !== "" && "border-red-600"}`}
                value={desc}
                onChange={handleChangeDesc}
              />
              <p className="text-red-600 text-[15px]">{descError}</p>

            </div>
            <div className="mt-4 flex justify-end gap-x-3">
              <ButtonComponent
                onClick={handleSubmit}
                type="admin"
                active={true}
                className="hover:opacity-90"
              >
                <span className="text-base">Tạo chương học</span>
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
      {isPending == true && <Backdrop open={true} />}
    </div>
  );
}

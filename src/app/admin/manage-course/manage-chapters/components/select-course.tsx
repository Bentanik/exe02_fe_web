"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Courses } from "@/mooks/course";
import { useEffect, useState } from "react";

interface ISelectCourseProps {
  onChange: (course: API.TCourse) => void;
}

export default function SelectCourse({ onChange }: ISelectCourseProps) {
  const [courses, setCourses] = useState<API.TCourse[]>([]);
  const [course, setCourse] = useState<string>("");

  useEffect(() => {
    setCourses(Courses);
  }, []);

  useEffect(() => {
    onChange(Courses[+course]);
  }, [course]);

  const renderCourses = (courses_arr: API.TCourse[]) => {
    return courses_arr.map((course, index) => (
      <SelectItem key={index} value={index.toString() || ""}>
        {course.name}
      </SelectItem> 
    ));
  };

  // const handleChangeCourse = (course: API.TCourse) => {
  //   return onChange(course);
  // };

  return (
    <div className="flex flex-col gap-y-4">
      <h4>Lựa chọn khóa học để tiếp tục: </h4>
      <div>
        <Select value={course} onValueChange={setCourse}>
          <SelectTrigger className="focus-visible:ring-0 focus-visible:border-gray-400 px-4 py-5 border border-gray-300 rounded-md">
            <SelectValue placeholder="Xin vui lòng lựa chọn khóa học" />
          </SelectTrigger>
          <SelectContent>{renderCourses(courses)}</SelectContent>
        </Select>
      </div>
    </div>
  );
}

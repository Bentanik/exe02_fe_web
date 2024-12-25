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

export default function SelectCourse() {
  const [courses, setCourses] = useState<API.TCourse[]>([]);

  useEffect(() => {
    setCourses(Courses);
  }, []);

  const renderCourses = (courses_arr: API.TCourse[]) => {
    return courses_arr.map((course, index) => (
      <SelectItem key={index} value={course.name || ""}>
        {course.name}
      </SelectItem>
    ));
  };

  return (
    <div>
      <h4>Lựa chọn khóa học để tiếp tục: </h4>
      <Select>
        <SelectTrigger className="focus-visible:ring-0 focus-visible:border-gray-400 px-4 py-5 border border-gray-300 rounded-md">
          <SelectValue placeholder="Xin vui lòng lựa chọn khóa học" />
        </SelectTrigger>
        <SelectContent>{renderCourses(courses)}</SelectContent>
      </Select>
    </div>
  );
}

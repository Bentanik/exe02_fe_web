"use client";

import ButtonComponent from "@/components/button-component";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Courses } from "@/mooks/course";
import {
  ChevronDown,
  ChevronUp,
  SquarePlus,
  TvMinimalPlay,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ManageChapter() {
  const [chapters, setChapters] = useState<API.TChapter[]>([]);
  useEffect(() => {
    setChapters(Courses[0].chapters || []);
  }, []);

  const moveItem = (
    arr: API.TChapter[],
    fromIndex: number,
    toIndex: number
  ) => {
    if (
      fromIndex === toIndex ||
      fromIndex < 0 ||
      toIndex < 0 ||
      fromIndex >= arr.length ||
      toIndex >= arr.length
    ) {
      return arr;
    }

    const updatedArray = [...arr];
    const [movedItem] = updatedArray.splice(fromIndex, 1);
    updatedArray.splice(toIndex, 0, movedItem);
    return updatedArray;
  };

  const handleMoveUp = (index: number) => {
    setChapters((prevChapters) => {
      return moveItem(prevChapters, index, index - 1);
    });
  };

  const handleMoveDown = (index: number) => {
    setChapters((prevChapters) => {
      return moveItem(prevChapters, index, index + 1);
    });
  };

  const renderChapters = (chapters_arr: API.TChapter[]) => {
    return chapters_arr?.map((chapter, index_chapter) => {
      return (
        <AccordionItem key={index_chapter} value={`${index_chapter}`}>
          <AccordionTrigger className="w-[50%] px-4 bg-gray-100 relative">
            <div className="flex items-center justify-between w-full pl-5 pr-2 hover:!no-underline">
              <h4 className="font-semibold text-[18px]">{chapter.name}</h4>
              <span className="!text-[14px] text-gray-600">
                {chapter.totalLecture} bài học • {chapter.totalDuration} phút
              </span>
            </div>
            <div className="absolute top-1/2 -right-[2%] -translate-y-1/2 inline-flex flex-col">
              {index_chapter !== 0 && (
                <div
                  className="text-gray-300 hover:text-gray-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMoveUp(index_chapter);
                  }}
                >
                  <ChevronUp className="w-5 h-5" strokeWidth={1.5} />
                </div>
              )}
              {index_chapter < chapters_arr?.length - 1 && (
                <div
                  className="text-gray-300 hover:text-gray-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMoveDown(index_chapter);
                  }}
                >
                  <ChevronDown className="w-5 h-5" strokeWidth={1.5} />
                </div>
              )}
            </div>
          </AccordionTrigger>
          {chapter?.lectures?.map((lecture, index_lecture) => {
            return (
              <AccordionContent
                key={index_chapter + index_lecture}
                className="pl-4 pr-6 border-t"
              >
                <div className="mt-4 flex items-center gap-x-4">
                  <div>
                    <TvMinimalPlay className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between">
                      <Link href="#!" className="hover:text-primary-admin">
                        <h5>{lecture.name}</h5>
                      </Link>
                      <span className="!text-[14px] text-gray-600">
                        {123} phút
                      </span>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            );
          })}
        </AccordionItem>
      );
    });
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-between">
        <h3 className="w-full text-2xl font-semibold">
          Danh sách các chương học
        </h3>
        <ButtonComponent
          href="/admin/manage-courses/manage-course/create-chapter"
          type="admin"
          active={false}
          tooltip="not-full"
          className="!min-h-3 flex items-center gap-x-2 px-4 py-2 hover:bg-primary-admin hover:text-white"
        >
          <SquarePlus className="text-base" strokeWidth={1.5} />
          <span className="text-base whitespace-nowrap">Tạo chương học</span>
        </ButtonComponent>
      </div>
      <div className="my-4">
        <Accordion
          type="single"
          collapsible
          className="w-full border border-b-0"
        >
          {renderChapters(chapters)}
        </Accordion>
      </div>
    </div>
  );
}

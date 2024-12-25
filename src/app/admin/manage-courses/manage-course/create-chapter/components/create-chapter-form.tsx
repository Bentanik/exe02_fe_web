"use client";

import ButtonComponent from "@/components/button-component";
import TagComponent from "@/components/tag-component";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileUpload } from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Courses } from "@/mooks/course";
import { TvMinimalPlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ICreateChapterFormProps {
  onNextStep: () => void;
}

export default function CreateChapterForm({
  onNextStep,
}: ICreateChapterFormProps) {
  const [chapters, setChapters] = useState<API.TChapter[]>([]);

  useEffect(() => {
    setChapters(Courses[0].chapters || []);
  }, []);

  const renderChapters = (chapters_arr: API.TChapter[]) => {
    return chapters_arr?.map((chapter, index_chapter) => {
      return (
        <AccordionItem
          key={index_chapter}
          value={`${index_chapter}`}
          className=""
        >
          <AccordionTrigger className="px-4 bg-gray-100">
            <div className="flex items-center justify-between w-full pl-5 pr-2 hover:!no-underline">
              <h4 className="font-semibold text-[18px]">{chapter.name}</h4>
              <span className="!text-[14px] text-gray-600">
                {chapter.totalLecture} bài học • {chapter.totalDuration} phút
              </span>
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
                        {lecture.duration} phút
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
    <div className="max-w-5xl">
      <h3 className="text-2xl font-semibold">Danh sách các chương học</h3>
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

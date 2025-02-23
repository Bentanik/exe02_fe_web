"use client";

import ButtonComponent from "@/components/button-component";
import { FileUpload } from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { Backdrop } from "@/components/backdrop";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getChaptersAsync } from "@/services/chapter/api-services";
import { isTResponseData } from "@/utils/compare";
import { useSubmitCreateLecture } from "@/app/admin/manage-lecture/create-lecture/hooks/useSubmitCreateCourse";

export default function CreateLectureForm() {
  // State
  const [chapters, setChapters] = useState<API.TChapter[] | []>([]);

  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [idVideoYoutube, setIdVideoYoutube] = useState<string>("");
  const [durationVideo, setDurationYoutube] = useState<number>();

  const [chapterSelect, setChapterSelect] = useState<string>("");

  const [chapterSelectError, setChapterError] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [descError, setDescError] = useState<string>("");
  const [idYoutubeError, setIdYoutubeError] = useState<string>("");
  const [durationError, setDurationError] = useState<string>("");

  const [errorFileUpload, setErrorFileUpload] = useState<string>("");

  const [files, setFiles] = useState<File[]>([]);

  const { onSubmit, isPending, isSuccess } = useSubmitCreateLecture();

  // Function

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        handleGetChaptersAsync(),
      ]);
    };

    fetchData();
  }, [])

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleChangeDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  }

  const handleChangeIdYoutube = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdVideoYoutube(e.target.value);
  }

  const handleChangeDurationVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDurationYoutube(Number.parseFloat(e.target.value));
  }


  const verifyFile = (file: File): boolean => {
    const isImage = file.type.startsWith("image/");
    const isValidSize = file.size <= 5 * 1024 * 1024;

    return isImage && isValidSize;
  };

  const handleFileUpload = (files: File[]) => {
    const validFiles = files.filter((file) => verifyFile(file));
    if (validFiles.length > 0) {
      setFiles(validFiles);
    } else {
      setErrorFileUpload("Chỉ chấp nhận ảnh với dung lượng tối đa 5MB.")
    }
  }

  const validateFiles = (files: File[]): boolean | string[] => {
    const errors: string[] = [];
    const isImage = files.every(file => file.type.startsWith("image/"));
    if (!isImage) errors.push("Chỉ chấp nhận ảnh.");

    const isSizeValid = files.every(file => file.size <= 5 * 1024 * 1024);
    if (!isSizeValid) errors.push("Tệp phải có kích thước dưới 5MB.");

    return errors.length === 0 ? true : errors;
  };

  const handleResetState = () => {
    setName("");
    setDesc("");
    setFiles([]);
    setIdVideoYoutube("");
    setDurationYoutube(0);
    setChapterSelect("");
    setNameError("");
    setDescError("");
    setIdYoutubeError("");
    setDurationError("");
    setErrorFileUpload("");
    setChapterError("");
  }

  const handleSetErrorField = (nameError: string | null) => {
    if (nameError !== null && nameError !== "")
      setNameError(nameError);
  }

  const handleGetChaptersAsync = async () => {
    const form = {
      pageSize: 100,
    } as REQUEST.TGetCourses

    const res = await getChaptersAsync(form);
    if (isTResponseData(res)) {
      setChapters(res.value.data.chapters.items);
    }
  }

  const handleSubmit = () => {

    if (chapterSelect == "" || chapterSelectError == null) {
      setChapterError("Phải lựa chọn Chapter");
    } else {
      setChapterError("");
    }

    if (name === "") {
      setNameError("Tên khóa học là bắt buộc");
    } else {
      setNameError("");
    }

    if (desc === "") {
      setDescError("Mô tả khóa học là bắt buộc");
    } else {
      setDescError("");
    }

    if (idVideoYoutube == "") {
      setIdYoutubeError("Mã Id Youtube là bắt buộc");
    } else {
      setIdYoutubeError("");
    }

    if (!durationVideo || durationVideo == 0) {
      setDurationError("Độ dài Video là bắt buộc");
    } else {
      setDurationError("");
    }

    if (files?.length == 0) {
      setErrorFileUpload("Xin vui lòng chọn file ảnh");
    } else {
      setErrorFileUpload("");
    }

    const isVerify = name !== "" && desc !== "" && files?.length == 1

    if (isVerify) {
      const form = {
        name: name,
        description: desc,
        imageFile: files.at(0),
        chapterId: chapterSelect !== "" && chapters[+chapterSelect].id,
        publicVideoId: idVideoYoutube,
        durationVideo: durationVideo
      } as REQUEST.TCreateLecture

      onSubmit(form, handleResetState, handleSetErrorField);
    }
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
      <div className="px-12 py-4 border-b">
        <h2 className="font-semibold text-xl">Tạo bài học</h2>
        <p className="mt-2 text-base text-gray-500 font-semibold">
          Tạo bài học với các thông tin như tên bài học, tên chương học, mô tả, mã ID Video Youtube, độ dài Video Youtube
        </p>
      </div>
      <div className="px-12 py-2">
        <div className="flex items-start gap-x-10 pt-4 pb-4">
          <div className="basis-[60%] flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="namecourse" className="text-base">
                Chương học
              </label>
              <Select value={chapterSelect} onValueChange={setChapterSelect}>
                <SelectTrigger className={`focus-visible:ring-0 focus-visible:border-gray-400 px-4 py-5 border border-gray-300 rounded-md ${chapterSelectError !== "" && "!border-red-600" }`}>
                  <SelectValue placeholder="Xin vui lòng lựa chọn chương học" />
                </SelectTrigger>
                <SelectContent>{renderChapters(chapters)}</SelectContent>
              </Select>
              <p className="text-red-600 text-[15px]">{chapterSelectError}</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="namecourse" className="text-base">
                Tên bài học
              </label>
              <Input id="namecourse" type="text" value={name} onChange={handleChangeName} className={`${nameError != "" && "border-red-600"}`} placeholder="Ví dụ: Hướng dẫn bảo vệ điện thoại" />
              <p className="text-red-600 text-[15px]">{nameError}</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="description" className="text-base">
                Mô tả
              </label>
              <Textarea
                id="description"
                placeholder="Xin vui lòng điền mô tả khóa học ở đây."
                style={{ resize: "none" }}
                className={`resize-none h-[200px] ${descError !== "" && "border-red-600"}`}
                value={desc}
                onChange={handleChangeDesc}
              />
              <p className="text-red-600 text-[15px]">{descError}</p>

            </div>
          </div>
          <div className="flex-1 flex flex-col gap-y-5">
            <div className="flex flex-row gap-x-2">
              <div className="flex flex-col gap-y-2">
                <label htmlFor="namecourse" className="text-base">
                  Mã ID Video Youtube
                </label>
                <Input id="idYoutubeVideo" type="text" value={idVideoYoutube} onChange={handleChangeIdYoutube} className={`${idYoutubeError != "" && "border-red-600"}`} />
                <p className="text-red-600 text-[15px]">{idYoutubeError}</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label htmlFor="namecourse" className="text-base">
                  Độ dài Video
                </label>
                <Input id="duration" type="number" value={durationVideo || ""} onChange={handleChangeDurationVideo} className={`${durationError != "" && "border-red-600"}`} placeholder="Ví dụ: 25.1" autoComplete="off" />
                <p className="text-red-600 text-[15px]">{durationError}</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="thumbnail" className="text-base">
                Ảnh nền của Video
              </label>
              <div className="border rounded-lg">
                <FileUpload
                  title="Tải ảnh bài học lên"
                  description="Xin vui lòng kéo hoặc click vào để tải ảnh"
                  onChange={handleFileUpload}
                  validateFile={validateFiles}
                  single={true}
                  isReset={isSuccess === true ? true : false}
                />
              </div>
              {errorFileUpload !== "" && <p className="text-base text-red-400">{errorFileUpload}</p>}
            </div>
            <div className="mt-4 flex justify-end gap-x-3">
              <ButtonComponent
                onClick={handleSubmit}
                type="admin"
                active={true}
                className="hover:opacity-90"
              >
                <span className="text-base">Tạo khóa học</span>
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
      {isPending == true && <Backdrop open={true} />}
    </div>
  );
}

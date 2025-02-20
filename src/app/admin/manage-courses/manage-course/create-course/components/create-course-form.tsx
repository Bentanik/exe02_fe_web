"use client";

import ButtonComponent from "@/components/button-component";
import { FileUpload } from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { getCategoriesAsync } from "@/services/category/api-services";
import { isTResponseData } from "@/utils/compare";
import { getLevelsAsync } from "@/services/level/api-services";
import SelectFieldCreateCourse from "@/app/admin/manage-courses/manage-course/create-course/components/select-field-create-course";
import { useSubmitCreateCourse } from "@/app/admin/manage-courses/manage-course/create-course/hooks/useSubmitCreateCourse";
import { Backdrop } from "@/components/backdrop";

export default function CreateCourseForm() {
  // State
  const [categories, setCategories] = useState<API.TCategory[] | []>([]);
  const [levels, setLevels] = useState<API.TLevel[] | []>([]);

  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [categorySelect, setCategorySelect] = useState<API.TCategory | null>(null);
  const [levelSelect, setLevelSelect] = useState<API.TLevel | null>(null);

  const [nameError, setNameError] = useState<string>("");
  const [descError, setDescError] = useState<string>("");
  const [categorySelectError, setCategorySelectError] = useState<string>("");
  const [levelSelectError, setLevelSelectError] = useState<string>("");
  const [errorFileUpload, setErrorFileUpload] = useState<string>("");

  const [files, setFiles] = useState<File[]>([]);

  const { onSubmit, isPending, isSuccess } = useSubmitCreateCourse();

  // Function

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        handleGetCategoriesAsync(),
        handleGetLevelsAsync()
      ]);
    };

    fetchData();
  }, [])

  const handleGetCategoriesAsync = async () => {
    const res = await getCategoriesAsync();
    if (isTResponseData(res)) {
      setCategories(res.value.data.categories.items);
    }
  }

  const handleGetLevelsAsync = async () => {
    const res = await getLevelsAsync();
    if (isTResponseData(res)) {
      setLevels(res.value.data.levels.items);
    }
    return null;
  }

  const handleCategorySelect = (selected: API.TCategory | null) => {
    setCategorySelect(selected);
  };

  const handleLevelSelect = (selected: API.TLevel | null) => {
    setLevelSelect(selected);
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleChangeDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
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
    setLevelSelect(null);
    setCategorySelect(null);
    setErrorFileUpload("");
    setFiles([]);
    setNameError("");
    setDescError("");
    setCategorySelectError("");
    setLevelSelectError("");
    setErrorFileUpload("");
  }

  const handleSetErrorField = (nameError: string | null) => {
    if (nameError !== null && nameError !== "")
      setNameError(nameError);
  }

  const handleSubmit = () => {
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

    if (categorySelect == null) {
      setCategorySelectError("Thể loại là bắt buộc");
    } else {
      setCategorySelectError("");
    }

    if (levelSelect == null) {
      setLevelSelectError("Cấp độ là bắt buộc");
    } else {
      setLevelSelectError("");
    }

    if (files?.length == 0) {
      setErrorFileUpload("Xin vui lòng chọn file ảnh");
    } else {
      setErrorFileUpload("");
    }

    const isVerify = name !== "" && desc !== "" && levelSelect !== null && categorySelect !== null && files?.length == 1

    if (isVerify) {
      const form = {
        name: name,
        categoryId: categorySelect?.id,
        levelId: levelSelect?.id,
        description: desc,
        thumbnailFile: files.at(0),
      } as REQUEST.TCreateCourse

      onSubmit(form, handleResetState, handleSetErrorField);
    }
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
              <Input id="namecourse" type="text" value={name} onChange={handleChangeName} className={`${nameError != "" && "border-red-600"}`} />
              <p className="text-red-600 text-[15px]">{nameError}</p>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="w-full">
                <SelectFieldCreateCourse id="category" title="Thể loại" value={categories} onSelect={handleCategorySelect} isReset={isSuccess == true ? true : false} />
                <p className="text-red-600 text-[15px]">{categorySelectError}</p>
              </div>
              <div className="w-full">
                <SelectFieldCreateCourse id="level" title="Cấp độ" value={levels} onSelect={handleLevelSelect} isReset={isSuccess == true ? true : false} />
                <p className="text-red-600 text-[15px]">{levelSelectError}</p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-y-2">
              <SelectFieldCreateCourse id="chapter" title="Chương học" value={levels} onSelect={handleLevelSelect} isReset={isSuccess == true ? true : false} />
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
          <div className="flex-1">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="thumbnail" className="text-base">
                Thumbnail
              </label>
              <div className="border rounded-lg">
                <FileUpload
                  title="Tải Thumbnail khóa học lên"
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

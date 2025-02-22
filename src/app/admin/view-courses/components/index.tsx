import TagComponent from "@/components/tag-component";
import Image from "next/image";

export default function ViewCoursesComponent() {
  return (
    <div className="flex items-start gap-x-4">
      <div
        style={{ maxWidth: "100%", height: "180px", overflow: "hidden" }}
        className="basis-[48%] bg-white rounded-lg px-4 flex items-center gap-x-4"
      >
        <figure className="overflow-hidden">
          <Image
            id="avatarButton"
            width={250}
            height={140}
            className="w-[200px] h-[140px] rounded-lg cursor-pointer"
            src={"/images/carousel_authentication_02.jpg"}
            alt="User dropdown"
          />
        </figure>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold text-xl">
            Khóa học lập trình javascript
          </h2>
          <div>
            <span className="text-sm">Thể loại: </span>
            <div className="inline-flex items-center gap-x-3">
              <TagComponent
                tag={{
                  text: "Nháp",
                  type: "category",
                  description: "Chờ khóa học được xuất bản",
                }}
              />
              <TagComponent
                tag={{
                  text: "Nháp",
                  type: "category",
                  description: "Chờ khóa học được xuất bản",
                }}
              />
            </div>
          </div>
          <div>
            <span className="text-sm">Thể loại: </span>
            <div className="inline-flex items-center gap-x-3">
              <TagComponent
                tag={{
                  text: "Nháp",
                  type: "category",
                  description: "Chờ khóa học được xuất bản",
                }}
              />
              <TagComponent
                tag={{
                  text: "Nháp",
                  type: "category",
                  description: "Chờ khóa học được xuất bản",
                }}
              />
            </div>
          </div>
          <span className="text-sm text-gray-400">
            Xuất bản: Ngày 4 tháng 10 năm 2020
          </span>
        </div>
      </div>
      <div className="flex-1">Detail course</div>
      {/* <div className="px-12 py-2 border-b">
          <h2 className="font-semibold text-xl">Tạo chương học</h2>
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
                  Tên chương học
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
        </div> */}
    </div>
  );
}

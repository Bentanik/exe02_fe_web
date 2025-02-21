import { useMutation } from "@tanstack/react-query";
import { createCourseAsync } from "@/services/course/api-services";
import useToast from "@/hooks/use-toast";

export const useServiceCreateCourse = () => {
  const toast = useToast();
  return useMutation<TResponse, TMeta, REQUEST.TCreateCourse>({
    mutationFn: async (request: REQUEST.TCreateCourse) => {
      const formData = new FormData();
      formData.append("Name", request.name);
      formData.append("Description", request.description);
      formData.append("CategoryId", request.categoryId);
      formData.append("LevelId", request.levelId);
      formData.append("ThumbnailFile", request.thumbnailFile);

      request.chapterIds.forEach((chapterId) => {
        formData.append("ChapterId", chapterId);
      });

      return await createCourseAsync(formData);
    },
    onSuccess: (data) => {
      toast.addToast({
        description: "Tạo khóa học thành công",
        type: "success",
      });
      return data;
    },
  });
};

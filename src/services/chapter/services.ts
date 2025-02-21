import { useMutation } from "@tanstack/react-query";
import useToast from "@/hooks/use-toast";
import { createChapterAsync } from "@/services/chapter/api-services";

export const useServiceCreateChapter = () => {
  const toast = useToast();
  return useMutation<TResponse, TMeta, REQUEST.TCreateChapter>({
    mutationFn: async (request: REQUEST.TCreateChapter) => {
      const formData = new FormData();
      formData.append("CourseId", request.courseId);
      formData.append("Name", request.name);
      formData.append("Description", request.description);

      return await createChapterAsync(request);
    },
    onSuccess: (data) => {
      toast.addToast({
        description: "Tạo chương học thành công",
        type: "success",
      });
      return data;
    },
  });
};

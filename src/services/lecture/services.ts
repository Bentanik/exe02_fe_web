import { createLectureAsync } from './api-services';
import { useMutation } from "@tanstack/react-query";
import useToast from "@/hooks/use-toast";

export const useServiceCreateLecture = () => {
  const toast = useToast();
  return useMutation<TResponse, TMeta, REQUEST.TCreateLecture>({
    mutationFn: async (request: REQUEST.TCreateLecture) => {
      const formData = new FormData();
      formData.append("ChapterId", request.chapterId);
      formData.append("Name", request.name);
      formData.append("Description", request.description);
      formData.append("PublicVideoId", request.publicVideoId);
      formData.append("DurationVideo", request.durationVideo.toString());
      formData.append("ImageFile", request.imageFile);
        
      return await createLectureAsync(formData);
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

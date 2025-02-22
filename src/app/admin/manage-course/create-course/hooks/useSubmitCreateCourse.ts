"use client";

import { useServiceCreateCourse } from "@/services/course/services";

export function useSubmitCreateCourse() {
  const { mutate, isPending, isSuccess } = useServiceCreateCourse();
  const onSubmit = async (
    request: REQUEST.TCreateCourse,
    onReset: () => void,
    onSetError: (nameError: string | null) => void
  ) => {
    try {
      mutate(request, {
        onSuccess: async () => {
          onReset();
        },
        onError: (error) => {
          if (error.errorCode === "course01") {
            onSetError("Tên khóa học đã bị trùng");
          }
        },
      });
    } catch (err) {
      console.log("err: ", err);
    }
  };

  return {
    onSubmit,
    isPending,
    isSuccess
  };
}

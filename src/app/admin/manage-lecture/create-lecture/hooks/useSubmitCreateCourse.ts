"use client";

import { useServiceCreateLecture } from "@/services/lecture/services";

export function useSubmitCreateLecture() {
  const { mutate, isPending, isSuccess } = useServiceCreateLecture();
  const onSubmit = async (
    request: REQUEST.TCreateLecture,
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

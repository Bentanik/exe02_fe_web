"use client";

import { useServiceCreateChapter } from "@/services/chapter/services";

export function useSubmitCreateChapter() {
  const { mutate, isPending, isSuccess } = useServiceCreateChapter();
  const onSubmit = async (
    request: REQUEST.TCreateChapter,
    onReset: () => void,
    onSetError: (nameError: string | null) => void
  ) => {
    try {
      mutate(request, {
        onSuccess: async () => {
          onReset();
        },
        onError: (error) => {
          if (error.errorCode === "course02") {
            onSetError("Tên chương học đã bị trùng");
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

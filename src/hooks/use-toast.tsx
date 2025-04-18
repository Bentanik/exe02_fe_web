import { toast } from "sonner";
import ToastAlert from "@/components/toast";

type ToastType = "success" | "error" | "warning";

const useToast = () => {
  const addToast = (
    options?: { description?: string; type?: ToastType; duration?: number },
    close: boolean = true
  ) => {
    toast.custom(
      (t) => (
        <div>
          <ToastAlert
            description={options?.description || ""}
            type={options?.type || "success"}
            onClose={
              close === true
                ? () => {
                    toast.dismiss(t);
                    return;
                  }
                : undefined
            }
          />
        </div>
      ),
      {
        duration: options?.duration || 3000,
      }
    );
  };

  return { addToast };
};

export default useToast;

"use client";

import {
  RegisterBody,
  RegisterBodyType,
} from "@/utils/schema-validations/auth.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useServiceRegister } from "@/services/auth/services";
import { reset } from "@/stores/user-slice";
import { useRouter } from "next/navigation";
import useToast from "@/hooks/use-toast";

export function useRegister() {
  const [typePassword, setTypePassword] = useState<boolean>(false);
  const [typeConfirmPassword, setTypeConfirmPassword] =
    useState<boolean>(false);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    control,
    setError,
  } = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { addToast } = useToast();
  const { mutate, isPending } = useServiceRegister();

  const router = useRouter();
  const onSubmit = async (request: RegisterBodyType) => {
    try {
      mutate(request, {
        onSuccess: async (data) => {
          if (data) {
            addToast({
              description: "Đã tạo tài khoản thành công",
              type: "success",
              duration: 5000,
            });
            reset();
            router.push("/login");
          }
        },
        onError: () => {
          setError("email", {
            type: "manual",
            message: "Email đã tồn tại",
          });
        },
      });
      console.log(request);
    } catch (err) {
      console.log("err: ", err);
    }
  };

  const valuePassword = watch("password");
  const valueConfirmPassword = watch("confirmPassword");

  const handleToggleTypePassword = () => {
    setTypePassword((prev) => !prev);
  };

  const handleToggleConfirmPassword = () => {
    setTypeConfirmPassword((prev) => !prev);
  };

  return {
    register,
    errors,
    handleSubmit,
    onSubmit,
    control,
    valuePassword,
    isPending,
    typePassword,
    valueConfirmPassword,
    typeConfirmPassword,
    handleToggleTypePassword,
    handleToggleConfirmPassword,
  };
}

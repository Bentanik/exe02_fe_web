"use client";

import {
  RegisterBody,
  RegisterBodyType,
} from "@/utils/schema-validations/auth.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useToast from "@/hooks/use-toast";

export function useRegister() {
  const router = useRouter();
  const [typePassword, setTypePassword] = useState<boolean>(false);
  const [typeConfirmPassword, setTypeConfirmPassword] =
    useState<boolean>(false);
  const { addToast } = useToast();

  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
    control,
  } = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
    },
  });

  const onSubmit = async (request: RegisterBodyType) => {
    // dispatch(openBackdrop());
    try {
      //   mutate(data, {
      //     onSuccess: async (data) => {
      //       if (data) {
      //         if (data.value.code === "auth_register_success") {
      //           reset();
      //           addToast({
      //             description: data.value.message,
      //             type: "success",
      //             duration: 5000,
      //           });
      //           router.push("/login");
      //         }
      //       }
      //     },
      //     onError: (error) => {
      //       if (error.errorCode == "auth_email_exists") {
      //         setError("email", {
      //           type: "manual",
      //           message: error.detail,
      //         });
      //       }
      //     },
      //   });
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
    typePassword,
    valueConfirmPassword,
    typeConfirmPassword,
    handleToggleTypePassword,
    handleToggleConfirmPassword,
  };
}

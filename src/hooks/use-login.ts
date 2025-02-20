"use client";

import {
  LoginBody,
  LoginBodyType,
} from "@/utils/schema-validations/auth.schema";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServiceLogin } from "@/services/auth/services";

export function useLogin() {
  const [typePassword, setTypePassword] = useState<boolean>(false);

  const {
    register,
    watch,
    setError,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useServiceLogin();
  const onSubmit = async (request: LoginBodyType) => {
    try {
      const loginRequest: REQUEST.TLogin = { ...request };
      mutate(loginRequest, {
        onSuccess: async () => {
          reset();
        },
        onError: (error) => {
          if (error.errorCode === "auth13") {
            setError("email", {
              type: "manual",
              message: error.detail,
            });
            setError("password", {
              type: "manual",
              message: error.detail,
            });
          }
        },
      });
    } catch (err) {
      console.log("err: ", err);
    }
  };
  const valuePassword = watch("password");

  const handleToggleTypePassword = () => {
    setTypePassword((prev) => !prev);
  };

  return {
    register,
    errors,
    handleSubmit,
    onSubmit,
    valuePassword,
    typePassword,
    handleToggleTypePassword,
    isPending,
  };
}

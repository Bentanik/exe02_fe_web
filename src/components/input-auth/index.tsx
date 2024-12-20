"use client";

import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface InputAuthProps {
  id: string;
  type: "text" | "password" | "number";
  autoComplete: "on" | "off";
  label: string;
  register?: any;
  error?: string;
  value?: string;
  onClickEyePassword?: any;
}

export default function InputAuth({
  id,
  label,
  type,
  autoComplete,
  register,
  error,
  value,
  onClickEyePassword,
}: InputAuthProps) {
  return (
    <>
      <div className="flex justify-between">
        <label
          htmlFor={id}
          className={`text-gray-600 mt-2 ${error && "text-red-400"}`}
        >
          {label}
        </label>
      </div>
      <div className="relative">
        <Input
          id={id}
          type={type}
          autoComplete={autoComplete ?? "off"}
          className={`py-5 px-4 pr-[10%] border-2 border-gray-300 w-full bg-transparent focus-visible:ring-0 focus-visible:border-gray-400 outline-none !text-base ${
            error && "border-red-300"
          }`}
          {...register}
        />
        {value !== "" && (id === "password" || id === "confirmpassword") && (
          <div className="absolute select-none top-[50%] -translate-y-[50%] right-[3%]">
            <span
              onClick={onClickEyePassword}
              className="label-auth hover:text-gray-500 cursor-pointer"
            >
              {type === "password" ? <EyeOff /> : <Eye />}
            </span>
          </div>
        )}
      </div>
      {id !== "phonenumber" && error && (
        <p className="text-base text-red-400 font-montserrat">{error}</p>
      )}
    </>
  );
}

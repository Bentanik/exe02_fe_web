"use client";

import InputAuth from "@/components/input-auth";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Gender } from "@/const/genders";
import { useRegister } from "@/app/(auth)/register/hooks/useRegister";
import { Controller } from "react-hook-form";
import Image from "next/image";

export default function RegisterForm() {
  const {
    control,
    register,
    errors,
    handleSubmit,
    onSubmit,
    valuePassword,
    valueConfirmPassword,
    typePassword,
    typeConfirmPassword,
    handleToggleTypePassword,
    handleToggleConfirmPassword,
  } = useRegister();

  return (
    <div className="w-full max-w-[680px] px-4 py-5 mx-auto">
      <h2 className="text-2xl font-medium leading-8">Đăng ký</h2>
      <span className="text-gray-500 inline-block mt-2">
        Kiến thức là sức mạnh, hiểu biết về cách phòng tránh lừa đảo chính là
        chìa khóa để bảo vệ bản thân và cộng đồng khỏi những nguy hiểm tiềm ẩn
        trong cuộc sống.
      </span>
      <form
        className="pt-4 flex flex-col gap-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col md:flex-row md:gap-x-4">
          <div className="w-full flex flex-col gap-y-2">
            <InputAuth
              id="fullName"
              label="Họ và tên"
              type="text"
              autoComplete="off"
              register={register("fullName")}
              error={errors?.fullName?.message}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="gender" className="text-gray-600">
            Giới tính
          </label>
          <Controller
            name="gender"
            control={control}
            defaultValue={Gender.Male} // Giá trị mặc định
            render={({ field }) => (
              <Select {...field} onValueChange={field.onChange}>
                <SelectTrigger className="focus-visible:ring-0 focus-visible:border-gray-400 px-4 py-5 border-2 border-gray-300 rounded-md">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(Gender).map((gender, index) => (
                    <SelectItem key={index} value={gender}>
                      {gender}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <InputAuth
            id="email"
            label="Email"
            type="text"
            autoComplete="off"
            register={register("email")}
            error={errors?.email?.message}
          />
        </div>
        <div className="flex flex-row gap-x-4">
          <div className="flex flex-col gap-y-2 mt-2">
            <label
              htmlFor="code"
              className={`text-gray-600 ${
                errors?.phoneNumber?.message && "text-red-400"
              }`}
            >
              Mã vùng
            </label>
            <div
              className={`block p-2 border-2 border-gray-300 rounded-md text-center ${
                errors?.phoneNumber?.message && "border-red-300"
              }`}
            >
              +84
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-y-2">
            <InputAuth
              id="phonenumber"
              label="Số điện thoại"
              type="number"
              autoComplete="off"
              register={register("phoneNumber")}
              error={errors?.phoneNumber?.message}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <InputAuth
            id="password"
            label="Mật khẩu"
            type={typePassword ? "text" : "password"}
            autoComplete="off"
            register={register("password")}
            error={errors?.password?.message}
            value={valuePassword}
            onClickEyePassword={handleToggleTypePassword}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <InputAuth
            id="confirmpassword"
            label="Xác nhận mật khẩu"
            type={typeConfirmPassword ? "text" : "password"}
            autoComplete="off"
            register={register("confirmPassword")}
            error={errors?.confirmPassword?.message}
            value={valueConfirmPassword}
            onClickEyePassword={handleToggleConfirmPassword}
          />
        </div>
        <button
          className={`mt-2 block w-full rounded-md py-2 ${
            Object.keys(errors).length === 0 ? "bg-blue-600" : "bg-blue-400"
          }`}
        >
          <span className="text-base text-gray-200">Đăng ký</span>
        </button>
        <div className="flex items-center justify-between gap-3">
          <div
            className={`w-[50%] h-1 rounded-full ${
              Object.keys(errors).length === 0 ? "bg-blue-600" : "bg-blue-400"
            }`}
          ></div>
          <span className="text-gray-400">OR</span>
          <div
            className={`w-[50%] h-1 rounded-full ${
              Object.keys(errors).length === 0 ? "bg-blue-600" : "bg-blue-400"
            }`}
          ></div>
        </div>
        <button
          type="button"
          //   onClick={() => handleLoginGoogle()}
          className="w-full rounded-md py-2 bg-white border border-gray-400 hover:bg-gray-300 flex items-center justify-center space-x-2"
        >
          <Image
            src={"/images/google-icon.svg"}
            alt="Đăng nhập với Google"
            width={25}
            height={25}
            className="block"
          />
          <span className="text-base text-gray-700">Đăng nhập với Google</span>
        </button>
        <div className="flex flex-wrap justify-between gap-y-2">
          <p className="text-[1rem]">
            Đã có tài khoản <b>antiSCM? </b>
            <Link href="/login" className="hover:text-blue-600">
              <span className="font-bold cursor-pointer">Log In</span>
            </Link>
          </p>
          <Link href="/forgot-password" className="hover:text-blue-600">
            <p className="text-[1rem]">
              <span className="font-bold cursor-pointer">Quên mật khẩu?</span>
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}

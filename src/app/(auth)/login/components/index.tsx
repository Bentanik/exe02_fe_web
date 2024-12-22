"use client";

import InputAuth from "@/components/input-auth";
import { useLogin } from "@/hooks/use-login";
import Image from "next/image";
import Link from "next/link";

export default function LoginForm() {
  const {
    register,
    errors,
    handleSubmit,
    onSubmit,
    valuePassword,
    typePassword,
    handleToggleTypePassword,
  } = useLogin();

  // const { handleLoginGoogle, isPendingGoogle } = useLoginGoogle();

  return (
    <div className="px-10 w-full min-h-screen flex justify-center items-center bg-white">
      <div className="w-full px-5 py-4 m-auto">
        <h2 className="text-[1.5rem] leading-8 font-medium text-center">
          Đăng nhập
        </h2>
        <span className="inline-block mt-2 text-gray-500 w-full text-center">
          Kiến thức là sức mạnh, hiểu biết về cách phòng tránh lừa đảo chính là
          chìa khóa để bảo vệ bản thân và cộng đồng khỏi những nguy hiểm tiềm ẩn
          trong cuộc sống.
        </span>
        <form
          className="flex flex-col gap-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-y-2">
            <InputAuth
              id="Email"
              label="Email"
              type="text"
              autoComplete="off"
              register={register("email")}
              error={errors?.email?.message}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <InputAuth
              id="password"
              label="Mật khẩu"
              type={typePassword === false ? "password" : "text"}
              autoComplete="off"
              register={register("password")}
              error={errors?.password?.message}
              value={valuePassword}
              onClickEyePassword={handleToggleTypePassword}
            />
          </div>
          <div className="flex flex-col gap-y-5">
            <button
              type="submit"
              className={`mt-2 block w-full rounded-md py-2 bg-blue-600 hover:bg-blue-60 ${
                Object.keys(errors).length !== 0 && "!bg-blue-400"
              }`}
            >
              <span className="text-base text-gray-200">Đăng nhập</span>
            </button>
            <div className="flex items-center justify-between gap-3">
              <div
                className={`w-[45%] h-1 rounded-full ${
                  Object.keys(errors).length === 0
                    ? "bg-blue-600"
                    : "bg-blue-100"
                }`}
              ></div>
              <span className="text-gray-400">OR</span>
              <div
                className={`w-[45%] h-1 rounded-full ${
                  Object.keys(errors).length === 0
                    ? "bg-blue-600"
                    : "bg-blue-100"
                }`}
              ></div>
            </div>
            <button
              type="button"
              // onClick={() => handleLoginGoogle()}
              className="w-full rounded-md py-2 bg-white border border-gray-400 hover:bg-gray-300 flex items-center justify-center space-x-2"
            >
              <Image
                src={"/images/google-icon.svg"}
                alt="Đăng nhập với Google"
                width={25}
                height={25}
                className="block"
              />
              <span className="text-base text-gray-700">
                Đăng nhập với Google
              </span>
            </button>

            <div className="flex justify-between">
              <p className="text-[1rem]">
                Lần đầu sử dụng <b>antiSCM? </b>
                <Link href="/register" className="hover:text-blue-600">
                  <span className="font-bold cursor-pointer">Đăng ký</span>
                </Link>
              </p>
              <Link href="/forgot-password" className="hover:text-blue-600">
                <span className="font-bold cursor-pointer">Quên mật khẩu?</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

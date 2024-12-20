import { Gender } from "@/const/genders";
import { z } from "zod";

export const LoginBody = z
  .object({
    email: z.string().email("Email này hợp lệ, xin vui lòng sửa lại"),
    password: z
      .string()
      .min(6, "Mật khẩu phải ít nhất 6 ký tự")
      .max(100, "Mật khẩu dài tối đa 100 ký tự"),
  })
  .strict();

export type LoginBodyType = z.infer<typeof LoginBody>;

export const RegisterBody = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, "Họ và tên phải từ 2 ký tự trở lên")
      .max(256),
    email: z.string().email("Email này hợp lệ, xin vui lòng sửa lại"),
    password: z
      .string()
      .min(6, "Mật khẩu phải ít nhất 6 ký tự")
      .max(100, "Mật khẩu dài tối đa 100 ký tự"),
    confirmPassword: z
      .string()
      .min(6, "Mật khẩu phải ít nhất 6 ký tự")
      .max(100, "Mật khẩu dài tối đa 100 ký tự"),
    phoneNumber: z.string().refine(
      (val) => {
        if (/^0\d{9}$/.test(val)) return true;
        if (/^\d{9}$/.test(val)) return true;
        return false;
      },
      {
        message: "Số điện thoại này không hợp lệ",
      }
    ),
    gender: z.nativeEnum(Gender, {
      errorMap: () => ({ message: "Xin vui lòng lựa chọn giới tính" }),
    }),
  })
  .strict()
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Mật khẩu không khớp, xin vui lòng kiểm tra lại",
        path: ["confirmPassword"],
      });
    }
  });

export type RegisterBodyType = z.TypeOf<typeof RegisterBody>;

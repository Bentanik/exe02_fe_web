import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import RegisterForm from "@/app/(auth)/register/components";

export const metadata: Metadata = {
  title: "Đăng ký",
  description: "Đăng ký với antiSCM",
};

export default function RegisterPage() {
  return (
    <div className="w-full">
      <RegisterForm />
    </div>
  );
}
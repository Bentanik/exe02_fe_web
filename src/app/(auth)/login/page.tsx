import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import LoginForm from "@/app/(auth)/login/components";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Đăng nhập với antiSCM",
};

export default function LoginPage() {
  return (
    <div className="w-full">
      <LoginForm />
    </div>
  );
}

import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import RegisterForm from "@/app/(auth)/register/components";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Sign up for antiSCM",
};

export default function RegisterPage() {
  return (
    <div className="w-full">
      <RegisterForm />
    </div>
  );
}

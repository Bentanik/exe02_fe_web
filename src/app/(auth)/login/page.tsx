import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import LoginForm from "@/app/(auth)/login/components";

export const metadata: Metadata = {
  title: "Log In",
  description: "Log In for antiSCM",
};

export default function LoginPage() {
  return (
    <div className="w-full">
      <LoginForm />
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useServiceLogout } from "@/services/auth/services";

export default function useLogout() {
  const { mutate, isPending } = useServiceLogout();
  const handleLogout = () => {
    try {
      mutate();
    } catch (err) {
      location.href = "/";
    }
  };
  return {
    isPending,
    handleLogout,
  };
}
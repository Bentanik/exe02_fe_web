import ErrorPayment from "@/app/error-payment/error-payment";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Thanh toán thất bại",
    description: "Thanh toán thất bại với antiSCM",
  };
  

export default function ErrorPaymentPage() {
    return (
        <div>
            <ErrorPayment />
        </div>
    );
}

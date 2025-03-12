/* eslint-disable @typescript-eslint/no-explicit-any */
import SuccessPayment from "@/app/success-payment/[billId]/success-payment";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Thanh toán thành công",
    description: "Thanh toán thành công với antiSCM",
  };
  

export default function SuccessPaymentPage({ params }: any) {
    const userId = params?.billId || null;
    return (
        <div>
            <SuccessPayment billId={userId}/>
        </div>
    )
}
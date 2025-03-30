/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Backdrop } from "@/components/backdrop";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SuccessPayment {
    billId: string;
}

export default function SuccessPayment({ billId }: SuccessPayment) {
    return (
        <div className="w-full h-screen overflow-hidden relative flex items-center justify-center">
            <div className="absolute inset-0">
                <img
                    src="/images/bgDonation.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="w-[90%] md:w-[80%] lg:w-[70%] h-auto bg-white border border-white/60 rounded-xl relative flex flex-col md:flex-row overflow-hidden">
                <div className="relative w-full md:w-1/2 h-[300px] md:h-auto">
                    <img
                        src="/images/donationthumb.jpg"
                        alt="Thumbnail"
                        className="w-full h-full object-cover md:rounded-l-xl"
                    />
                    <div className="absolute inset-0 bg-black/50 md:rounded-l-xl"></div>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col items-center md:items-start md:rounded-r-xl text-center md:text-left">
                    <div className="flex justify-center mt-6 md:mt-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-16 h-16 md:w-20 md:h-20"
                        >
                            <path
                                fill="#2ab75b"
                                d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
                            />
                        </svg>
                    </div>
                    <h3 className="mt-5 text-xl md:text-2xl font-semibold">
                        Ủng hộ thành công
                    </h3>
                    <p className="mt-3 text-sm md:text-base px-5 md:px-10">
                        Cảm ơn bạn đã ủng hộ! Đóng góp của bạn giúp chúng tôi tiếp tục phát triển và cung cấp những khóa học chất lượng về an ninh mạng.
                    </p>
                    <div className="flex justify-center mt-6 md:mt-10">
                        <Link href="/">
                            <Button className="text-white bg-black hover:bg-[#2ab75b] rounded-full px-6 py-3 md:px-8 md:py-4 text-sm md:text-base">
                                Quay về trang chủ
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

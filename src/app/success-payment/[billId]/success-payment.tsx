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
        <div className="w-full h-screen object-cover overflow-hidden relative">
            <div className="relative w-full h-full">
                <img
                    src="/images/bgDonation.jpg"
                    alt="Background"
                    className="w-full h-full object-fill"
                />
                <div className="absolute inset-0 bg-[#00000023] opacity-50"></div>
            </div>

            <div className="w-[80%] h-[85%] absolute top-[10%] left-[10%] border border-[#ffffffa4] rounded-xl">
                <div className="p-4 flex">
                    <div className="relative">
                        <img
                            src="/images/donationthumb.jpg"
                            alt="Thumbnail"
                            className="flex-1 h-[590px] object-cover rounded-l-xl"
                        />
                        <div className="absolute inset-0 bg-black/50 rounded-l-xl"></div>
                    </div>
                    <div className="absolute top-[55%] left-[0] right-[0]">
                        <div className="p-10">
                            <div className="text-[white] text-[3rem] w-[50%] leading-[50px] font-semibold">
                                Cảm ơn đã ủng hộ
                            </div>
                            <p className="text-[white] w-[40%] mt-3">
                                Mỗi sự đóng góp của bạn là một bước tiến giúp ứng dụng ngày càng hoàn thiện, mang đến những khóa học an ninh mạng chất lượng, giúp cộng đồng nâng cao kiến thức và bảo vệ an toàn trong thế giới số!
                            </p>
                        </div>
                    </div>
                    <div className="flex-[1.4] bg-white rounded-r-xl relative z-10">
                        <div className="flex justify-center mt-[100px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-[15%]"
                            >
                                <path
                                    fill="#2ab75b"
                                    d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
                                />
                            </svg>
                        </div>
                        <div className="mt-[10px] text-center text-[2rem]">
                            Ủng hộ thành công
                        </div>

                        <div className="mt-5 text-center px-10">
                            Hãy cùng chung tay đóng góp để ứng dụng tiếp tục phát triển, mang đến những khóa học chất lượng về an ninh mạng, giúp mọi người nâng cao kiến thức và bảo vệ không gian số an toàn hơn!
                        </div>

                        <div className="flex justify-center mt-10">
                            <Link href="/">
                                <Button className="text-[white] bg-black hover:bg-[#2ab75b] z-20 rounded-full p-6">
                                    Quay về trang chủ
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
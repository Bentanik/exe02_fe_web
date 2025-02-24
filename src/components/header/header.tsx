/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
    const currentPath = usePathname();

    return (
        <header className="fixed top-5 z-50 w-full">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center w-[80%] bg-[#1f1f1f] rounded-[100px]">
                <div className="flex items-center">
                    <img
                        src="/images/logo.png"
                        alt="logo"
                        className="w-[60px] h-[60px]"
                    />
                    <h1 className="text-2xl text-white ml-2">antiSCM</h1>
                </div>

                <nav className="flex items-center space-x-6 mr-10">
                    <Link
                        href="/"
                        className={`text-white ${currentPath === "/"
                                ? "text-[#06c4d9]"
                                : "hover:text-[#06c4d9]"
                            }`}
                    >
                        Trang chủ
                    </Link>
                    <Link
                        href="/aboutus"
                        className={`text-white ${currentPath === "/aboutus"
                                ? "text-[#06c4d9]"
                                : "hover:text-[#06c4d9]"
                            }`}
                    >
                        Về chúng tôi
                    </Link>
                    <Link
                        href="/aboutus"
                        className={`text-white ${currentPath === "/aboutus"
                                ? "text-[#06c4d9]"
                                : "hover:text-[#06c4d9]"
                            }`}
                    >
                        Tham khảo các gói đăng ký
                    </Link>
                    <Link href="/login">
                        <Button className="text-white bg-[#06c4d9] hover:bg-[#06c4d9] hover:opacity-90 hover:text-white">
                            Tham gia ngay
                        </Button>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;

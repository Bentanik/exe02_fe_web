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
                        className={`text-white ${
                            currentPath === "/"
                                ? "text-[#06c4d9]"
                                : "hover:text-[#06c4d9]"
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/aboutus"
                        className={`text-white ${
                            currentPath === "/aboutus"
                                ? "text-[#06c4d9]"
                                : "hover:text-[#06c4d9]"
                        }`}
                    >
                        About Us
                    </Link>
                    <Link
                        href="/adopt"
                        className={`text-white ${
                            currentPath === "/adopt"
                                ? "text-[#06c4d9]"
                                : "hover:text-[#06c4d9]"
                        }`}
                    >
                        Adopt
                    </Link>
                    <Link
                        href="/volunteer"
                        className={`text-white ${
                            currentPath === "/volunteer"
                                ? "text-[#06c4d9]"
                                : "hover:text-[#06c4d9]"
                        }`}
                    >
                        Volunteer
                    </Link>
                    <Link href="/donation">
                        <Button className="text-white bg-[#06c4d9] hover:bg-[#06c4d9] hover:opacity-90 hover:text-white">
                            Donate
                        </Button>
                    </Link>
                    <Link
                        href="/event"
                        className={`text-white ${
                            currentPath === "/newandevent"
                                ? "text-[#06c4d9]"
                                : "hover:text-[#06c4d9]"
                        }`}
                    >
                        News and Events
                    </Link>
                    <div className="bg-slate-500 w-[50px] h-[50px] rounded-[100px]"></div>
                </nav>
            </div>
        </header>
    );
};

export default Header;

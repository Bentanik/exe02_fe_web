"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import anime from "animejs";
import { useState, useEffect, useRef } from "react";

const listInfo = [
    {
        img: "/images/Creditcard.svg",
        title: "Reduce Attack Surface",
        desc: "Minimizing vulnerabilities for a stronger, more resilient defence.",
    },
    {
        img: "/images/Globe.svg",
        title: "Reduce Attack Surface",
        desc: "Minimizing vulnerabilities for a stronger, more resilient defence.",
    },
    {
        img: "/images/Search Bug.svg",
        title: "Reduce Attack Surface",
        desc: "Minimizing vulnerabilities for a stronger, more resilient defence.",
    },
    {
        img: "/images/Protection.svg",
        title: "Reduce Attack Surface",
        desc: "Minimizing vulnerabilities for a stronger, more resilient defence.",
    },
];

const listWarning = [
    {
        percent: 35,
        title: "Phishing attack",
        desc: "Phishing is a scam where an attacker impersonates a trusted entity to deceive users into providing sensitive information via spoofed emails or messages.",
    },
    {
        percent: 25,
        title: "Virus and Malicious Software",
        desc: "Malware, including viruses, trojans, and ransomware, infiltrates systems without user permission, damaging data, stealing personal information, and demanding ransom to recover it.",
    },
    {
        percent: 15,
        title: "DDoS attack",
        desc: "A DDoS attack is a cyber attack where a large botnet sends traffic to a website or network service, causing financial and reputational damage to businesses.",
    },
    {
        percent: 20,
        title: "Unsecured websites",
        desc: "Personal information loss occurs when users input sensitive data into unsecured websites, which may lack SSL encryption or have security vulnerabilities, allowing hackers to steal user data.",
    },
];

const listProtect = [
    {
        img: "/images/knowledge.svg",
        title: "Tăng cường kiến thức về an ninh mạng",
        desc: "Tránh nhấp vào liên kết lạ hoặc email đáng ngờ, ngay cả khi chúng trông đáng tin. Kiểm tra kỹ địa chỉ email và liên hệ trực tiếp với tổ chức nếu có nghi ngờ.",
    },
    {
        img: "/images/email.svg",
        title: "Cảnh giác với các liên kết lạ và email giả mạo",
        desc: "Phishing is a scam where an attacker impersonates a trusted entity to deceive users into providing sensitive information via spoofed emails or messages.",
    },
    {
        img: "/images/publicWifi.svg",
        title: "Hạn chế dùng Wi-Fi công cộng",
        desc: "Phishing is a scam where an attacker impersonates a trusted entity to deceive users into providing sensitive information via spoofed emails or messages.",
    },
];

// Component for each warning
function WarningItem({
    info,
    index,
}: {
    info: (typeof listWarning)[number];
    index: number;
}) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        if (inView && !animated) {
            setAnimated(true);
            anime({
                targets: `.percent-${index}`,
                innerHTML: [0, info.percent],
                easing: "easeInOutQuad",
                round: 1,
                duration: 2000,
            });
        }
    }, [inView, animated, index, info.percent]);

    return (
        <div ref={ref} className="rounded-xl bg-white w-[40%] shadow-lg">
            <div className="p-5">
                <div className="flex items-center justify-between">
                    <h2 className="text-[3rem] font-bold text-[#13759d]">
                        <span className={`percent-${index}`}>0</span>%
                    </h2>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-[30px] h-[30px]"
                    >
                        <path
                            fill="#e63737"
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                        />
                    </svg>
                </div>
                <h3 className="text-[1.8rem] font-semibold">{info.title}</h3>
                <p className="mt-2">{info.desc}</p>
            </div>
        </div>
    );
}

export default function Home() {
    const product1Ref = useRef<HTMLParagraphElement>(null);
    const product2Ref = useRef<HTMLParagraphElement>(null);
    const product3Ref = useRef<HTMLParagraphElement>(null);

    const [currentImage, setCurrentImage] = useState("/images/launching.png");
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (
                    entry.target === product1Ref.current &&
                    entry.isIntersecting
                ) {
                    updateImage("/images/launching.png");
                } else if (
                    entry.target === product2Ref.current &&
                    entry.isIntersecting
                ) {
                    updateImage("/images/bg1.jpg");
                } else if (
                    entry.target === product3Ref.current &&
                    entry.isIntersecting
                ) {
                    updateImage("/images/dot.png");
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            root: null,
            threshold: 0.1,
        });

        if (product1Ref.current) observer.observe(product1Ref.current);
        if (product2Ref.current) observer.observe(product2Ref.current);
        if (product3Ref.current) observer.observe(product3Ref.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    const updateImage = (newImage: string) => {
        setFade(false);
        setTimeout(() => {
            setCurrentImage(newImage);
            setFade(true);
        }, 100);
    };

    const renderListInfo = () => {
        return listInfo.map((info, index) => (
            <div
                key={index}
                className="h-[300px] rounded-xl border border-gray-500 relative z-10"
            >
                <div className="p-5">
                    <Image src={info.img} alt="icon" width={50} height={50} />
                    <h3 className="text-lg font-bold border-b-[1px] border-gray-500 py-[20px]">
                        {info.title}
                    </h3>
                    <p className="text-gray-600 pt-[20px]">{info.desc}</p>
                </div>
            </div>
        ));
    };

    const renderListProtect = () => {
        return listProtect.map((info, index) => (
            <div key={index} className="rounded-xl bg-white w-[28%] shadow-lg">
                <div className="p-10">
                    <Image
                        src={info.img}
                        alt="icon"
                        width={150}
                        height={150}
                        className="mx-auto"
                    />
                    <h3 className="text-[1.3rem] font-bold py-[20px] text-center">
                        {info.title}
                    </h3>
                    <p className="text-gray-600 pt-[20px] text-center">
                        {info.desc}
                    </p>
                </div>
            </div>
        ));
    };

    const renderListWarning = () => {
        return listWarning.map((info, index) => (
            <WarningItem key={index} info={info} index={index} />
        ));
    };

    return (
        <div className="w-full bg-[#f6f6f6]">
            {/* Hero Content */}
            <div className="pt-[10%] pl-[10%] bg-[black] relative rounded-b-[50px]">
                <div className="flex w-full">
                    {/* Left Hero */}
                    <div className="flex-1 mt-[100px]">
                        <h1 className="text-white text-[3.1rem] leading-[60px] font-bold">
                            Stay Safe Online, Protect Your Everyday Life
                        </h1>
                        <div className="relative pl-6 mt-5">
                            <span className="absolute left-0 top-0 h-full w-1 bg-[#06c4d9]"></span>
                            <p className="text-white w-[85%] opacity-90">
                                With our proactive approach to cybersecurity,
                                our experts help identify and prevent scams,
                                ensuring your online safety and protecting you
                                from cyber threats.
                            </p>
                        </div>
                        <Link href="/donation">
                            <Button className="my-[50px] text-white bg-[#06c4d9] hover:bg-[#06c4d9] hover:opacity-90 px-[50px] py-[25px] rounded-full text-[1.1rem] font-semibold">
                                Refer To The Courses
                            </Button>
                        </Link>
                    </div>
                    {/* Right Hero Content */}
                    <div className="flex-1 text-white mb-10 relative">
                        {/* Background Blur Image */}
                        <img
                            src="/images/blur.png"
                            alt="blur"
                            className="absolute top-[50px] right-20 w-full h-full opacity-40 z-0"
                        />
                        {/* Info Boxes */}
                        <div className="grid grid-cols-2 gap-5 w-[80%] relative z-10">
                            {renderListInfo()}
                        </div>
                    </div>
                </div>
            </div>

            {/* Warning content 1 */}
            <div className="pt-[80px] pl-[50px]">
                {/* Header */}
                <h1 className=" text-[3.1rem] leading-[60px] font-bold text-center">
                    Các vấn đề lừa đảo không gian mạng
                    <br />
                    nghiêm trọng hiện nay
                </h1>
                {/* Content */}
                <div className="m-[50px] relative mt w-[80%]">
                    <div className="flex flex-wrap gap-4 absolute top-[100px]">
                        {renderListWarning()}
                    </div>
                </div>
                <img
                    src="/images/bg1.jpg"
                    alt="bg content 1"
                    className="ml-auto w-[40%] h-[700px] object-cover rounded-l-3xl"
                />
            </div>

            {/* Solution content*/}
            <div className="mt-[80px]">
                <div>
                    <h1 className="text-[3.1rem] leading-[60px] font-bold text-center">
                        Làm thế nào để phòng ngừa
                        <br /> và bảo vệ
                    </h1>
                    <div className="mt-[30px] px-[75px] relative">
                        <div className="flex justify-between">
                            <Image
                                src="/images/dot.png"
                                alt="icon"
                                width={400}
                                height={400}
                                className="object-cover w-[30%] h-[500px]"
                            />
                            <Image
                                src="/images/dot.png"
                                alt="icon"
                                width={400}
                                height={350}
                                className="object-cover w-[30%] h-[500px]"
                            />
                        </div>
                        <div className="flex gap-[20px] absolute top-[23%] left-[11%]">
                            {renderListProtect()}
                        </div>
                    </div>
                </div>
            </div>

            {/* Introduce mobile app */}
            <div className="mt-[200px]">
                <h1 className="text-[3.1rem] leading-[60px] font-bold text-center">
                    antiSCM cung cấp các thông tin và
                    <br /> khóa học về an ninh mạng
                </h1>

                {/* Product 1 */}
                <div>
                    <div className="mt-[100px] flex justify-around">
                        <div className="flex-1">
                            <h1 className="text-[2rem]">
                                Trang giới thiệu về mobile app
                            </h1>
                            <p className="mt-[1000px]" ref={product1Ref}>
                                hết nội dung 1
                            </p>
                            <h1 className="text-[2rem]">
                                Trang giới thiệu về mobile app 2
                            </h1>
                            <p className="mt-[1000px]" ref={product2Ref}>
                                hết nội dung 2
                            </p>
                            <h1 className="text-[2rem]">
                                Trang giới thiệu về mobile app 3
                            </h1>
                            <p className="mt-[1000px]" ref={product3Ref}>
                                hết nội dung 3
                            </p>
                        </div>
                        <div className="flex-1 relative">
                            {/* Sticky Image */}
                            <div className="sticky top-[100px]">
                                <div
                                    className={`image-fade ${
                                        fade ? "image-fade-active" : ""
                                    }`}
                                >
                                    <Image
                                        src={currentImage}
                                        alt="icon"
                                        width={400}
                                        height={500}
                                        className="object-cover w-full h-[500px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

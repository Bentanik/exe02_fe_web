"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import anime from "animejs";
import { useState, useEffect, useRef } from "react";
import { Disclosure } from "@headlessui/react";
import { motion } from "framer-motion";
import { XMarkIcon, PlusIcon } from "@heroicons/react/24/solid";

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
const listHomeContent = [
    {
        img: "/images/email.svg",
        desc: "Các bài đăng nhận thức về phòng chống lừa dảo không gian mạng",
    },
    {
        img: "/images/email.svg",
        desc: "Các bài đăng các dấu hiệu lừa đảo không gian mạng",
    },
    {
        img: "/images/email.svg",
        desc: "Tính năng check độ an toàn của trang Web trong qua URL",
    },
    {
        img: "/images/email.svg",
        desc: "Tính năng check độ an toàn của tài khoản ngân hàng trong qua số tài khoản",
    },
    {
        img: "/images/email.svg",
        desc: "Cung cấp các gói premium về các khóa học phòng chống lừa đảo đến từ các chuyên gia an toàn thông tin",
    },
];

const listAwarenessContent = [
    {
        img: "/images/email.svg",
        desc: "Các bài đăng nhận thức về phòng chống lừa dảo không gian mạng",
    },
    {
        img: "/images/email.svg",
        desc: "Các bài đăng các dấu hiệu lừa đảo không gian mạng",
    },
    {
        img: "/images/email.svg",
        desc: "Tính năng check độ an toàn của trang Web trong qua URL",
    },
    {
        img: "/images/email.svg",
        desc: "Tính năng check độ an toàn của tài khoản ngân hàng trong qua số tài khoản",
    },
    {
        img: "/images/email.svg",
        desc: "Cung cấp các gói premium về các khóa học phòng chống lừa đảo đến từ các chuyên gia an toàn thông tin",
    },
];

const listSignContent = [
    {
        img: "/images/email.svg",
        desc: "Các bài đăng nhận thức về phòng chống lừa dảo không gian mạng",
    },
    {
        img: "/images/email.svg",
        desc: "Các bài đăng các dấu hiệu lừa đảo không gian mạng",
    },
    {
        img: "/images/email.svg",
        desc: "Tính năng check độ an toàn của trang Web trong qua URL",
    },
    {
        img: "/images/email.svg",
        desc: "Tính năng check độ an toàn của tài khoản ngân hàng trong qua số tài khoản",
    },
    {
        img: "/images/email.svg",
        desc: "Cung cấp các gói premium về các khóa học phòng chống lừa đảo đến từ các chuyên gia an toàn thông tin",
    },
];

const listCourseContent = [
    {
        img: "/images/email.svg",
        desc: "Các bài đăng nhận thức về phòng chống lừa dảo không gian mạng",
    },
    {
        img: "/images/email.svg",
        desc: "Các bài đăng các dấu hiệu lừa đảo không gian mạng",
    },
    {
        img: "/images/email.svg",
        desc: "Tính năng check độ an toàn của trang Web trong qua URL",
    },
    {
        img: "/images/email.svg",
        desc: "Tính năng check độ an toàn của tài khoản ngân hàng trong qua số tài khoản",
    },
    {
        img: "/images/email.svg",
        desc: "Cung cấp các gói premium về các khóa học phòng chống lừa đảo đến từ các chuyên gia an toàn thông tin",
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
    const product4Ref = useRef<HTMLParagraphElement>(null);
    const h1Ref = useRef<HTMLHeadingElement>(null); // Thêm ref cho <h1>

    const [currentImage1, setCurrentImage1] = useState<string | null>(null);
    const [currentImage2, setCurrentImage2] = useState<string | null>(null);
    const [fade1, setFade1] = useState(false);
    const [fade2, setFade2] = useState(false);
    const [hideImages, setHideImages] = useState(false); // Trạng thái để ẩn/hiện ảnh

    const updateImage = (newImage: string, imageIndex: number) => {
        if (imageIndex === 1) {
            setFade1(false);
            setTimeout(() => {
                setCurrentImage1(newImage);
                setFade1(true);
            }, 300);
        } else if (imageIndex === 2) {
            setFade2(false);
            setTimeout(() => {
                setCurrentImage2(newImage);
                setFade2(true);
            }, 300);
        }
    };

    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Khi phần tử được nhìn thấy
                    if (entry.target === product1Ref.current) {
                        updateImage("/images/launching.png", 1);
                        updateImage("/images/home.png", 2);
                    } else if (entry.target === product2Ref.current) {
                        updateImage("/images/awareness.png", 1);
                        updateImage("/images/signOfScam.png", 2);
                    } else if (entry.target === product3Ref.current) {
                        updateImage("/images/bankVerify.png", 1);
                        updateImage("/images/webVerify.png", 2);
                    } else if (entry.target === product4Ref.current) {
                        updateImage("/images/listCourse.png", 1);
                        updateImage("/images/curriculum.png", 2);
                    }

                    // Kiểm tra nếu h1 xuất hiện trong viewport
                    if (
                        entry.target === h1Ref.current &&
                        entry.isIntersecting
                    ) {
                        setHideImages(true); // Ẩn ảnh khi h1 xuất hiện
                    } else {
                        setHideImages(false); // Hiện lại ảnh khi h1 không còn trong viewport
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            root: null, // Theo dõi trong viewport
            threshold: 0.1, // Kích hoạt khi 10% phần tử xuất hiện
        });

        // Quan sát các phần tử
        if (product1Ref.current) observer.observe(product1Ref.current);
        if (product2Ref.current) observer.observe(product2Ref.current);
        if (product3Ref.current) observer.observe(product3Ref.current);
        if (product4Ref.current) observer.observe(product4Ref.current);
        if (h1Ref.current) observer.observe(h1Ref.current); // Quan sát <h1>

        return () => {
            observer.disconnect(); // Dừng quan sát khi component bị unmount
        };
    }, []);
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

    const renderListHome = () => {
        return listHomeContent.map((info, index) => (
            <div key={index} className="w-[90%]">
                <div className="flex mt-5">
                    <Image src={info.img} alt="icon" width={50} height={50} />
                    <p className="">{info.desc}</p>
                </div>
            </div>
        ));
    };

    const renderListAwareness = () => {
        return listAwarenessContent.map((info, index) => (
            <div key={index} className="w-[90%]">
                <div className="flex mt-5">
                    <Image src={info.img} alt="icon" width={50} height={50} />
                    <p className="">{info.desc}</p>
                </div>
            </div>
        ));
    };

    const renderListSign = () => {
        return listSignContent.map((info, index) => (
            <div key={index} className="w-[90%]">
                <div className="flex mt-5">
                    <Image src={info.img} alt="icon" width={50} height={50} />
                    <p className="">{info.desc}</p>
                </div>
            </div>
        ));
    };

    const renderListCourse = () => {
        return listCourseContent.map((info, index) => (
            <div key={index} className="w-[90%]">
                <div className="flex mt-5">
                    <Image src={info.img} alt="icon" width={50} height={50} />
                    <p className="">{info.desc}</p>
                </div>
            </div>
        ));
    };

    const renderListWarning = () => {
        return listWarning.map((info, index) => (
            <WarningItem key={index} info={info} index={index} />
        ));
    };

    const RenderListQuestion = () => {
        const [openIndices, setOpenIndices] = useState<boolean[]>(
            listWarning.map(() => false) // Khởi tạo mảng trạng thái
        );

        const toggleIndex = (index: number) => {
            setOpenIndices(
                (prev) =>
                    prev.map((isOpen, i) => (i === index ? !isOpen : isOpen)) // Đảo trạng thái mục được nhấn
            );
        };

        return listWarning.map((info, index) => (
            <Disclosure
                as="div"
                className="p-6 flex flex-col bg-white rounded-xl shadow-sm mt-3"
                key={index}
            >
                {({}) => (
                    <>
                        <Disclosure.Button
                            onClick={() => toggleIndex(index)} // Thay đổi trạng thái của mục
                            className="w-full flex items-start justify-between"
                        >
                            {/* Left Content */}
                            <div>
                                <div className="!text-justify">
                                    {info.title}
                                </div>

                                <motion.div
                                    className="mt-2 text-gray-700 text-sm"
                                    initial={{ opacity: 1, maxHeight: 0 }} // Ban đầu, không hiển thị
                                    animate={{
                                        opacity: openIndices[index] ? 1 : 0,
                                        maxHeight: openIndices[index] ? 700 : 0, // Điều chỉnh chiều cao khi mở/đóng
                                    }}
                                    exit={{
                                        opacity: 0,
                                        maxHeight: 0, // Khi rời khỏi, ẩn lại
                                    }}
                                    transition={{
                                        opacity: { duration: 0.3 }, // Thời gian chuyển động opacity
                                        maxHeight: {
                                            duration: openIndices[index]
                                                ? 0.7
                                                : 0.5,
                                        }, // Mở trong 0.7s, đóng trong 0.5s
                                    }}
                                >
                                    {info.desc}
                                </motion.div>
                            </div>
                            {/* Icon */}
                            <div className="ml-4">
                                {openIndices[index] ? (
                                    <XMarkIcon className="w-8 h-8 text-red-500 border-2-red bg-red-100 rounded-full" />
                                ) : (
                                    <PlusIcon className="w-8 h-8 text-red-500 border-2-red bg-red-100 rounded-full" />
                                )}
                            </div>
                        </Disclosure.Button>
                    </>
                )}
            </Disclosure>
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
                <h1
                    ref={h1Ref} // Thêm ref cho phần tử <h1>
                    className="text-[3.1rem] leading-[60px] font-bold text-center"
                >
                    antiSCM cung cấp các thông tin và
                    <br /> khóa học về an ninh mạng
                </h1>

                {/* Content*/}
                <div>
                    <div className="mt-[100px] flex p-[7%]">
                        <div className="flex-1">
                            {/* Content 1 */}
                            <div className="w-[90%]">
                                <h1 className="text-[3rem] font-bold">
                                    Giới thiệu về antiSCM
                                </h1>
                                <h2 className="mt-10">
                                    antiSCM cung cấp giao diện thân thiện đến
                                    người dùng
                                </h2>
                                <p className="mt-7">
                                    antiScm giúp người dùng nhận thức về các dấu
                                    hiệu lừa đảo thông qua các bài đăng và các
                                    khóa học được cung cấp bởi các chuyên gia
                                    của antiSCM
                                </p>

                                <div className="mt-5">
                                    <h2 ref={product1Ref}>
                                        antiSCM cung cấp các tính năng hấp dẫn
                                    </h2>
                                    {renderListHome()}
                                </div>
                            </div>

                            {/* Content 2 */}
                            <div className="mt-[300px] w-[90%]">
                                <h1 className="text-[3rem] font-bold leading-[55px]">
                                    Nhận thức và các dấu hiệu về lừa đảo không
                                    gian mạng
                                </h1>
                                <p>
                                    Hiện nay lừa đảo qua không gian mạng đang
                                    ngày càng phổ biến và phức tạp. Chính vì thế
                                    antiSCM đem đến cho người dùng các bài đăng
                                    về nhận thức và dấu hiệu nhận biết về các
                                    cuộc tấn công mạng đề người dùng có được các
                                    kiến thức để phòng tránh các cuộc lừa đảo
                                    qua không gian mạng.
                                </p>
                                <div>
                                    <h2 className="text-[1.7rem] font-medium">
                                        Cung cấp các bài đăng về nhận thức phòng
                                        chống lừa đảo
                                    </h2>

                                    <div className="">
                                        <h3>20+</h3>
                                        <h4>Hơn 20 bài đăng</h4>
                                        <p>
                                            Chúng tôi cung cấp hơn 20 bài dăng
                                            để người dân có thể nhận thức được
                                            các cuộc lừa đảo không gian mạng
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h2
                                        className="text-[1.7rem] font-medium"
                                        ref={product2Ref}
                                    >
                                        Cung cấp các bài đăng về các dấu hiệu
                                        lừa đảo
                                    </h2>

                                    <div className="">
                                        <h3>30+</h3>
                                        <h4>Hơn 30 các dấu hiệu</h4>
                                        <p>
                                            Chúng tôi cung cấp hơn 30 các dấu
                                            hiệu giúp người dùng dễ dàng phòng
                                            tránh khỏi các cuộc lừa đảo không
                                            gian mạng
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Content 3 */}
                            <div className="mt-[300px] w-[90%]">
                                <h1 className="text-[3rem] font-bold leading-[55px]">
                                    Cung các tính năng kiểm thử đặc biệt
                                </h1>
                                {/* Awareness */}
                                <div>
                                    <h2>
                                        Kiểm tra độ an toàn của trang web thông
                                        qua URL
                                    </h2>
                                    <div className="">
                                        {renderListAwareness()}
                                    </div>
                                </div>

                                {/* Sign  */}
                                <div ref={product3Ref}>
                                    <h2>
                                        Kiểm tra độ an toàn của ngân hàng thông
                                        qua tài khoản ngân hàng
                                    </h2>
                                    <div className="">{renderListSign()}</div>
                                </div>
                            </div>

                            {/* Content 4 */}
                            <div className="mt-[300px] w-[90%]">
                                <h1 className="text-[3rem] font-bold leading-[55px]">
                                    Cung cấp các khóa học khi đăng kí gói
                                    premium
                                </h1>
                                <p>
                                    Bên cạnh các bài đăng về dấu hiệu nhận biết
                                    các cuộc tấn công mạng. Ứng dụng antiSCM còn
                                    cung cấp các gói premium với các bài giảng
                                    hấp dẫn, dễ tiếp cận cùng với chất lượng đến
                                    từ các chuyên gia trong lĩnh vực.
                                </p>
                                <h2 className="" ref={product4Ref}>
                                    Những lợi ích khi đăng kí gói premium của
                                    antiSCM
                                </h2>
                                <div>{renderListCourse()}</div>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            {/* Sticky Image */}
                            <div className="sticky top-[100px]">
                                <div className=" flex gap-5">
                                    {/* Image 1 */}
                                    <div
                                        className={`transition-opacity duration-500 ${
                                            hideImages
                                                ? "opacity-0" // Ẩn khi hideImages là true
                                                : fade1
                                                ? "opacity-100"
                                                : "opacity-50"
                                        }`}
                                    >
                                        {currentImage1 && (
                                            <Image
                                                src={currentImage1}
                                                alt="icon 1"
                                                width={400}
                                                height={500}
                                                className="object-cover w-full h-[600px] ml-[5%]"
                                            />
                                        )}
                                    </div>

                                    <div
                                        className={`transition-opacity duration-500 ${
                                            hideImages
                                                ? "opacity-0"
                                                : fade2
                                                ? "opacity-100"
                                                : "opacity-50"
                                        }`}
                                    >
                                        {currentImage2 && (
                                            <Image
                                                src={currentImage2}
                                                alt="icon 2"
                                                width={400}
                                                height={500}
                                                className="object-cover w-full h-[600px] ml-[5%]"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logo and Sologan */}
            <div className="mx-[10%] mt-[100px] relative">
                <div>
                    <Image
                        src="/images/dot.png"
                        alt="icon 1"
                        width={400}
                        height={500}
                        className="object-cover w-[27%] h-[400px] ml-auto"
                    />
                </div>
                <div className="w-[90%] h-[200px] bg-white absolute bottom-[25%] left flex justify-center items-center shadow-lg rounded-[20px]">
                    <Image
                        src="/images/searchBug.svg"
                        alt="icon 1"
                        width={400}
                        height={500}
                        className="object-cover w-[20%] h-[220px] absolute bottom-[50%] left-10"
                    />
                    <div className="flex items-center ml-[20%]">
                        <div>
                            <h1 className="text-[2.5rem] font-bold">
                                antiSCM mobile app
                            </h1>
                            <div className="flex gap-3 mt-[20px]">
                                <p>hellklaskdlaksdlkas</p>
                                <p>hellklaskdlaksdlkas</p>
                            </div>
                        </div>
                        <div className="flex-[1/2] ml-[100px]">
                            <Button className="bg-[#036f98] px-[50px] py-[25px] rounded-full">
                                Tham gia ngay
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Question and Answer */}
            <div className="relative h-screen mt-[100px]">
                <h1 className="text-[3.1rem] leading-[60px] font-bold text-center">
                    Answers to Your Questions
                </h1>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="space-y-4">{RenderListQuestion()}</div>
                </div>
            </div>
        </div>
    );
}

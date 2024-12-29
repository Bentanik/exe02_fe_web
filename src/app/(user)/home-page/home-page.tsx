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
        img: "/images/Security.svg",
        title: "Tránh xa khỏi những cuộc tấn công mạng",
        desc: "Bảo vệ bản thân khỏi các mối đe dọa trực tuyến bằng cách nhận diện và ngăn chặn các cuộc tấn công.",
    },
    {
        img: "/images/search.svg",
        title: "Các khóa học chất lượng từ chuyên gia",
        desc: "Học từ các chuyên gia để nâng cao kỹ năng bảo mật và phòng chống lừa đảo.",
    },
    {
        img: "/images/surveillance.svg",
        title: "Dấu hiệu nhận biết các cuộc lừa đảo",
        desc: "Nhận diện các dấu hiệu của cuộc lừa đảo để tránh rủi ro và bảo vệ tài khoản cá nhân.",
    },
    {
        img: "/images/neuralInterface.svg",
        title: "Nâng cao nhận thức người dùng",
        desc: "Giúp người dùng hiểu và phòng tránh các mối nguy hiểm trên mạng.",
    },
];

const listWarning = [
    {
        percent: 35,
        title: "Cuộc tấn công lừa đảo",
        desc: "Lừa đảo qua email là một trò lừa đảo mà kẻ tấn công giả mạo một thực thể đáng tin cậy để lừa người dùng cung cấp thông tin nhạy cảm qua các email hoặc tin nhắn giả mạo.",
    },
    {
        percent: 25,
        title: "Virus và Phần Mềm Độc Hại",
        desc: "Phần mềm độc hại, bao gồm virus, xâm nhập vào hệ thống mà không có sự cho phép của người dùng, làm hỏng dữ liệu, đánh cắp thông tin cá nhân và yêu cầu tiền chuộc để khôi phục.",
    },
    {
        percent: 15,
        title: "Cuộc tấn công DDoS",
        desc: "Một cuộc tấn công DDoS là một cuộc tấn công mạng trong đó một botnet lớn gửi lưu lượng truy cập đến một trang web hoặc dịch vụ mạng, gây thiệt hại tài chính và uy tín cho các doanh nghiệp.",
    },
    {
        percent: 20,
        title: "Các trang web không an toàn",
        desc: "Mất thông tin cá nhân xảy ra khi người dùng nhập dữ liệu nhạy cảm vào các trang web không an toàn, có thể thiếu mã hóa SSL hoặc có lỗ hổng bảo mật, cho phép tin tặc đánh cắp dữ liệu của người dùng.",
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
        img: "/images/shielf.svg",
        desc: "Các bài đăng nhận thức về phòng chống lừa dảo không gian mạng",
    },
    {
        img: "/images/shielf.svg",
        desc: "Các bài đăng các dấu hiệu lừa đảo không gian mạng",
    },
    {
        img: "/images/shielf.svg",
        desc: "Tính năng check độ an toàn của trang Web trong qua URL",
    },
    {
        img: "/images/shielf.svg",
        desc: "Tính năng check độ an toàn của tài khoản ngân hàng trong qua số tài khoản",
    },
    {
        img: "/images/shielf.svg",
        desc: "Cung cấp các gói premium về các khóa học phòng chống lừa đảo đến từ các chuyên gia an toàn thông tin",
    },
];

const listAwarenessContent = [
    {
        img: "/images/shielf.svg",
        desc: "Giúp người dùng phát hiện nhanh chóng những trang web nguy hiểm",
    },
    {
        img: "/images/shielf.svg",
        desc: "Tránh được các cuộc tấn công từ các trang web lạ",
    },
    {
        img: "/images/shielf.svg",
        desc: "Bảo vệ an toàn dữ liệu",
    },
];

const listSignContent = [
    {
        img: "/images/shielf.svg",
        desc: "Kiểm tra được tính xác thực của tài khoản",
    },
    {
        img: "/images/shielf.svg",
        desc: "Ngăn chặn lừa đảo qua tài khoản ngân hàng giả.",
    },
];

const listCourseContent = [
    {
        img: "/images/shielf.svg",
        desc: "Cung cấp giao diện bài học dễ dàng cho người dùng",
    },
    {
        img: "/images/shielf.svg",
        desc: "Học tập và trao đổi với các chuyên gia",
    },
    {
        img: "/images/shielf.svg",
        desc: "Khung chương trình phù hợp cho người mới bắt đầu",
    },
    {
        img: "/images/shielf.svg",
        desc: "Cấp chứng chỉ sau khi hoàn thành khóa học",
    },
];

const listQuestion = [
    {
        question: "Làm sao nhận biết tài khoản ngân hàng giả mạo?",
        answer: "Bạn cần kiểm tra xem tên tài khoản ngân hàng có khớp với thông tin người bán hoặc công ty không. Tránh chuyển tiền đến tài khoản cá nhân nếu không có giấy tờ xác minh rõ ràng. Ngoài ra, hãy cảnh giác với các tài khoản yêu cầu giao dịch nhanh hoặc giảm giá quá mức.",
    },
    {
        question: "Tôi cần làm gì nếu bị lừa đảo?",
        answer: "Hãy liên hệ ngay với ngân hàng của bạn để khóa giao dịch. Sau đó, thu thập bằng chứng như hóa đơn, ảnh giao dịch, hoặc tin nhắn, và trình báo vụ việc cho cơ quan công an để xử lý kịp thời.",
    },
    {
        question: "Làm sao kiểm tra thông tin người nhận tiền?",
        answer: "Yêu cầu người nhận cung cấp giấy tờ như CMND, giấy phép kinh doanh hoặc hợp đồng liên quan. Bạn cũng có thể tra cứu số tài khoản trên các công cụ trực tuyến để xem có báo cáo lừa đảo nào không.",
    },
    {
        question: "Trang web có đảm bảo giao dịch an toàn không?",
        answer: "Chúng tôi sử dụng các cổng thanh toán bảo mật và tài khoản ngân hàng công ty đã xác thực. Không khuyến khích giao dịch qua tài khoản cá nhân. Nếu gặp bất thường, hãy báo ngay cho bộ phận hỗ trợ.",
    },
    {
        question: "Làm sao biết thông tin khóa học đáng tin cậy?",
        answer: "Kiểm tra hồ sơ giảng viên, nội dung mô tả khóa học và đánh giá từ học viên khác. Ưu tiên khóa học có thông tin rõ ràng, minh bạch. Tránh các khóa học giảm giá bất thường hoặc không cung cấp đầy đủ thông tin.",
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
        <div ref={ref} className="rounded-xl bg-white w-[35%] shadow-lg">
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
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const h2Ref = useRef<HTMLDivElement>(null); // Ref mới

    const [currentImage1, setCurrentImage1] = useState<string | null>(null);
    const [currentImage2, setCurrentImage2] = useState<string | null>(null);
    const [fade1, setFade1] = useState(false);
    const [fade2, setFade2] = useState(false);
    const [hideImages, setHideImages] = useState(false);

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

                    if (
                        entry.target === h1Ref.current ||
                        entry.target === h2Ref.current // Kiểm tra ref mới
                    ) {
                        setHideImages(true);
                    }
                } else {
                    if (
                        entry.target === h1Ref.current ||
                        entry.target === h2Ref.current // Kiểm tra ref mới
                    ) {
                        setHideImages(false);
                    }
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
        if (product4Ref.current) observer.observe(product4Ref.current);
        if (h1Ref.current) observer.observe(h1Ref.current);
        if (h2Ref.current) observer.observe(h2Ref.current); // Quan sát phần tử mới

        return () => {
            observer.disconnect();
        };
    }, []);

    const renderListInfo = () => {
        return listInfo.map((info, index) => (
            <div
                key={index}
                className=" rounded-xl border border-gray-500 relative z-10"
            >
                <div className="p-5">
                    <Image src={info.img} alt="icon" width={90} height={90} />
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
                <div className="flex mt-4 items-center gap-2">
                    <Image
                        src={info.img}
                        alt="icon"
                        width={50}
                        height={30}
                        className="w-[30px] h-[30px]"
                    />
                    <p className="font-medium">{info.desc}</p>
                </div>
            </div>
        ));
    };

    const renderListAwareness = () => {
        return listAwarenessContent.map((info, index) => (
            <div key={index} className="w-[90%]">
                <div className="flex mt-4 items-center gap-2">
                    <Image
                        src={info.img}
                        alt="icon"
                        width={50}
                        height={30}
                        className="w-[30px] h-[30px]"
                    />
                    <p className="font-medium">{info.desc}</p>
                </div>
            </div>
        ));
    };

    const renderListSign = () => {
        return listSignContent.map((info, index) => (
            <div key={index} className="w-[90%]">
                <div className="flex mt-4 items-center gap-2">
                    <Image
                        src={info.img}
                        alt="icon"
                        width={50}
                        height={30}
                        className="w-[30px] h-[30px]"
                    />
                    <p className="font-medium">{info.desc}</p>
                </div>
            </div>
        ));
    };

    const renderListCourse = () => {
        return listCourseContent.map((info, index) => (
            <div key={index} className="w-[90%]">
                <div className="flex mt-4 items-center gap-2">
                    <Image
                        src={info.img}
                        alt="icon"
                        width={50}
                        height={30}
                        className="w-[30px] h-[30px]"
                    />
                    <p className="font-medium">{info.desc}</p>
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
            listQuestion.map(() => false)
        );

        const toggleIndex = (index: number) => {
            setOpenIndices(
                (prev) =>
                    prev.map((isOpen, i) => (i === index ? !isOpen : isOpen)) // Đảo trạng thái mục được nhấn
            );
        };

        return listQuestion.map((info, index) => (
            <Disclosure
                as="div"
                className="p-6 flex flex-col bg-white rounded-xl shadow-lg mt-3"
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
                                <div
                                    className={`!text-justify text-[1.1rem] font-semibold ${
                                        openIndices[index]
                                            ? "text-[#13759d]"
                                            : "text-black"
                                    }`}
                                >
                                    {info.question}
                                </div>

                                <motion.div
                                    className="mt-2 text-gray-700 text-sm !text-justify"
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
                                    {info.answer}
                                </motion.div>
                            </div>
                            {/* Icon */}
                            <div className="ml-4">
                                {openIndices[index] ? (
                                    <XMarkIcon className="w-8 h-8 text-[#13759d] border-2-red bg-[#86ddff5e] rounded-full" />
                                ) : (
                                    <PlusIcon className="w-8 h-8 text-[#13759d] border-2-red bg-[#86ddff5e] rounded-full" />
                                )}
                            </div>
                        </Disclosure.Button>
                    </>
                )}
            </Disclosure>
        ));
    };

    //Animation for block introduce mobile app
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    //Animation for block warning
    const divVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div className="w-full bg-[#f6f6f6]">
            {/* Hero Content */}
            <div className="pt-[10%] pl-[10%] bg-[black] relative rounded-b-[50px]">
                <div className="flex w-full">
                    {/* Left Hero */}
                    <div className="flex-1 mt-[100px]">
                        <h1 className="text-white text-[3.1rem] leading-[60px] font-bold">
                            Giữ An Toàn Trực Tuyến, Bảo Vệ Cuộc Sống Hàng Ngày
                            Của Bạn
                        </h1>
                        <div className="relative pl-6 mt-5">
                            <p className="text-white w-[85%] opacity-90">
                                Với cách tiếp cận chủ động của chúng tôi đối với
                                an ninh mạng, các chuyên gia của chúng tôi giúp
                                xác định và ngăn chặn lừa đảo, đảm bảo an toàn
                                trực tuyến của bạn và bảo vệ bạn khỏi các mối đe
                                dọa mạng.
                            </p>
                        </div>
                        <Link href="/donation">
                            <Button className="my-[50px] text-white bg-[#06c4d9] hover:bg-[#06c4d9] hover:opacity-90 px-[50px] py-[25px] rounded-full text-[1.1rem] font-semibold">
                                Tham khảo các khóa học
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
            <div className="mt-[150px] pl-[50px] relative">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    variants={variants}
                >
                    <h1 className=" text-[3.1rem] leading-[60px] font-bold text-center">
                        Các vấn đề lừa đảo không gian mạng
                        <br />
                        nghiêm trọng hiện nay
                    </h1>
                </motion.div>

                {/* Content */}
                <div className="mt-[100px]">
                    <motion.div
                        className="flex flex-wrap gap-4 absolute top-[300px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        variants={divVariants}
                    >
                        {renderListWarning()}
                    </motion.div>
                    <img
                        src="/images/bg1.jpg"
                        alt="bg content 1"
                        className="ml-auto w-[40%] h-[700px] object-cover rounded-l-3xl"
                    />
                </div>
            </div>

            {/* Solution content*/}
            <div className="mt-[150px]">
                <div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        variants={variants}
                    >
                        <h1 className="text-[3.1rem] leading-[60px] font-bold text-center">
                            Làm thế nào để phòng ngừa
                            <br /> và bảo vệ
                        </h1>
                    </motion.div>

                    <div className="mt-[30px] px-[75px] relative">
                        <div className="">
                            <motion.div
                                className="flex justify-between"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                variants={variants}
                            >
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
                            </motion.div>
                        </div>
                        <div
                            className="absolute top-[23%] left-[11%]"
                            ref={h1Ref}
                        >
                            <motion.div
                                className="flex gap-[20px]"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                variants={variants}
                            >
                                {renderListProtect()}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Introduce mobile app */}
            <div className="mt-[150px]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    variants={variants}
                >
                    <h1 className="text-[3.1rem] leading-[60px] font-bold text-center">
                        antiSCM cung cấp các thông tin và
                        <br /> khóa học về an ninh mạng
                    </h1>
                </motion.div>

                {/* Content*/}
                <div>
                    <div className="mt-[50px] flex p-[7%]">
                        <div className="flex-1">
                            {/* Content 1 */}
                            <motion.div
                                className="w-[90%]"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                variants={variants}
                            >
                                <h1
                                    className="text-[3rem] font-bold"
                                    ref={product1Ref}
                                >
                                    Giới thiệu về antiSCM
                                </h1>
                                <h2 className="mt-5 text-[1.2rem] font-semibold">
                                    antiSCM cung cấp giao diện thân thiện đến
                                    người dùng
                                </h2>
                                <p className="mt-5 text-[#4f4f4ece]">
                                    antiScm giúp người dùng nhận thức về các dấu
                                    hiệu lừa đảo thông qua các bài đăng và các
                                    khóa học được cung cấp bởi các chuyên gia
                                    của antiSCM. Bên cạnh đó ứng dụng còn cung
                                    cấp các tính năng hấp dẫn
                                </p>

                                <div className="mt-7">{renderListHome()}</div>
                            </motion.div>

                            {/* Content 2 */}
                            <motion.div
                                className="mt-[280px] w-[90%]"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                variants={variants}
                            >
                                <h1
                                    className="text-[3rem] font-bold leading-[55px]"
                                    ref={product2Ref}
                                >
                                    Nhận thức và các dấu hiệu về lừa đảo không
                                    gian mạng
                                </h1>
                                <p className="text-[#4f4f4ece] mt-5">
                                    Hiện nay lừa đảo qua không gian mạng đang
                                    ngày càng phổ biến và phức tạp. Chính vì thế
                                    antiSCM đem đến cho người dùng các bài đăng
                                    về nhận thức và dấu hiệu nhận biết về các
                                    cuộc tấn công mạng để người dùng có được các
                                    kiến thức để phòng tránh các cuộc lừa đảo
                                    qua không gian mạng.
                                </p>

                                <div className="flex gap-5">
                                    <div className="items-center gap-5 mt-5 flex-1">
                                        <h3 className="text-[3rem] font-bold text-[#13759d]">
                                            20+
                                        </h3>
                                        <div className="w-[95%]">
                                            <h4 className="text-[1.5rem]">
                                                Hơn 20 bài đăng
                                            </h4>
                                            <p className="mt-5">
                                                Chúng tôi cung cấp hơn 20 bài
                                                đăng để người dân có thể nhận
                                                thức được các cuộc lừa đảo không
                                                gian mạng.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="items-center gap-5 mt-5 flex-1">
                                        <h3 className="text-[3rem] font-bold text-[#13759d]">
                                            30+
                                        </h3>
                                        <div className="w-[95%]">
                                            <h4 className="text-[1.5rem]">
                                                Hơn 30 các dấu hiệu
                                            </h4>
                                            <p className="mt-5">
                                                Chúng tôi cung cấp hơn 30 các
                                                dấu hiệu giúp người dùng dễ dàng
                                                phòng tránh khỏi các cuộc lừa
                                                đảo không gian mạng.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Content 3 */}
                            <motion.div
                                className="mt-[280px] w-[90%]"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                variants={variants}
                            >
                                <h1
                                    className="text-[3rem] font-bold leading-[55px]"
                                    ref={product3Ref}
                                >
                                    Cung các tính năng kiểm thử đặc biệt
                                </h1>

                                {/* Awareness */}
                                <div>
                                    <h2 className="mt-5 text-[1.2rem] font-semibold">
                                        Kiểm tra độ an toàn của trang web thông
                                        qua URL
                                    </h2>
                                    <div>{renderListAwareness()}</div>
                                </div>

                                {/* Sign */}
                                <div>
                                    <h2 className="mt-5 text-[1.2rem] font-semibold">
                                        Kiểm tra độ an toàn của ngân hàng thông
                                        qua tài khoản ngân hàng
                                    </h2>
                                    <div>{renderListSign()}</div>
                                </div>
                            </motion.div>

                            {/* Content 4 */}
                            <motion.div
                                className="mt-[280px] w-[90%]"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                variants={variants}
                            >
                                <h1
                                    className="text-[3rem] font-bold leading-[55px]"
                                    ref={product4Ref}
                                >
                                    Cung cấp các khóa học khi đăng kí gói
                                    premium
                                </h1>
                                <p className="text-[#4f4f4ece] mt-5">
                                    Bên cạnh các bài đăng về dấu hiệu nhận biết
                                    các cuộc tấn công mạng. Ứng dụng antiSCM còn
                                    cung cấp các gói premium với các bài giảng
                                    hấp dẫn, dễ tiếp cận cùng với chất lượng đến
                                    từ các chuyên gia trong lĩnh vực.
                                </p>
                                <h2 className="mt-5 text-[1.2rem] font-semibold">
                                    Những lợi ích khi đăng kí gói premium của
                                    antiSCM
                                </h2>
                                <div className="mt-7">{renderListCourse()}</div>
                                <div className="mt-[50px]">
                                    <Button className="bg-[#036f98] px-[50px] py-[25px] rounded-full text-[1.2rem] hover:opacity-90">
                                        Tham gia ngay
                                    </Button>
                                </div>
                            </motion.div>
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
                <motion.div
                    className="w-full h-[224px] bg-white absolute bottom-[25%] right-[5%] flex justify-center items-center shadow-lg rounded-[20px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    variants={divVariants}
                >
                    <Image
                        src="/images/searchBug.svg"
                        alt="icon 1"
                        width={400}
                        height={500}
                        className="object-cover w-[20%] h-[240px] absolute bottom-[30%] left-10"
                    />
                    <div className="flex items-center ml-[20%]">
                        <div>
                            <h1 className="text-[2.5rem] font-bold" ref={h2Ref}>
                                antiSCM mobile app
                            </h1>
                            <div className="flex gap-3 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-[30px] h-[30px]"
                                >
                                    <path
                                        fill="#039fb0"
                                        d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"
                                    />
                                </svg>
                                <p className="text-[1.1rem]">
                                    Trust less, verify more
                                </p>
                            </div>
                        </div>
                        <div className="flex-[1/2] ml-[150px]">
                            <Button className="bg-[#036f98] px-[50px] py-[25px] rounded-full text-[1.2rem] hover:opacity-90">
                                Tham gia ngay
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Question and Answer */}
            <div className="flex flex-col items-center justify-center min-h-screen px-4">
                <div className="w-full max-w-3xl space-y-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        variants={variants}
                    >
                        <h1 className="text-[3.1rem] leading-[60px] font-bold text-center">
                            Answers to Your Questions
                        </h1>
                    </motion.div>

                    <div>{RenderListQuestion()}</div>
                </div>
            </div>
        </div>
    );
}

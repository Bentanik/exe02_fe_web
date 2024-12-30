"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import anime from "animejs";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const listInfo = [
    {
        percent: 35,
        title: "Cuộc tấn công lừa đảo",
    },
    {
        percent: 25,
        title: "Virus và Phần Mềm Độc Hại",
    },
    {
        percent: 15,
        title: "Cuộc tấn công DDoS",
    },
    {
        percent: 20,
        title: "Các trang web không an toàn",
    },
];

function InfoItem({
    info,
    index,
}: {
    info: (typeof listInfo)[number];
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
        <div ref={ref} className="rounded-xl w-[48%]">
            <div className="p-5">
                <div className="flex items-center justify-between">
                    <h2 className="text-[3rem] font-bold text-[#13759d]">
                        <span className={`percent-${index}`}>0</span>+
                    </h2>
                </div>
                <h3 className="text-[1.8rem] font-semibold">{info.title}</h3>
            </div>
        </div>
    );
}

export default function AboutUs() {
    const renderListInfo = () => {
        return listInfo.map((info, index) => (
            <InfoItem key={index} info={info} index={index} />
        ));
    };

    //Animation for block introduce mobile app
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };
    const textRef = useRef<HTMLDivElement>(null);
    const [gradientHeight, setGradientHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (textRef.current) {
                const rect = textRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Tính phần trăm chiều cao văn bản hiển thị
                const visibleHeight = Math.min(
                    Math.max(windowHeight - rect.top, 0),
                    rect.height
                );
                const percentage = visibleHeight / rect.height;

                // Cập nhật chiều cao của gradient
                setGradientHeight(percentage * 100);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Gọi để render ban đầu

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="w-full bg-[#f6f6f6] ">
            {/* Hero Content */}
            <div className="pt-[10%]  bg-[black] px-[5%] rounded-b-[50px]">
                <div className="w-full">
                    {/* Left Hero */}
                    <div className="w-[70%] mb-[400px] mt-[80px] ">
                        <div className="p-[1px] bg-white rounded-full drop-shadow-[0_0_6px_#87dcff] inline-block">
                            <div className="rounded-full border-[1px] border-[#87dcff] bg-white shadow-[inset_0_0_4px_#87dcff] p-2">
                                <div className="text-[#13759d]">
                                    Nhiệm vụ của chúng tôi
                                </div>
                            </div>
                        </div>
                        <div className="relative mt-5">
                            <span className="absolute left-[-20px] top-0 h-full w-1 bg-[#06c4d9]"></span>
                            <h1 className="text-white text-[3.3rem] leading-[60px] font-bold">
                                Khám phá sứ mệnh và câu chuyện đằng sau công ty
                                chúng tôi.
                            </h1>
                        </div>
                    </div>
                    {/* Right Hero Content */}
                    <div className="flex-1 text-white relative">
                        {/* Background Blur Image */}
                        <img
                            src="/images/blur.png"
                            alt="blur"
                            className="absolute top-[50px] right-20 w-full h-full opacity-40 z-0"
                        />
                        {/* Info Boxes */}
                        <div className="grid grid-cols-2 gap-5 w-[80%] relative z-10"></div>
                    </div>
                </div>

                <div className="absolute top-[500px]">
                    <div className="flex relative mb-10">
                        <div className="flex-1">
                            <Image
                                src="/images/about_bg.png"
                                alt="icon"
                                width={600}
                                height={350}
                                className="object-cover h-[800px] rounded-3xl drop-shadow-[0_5px_3px_#87dcff]"
                            />
                        </div>
                        <div className="flex-1 p-5">
                            <div className="bg-[white] p-5 mt-10 w-[80%] rounded-3xl shadow-xl">
                                {/* content 1 */}
                                <div className="flex items-center gap-3 relative">
                                    <div className=" p-5 rounded-full border-[1px] border-[#87dcff] bg-[#87dbff35]">
                                        <Image
                                            src="/images/shielf.svg"
                                            alt="icon"
                                            width={600}
                                            height={350}
                                            className="object-cover w-10 h-10 rounded-3xl"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-[1.3rem]">
                                            Based in Detroit, USA, Serving
                                            Globally
                                        </h2>
                                        <p className="text-[0.8rem] text-[#6b6b6b]">
                                            Global reach, with a local touch.
                                        </p>
                                        <span className="absolute top-[100px] w-[80%] h-[1px] bg-[#06c4d9]"></span>
                                    </div>
                                </div>

                                {/* content 1 */}
                                <div className="flex items-center gap-3 relative mt-10">
                                    <div className=" p-5 rounded-full border-[1px] border-[#87dcff] bg-[#87dbff35]">
                                        <Image
                                            src="/images/shielf.svg"
                                            alt="icon"
                                            width={600}
                                            height={350}
                                            className="object-cover w-10 h-10 rounded-3xl"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-[1.3rem]">
                                            Based in Detroit, USA, Serving
                                            Globally
                                        </h2>
                                        <p className="text-[0.8rem] text-[#6b6b6b]">
                                            Global reach, with a local touch.
                                        </p>
                                        <span className="absolute top-[100px] w-[80%] h-[1px] bg-[#06c4d9]"></span>
                                    </div>
                                </div>

                                {/* content 1 */}
                                <div className="flex items-center gap-3 relative mt-10">
                                    <div className=" p-5 rounded-full border-[1px] border-[#87dcff] bg-[#87dbff35]">
                                        <Image
                                            src="/images/shielf.svg"
                                            alt="icon"
                                            width={600}
                                            height={350}
                                            className="object-cover w-10 h-10 rounded-3xl"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-[1.3rem]">
                                            Based in Detroit, USA, Serving
                                            Globally
                                        </h2>
                                        <p className="text-[0.8rem] text-[#6b6b6b]">
                                            Global reach, with a local touch.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 w-[80%]">
                                <h3 className="text-[1.3rem] font-semibold">
                                    Kết hợp một loạt kiến ​​thức chuyên môn về
                                    phòng thủ mạng, antiSCM được hình thành bởi
                                    một nhóm chuyên gia dày dạn kinh nghiệm.
                                </h3>
                                <p className="mt-6 text-[#4c4b4b91]">
                                    Xác định được khoảng trống trên thị trường
                                    dành cho các giải pháp an ninh mạng nâng
                                    cao, nhóm này đã thành lập antiSCM. Họ đã sử
                                    dụng sự hiểu biết của mình về nhu cầu bảo
                                    mật đa dạng trong các ngành để xây dựngs
                                    antiSCM như một đối tác đáng tin cậy. Mục
                                    đích đã và đang là củng cố các doanh nghiệp
                                    thuộc mọi quy mô trước bối cảnh ngày càng
                                    gia tăng của các mối đe dọa mạng.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Content 2 */}
            <div className="mt-[700px] w-[100%] px-[5%] relative">
                <div className="flex">
                    <div className="flex-1">
                        <div className="p-[1px] bg-white rounded-full drop-shadow-[0_0_6px_#87dcff] inline-block">
                            <div className="rounded-full border-[1px] border-[#87dcff] bg-white shadow-[inset_0_0_4px_#87dcff] p-2">
                                <div className="text-[#13759d]">
                                    Nhiệm vụ của chúng tôi
                                </div>
                            </div>
                        </div>
                        <h1 className="text-[3rem] font-bold leading-[60px] mt-10">
                            Mang lại kết quả an ninh mạng vượt trội
                        </h1>
                    </div>
                    <div className="flex-1">
                        <div>
                            <p className="text-[#4c4b4b91] text-[1.2rem]">
                                Real-world, quantifiable results that not only
                                demonstrate our dedication to your security but
                                also to your overall success. Witness the
                                effectiveness of our strategies through tangible
                                cybersecurity outcomes, reflecting our firm
                                commitment.
                            </p>
                            <div>
                                <div className="flex flex-wrap gap-4">
                                    {renderListInfo()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="absolute top-[-100px] w-[90%] h-[2px] bg-[#4f4f4e4d]"></span>
            </div>

            {/*content 3*/}
            <div className="mt-[15%]  px-[5%] relative">
                <div className="flex">
                    <div className="flex-1 bg-white p-10 rounded-l-3xl shadow-xl">
                        <h1 className="text-[2.5rem] font-semibold">
                            Dẫn đầu về an ninh mạng
                        </h1>
                        <h2 className="text-[1.5rem]  font-medium leading-[30px] mt-5">
                            Kiểm tra thâm nhập chuyên gia cho doanh nghiệp và
                            cộng đồng
                        </h2>
                        <p className="text-[#4c4b4b91] mt-5">
                            Tại Redline Cyber ​​​​Security, chúng tôi tin rằng
                            mọi công ty đều phải có quyền truy cập vào các giải
                            pháp an ninh mạng đáng tin cậy và hiệu quả để bảo vệ
                            tài sản kỹ thuật số của mình. Sứ mệnh của chúng tôi
                            là cung cấp các dịch vụ bảo mật toàn diện giúp các
                            doanh nghiệp thuộc mọi quy mô tự bảo vệ mình khỏi
                            các mối đe dọa trên mạng.
                        </p>
                        <p className="text-[#4c4b4b91] mt-5">
                            Câu chuyện của chúng tôi bắt đầu với một nhóm chuyên
                            gia bảo mật giàu kinh nghiệm, những người nhận thấy
                            nhu cầu về các giải pháp bảo mật mạng tốt hơn trên
                            thị trường. Kể từ đó, chúng tôi tự nhiên phát triển
                            thành đối tác đáng tin cậy của các doanh nghiệp
                            thuộc nhiều ngành, giúp họ điều hướng trong bối cảnh
                            an ninh mạng phức tạp và luôn thay đổi.
                        </p>
                        <p className="text-[#4c4b4b91] mt-5">
                            At Redline Cyber Security, we are committed to
                            staying ahead of the curve with the latest tools,
                            technologies, and best practices in the field. We
                            believe that cyber security is not just a product or
                            a service, but a continuous process of improvement
                            and adaptation. We work closely with each client to
                            understand their unique needs and develop tailored
                            solutions that meet their specific requirements.
                        </p>
                        <p className="text-[#4c4b4b91] mt-5">
                            Cho dù bạn là một doanh nghiệp nhỏ mới bắt đầu hay
                            một doanh nghiệp lớn có nhu cầu bảo mật phức tạp,
                            Redline Cyber ​​​​Security luôn sẵn sàng trợ giúp
                        </p>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/images/about_bg.png"
                            alt="icon"
                            width={600}
                            height={350}
                            className="object-cover rounded-r-3xl w-[700px] h-[700px] shadow-xl"
                        />
                    </div>
                </div>
                <span className="absolute top-[-100px] w-[90%] h-[2px] bg-[#4f4f4e4d]"></span>
            </div>

            {/* Content 4 */}
            <div className="mt-[100px] px-[5%]">
                <div>
                    <div className="flex justify-center">
                        <div className="p-[1px] bg-white rounded-full drop-shadow-[0_0_6px_#87dcff] inline-block">
                            <div className="rounded-full border-[1px] border-[#87dcff] bg-white shadow-[inset_0_0_4px_#87dcff] p-2">
                                <div className="text-[#13759d]">
                                    Những khóa học của chúng tôi
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-[3.3rem] leading-[60px] font-bold text-center mt-10">
                        Những thứ bạn sẽ đạt được khi tham gia <br />
                        khóa học của chúng tôi
                    </h1>
                    <div className="flex mt-10">
                        <div className="flex-1 h-[1500px] border-r-2 border-[#87dcff] ">
                            <div className="relative">
                                <div className="p-5 border-2 w-[80%] mt-5 rounded-3xl">
                                    <h2 className="text-[2rem] font-semibold">
                                        Humble Beginnings Humble Beginnings
                                    </h2>
                                    <p>
                                        Our origins trace back to industry
                                        experts in enterprise cybersecurity
                                        roles, laying a strong foundation for
                                        what would become Redline Cyber
                                        Security.
                                    </p>
                                </div>

                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeOut",
                                    }}
                                    variants={variants}
                                    className="absolute top-10 right-[-70px]"
                                >
                                    <div className="p-[1px] bg-white rounded-full drop-shadow-[0_0_6px_#87dcff] inline-block">
                                        <div className="rounded-full border-[1px] border-[#87dcff] bg-[#13759d] shadow-[inset_0_0_4px_#87dcff] p-14">
                                            <div className="text-white min-w-[24px] text-center">
                                                01
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="relative mt-[73.1%]">
                                <div className="p-5 border-2 w-[80%] mt-5 rounded-3xl">
                                    <h2 className="text-[2rem] font-semibold">
                                        Humble Beginnings Humble Beginnings
                                    </h2>
                                    <p>
                                        Our origins trace back to industry
                                        experts in enterprise cybersecurity
                                        roles, laying a strong foundation for
                                        what would become Redline Cyber
                                        Security.
                                    </p>
                                </div>

                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeOut",
                                    }}
                                    variants={variants}
                                    className="absolute top-10 right-[-70px]"
                                >
                                    <div className="p-[1px] bg-white rounded-full drop-shadow-[0_0_6px_#87dcff] inline-block">
                                        <div className="rounded-full border-[1px] border-[#87dcff] bg-[#13759d] shadow-[inset_0_0_4px_#87dcff] p-14">
                                            <div className="text-white min-w-[24px] text-center">
                                                03
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="relative mt-[55%]">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeOut",
                                    }}
                                    variants={variants}
                                    className="absolute top-10 left-[-70px]"
                                >
                                    <div className="p-[1px] bg-white rounded-full drop-shadow-[0_0_6px_#87dcff] inline-block">
                                        <div className="rounded-full border-[1px] border-[#87dcff] bg-[#13759d] shadow-[inset_0_0_4px_#87dcff] p-14">
                                            <div className="text-white min-w-[24px] text-center">
                                                02
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <div className="p-5 border-2 w-[80%] rounded-3xl absolute right-0">
                                    <h2 className="text-[2rem] font-semibold">
                                        Humble Beginnings Humble Beginnings
                                    </h2>
                                    <p>
                                        Our origins trace back to industry
                                        experts in enterprise cybersecurity
                                        roles, laying a strong foundation for
                                        what would become Redline Cyber
                                        Security.
                                    </p>
                                </div>
                            </div>

                            <div className="relative mt-[1084px]">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeOut",
                                    }}
                                    variants={variants}
                                    className="absolute top-10 left-[-70px]"
                                >
                                    <div className="p-[1px] bg-white rounded-full drop-shadow-[0_0_6px_#87dcff] inline-block">
                                        <div className="rounded-full border-[1px] border-[#87dcff] bg-[#13759d] shadow-[inset_0_0_4px_#87dcff] p-14">
                                            <div className="text-white min-w-[24px] text-center">
                                                04
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <div className="p-5 border-2 w-[80%] rounded-3xl absolute right-0">
                                    <h2 className="text-[2rem] font-semibold">
                                        Humble Beginnings Humble Beginnings
                                    </h2>
                                    <p>
                                        Our origins trace back to industry
                                        experts in enterprise cybersecurity
                                        roles, laying a strong foundation for
                                        what would become Redline Cyber
                                        Security.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" px-[100px] flex items-center">
                        <div
                            ref={textRef}
                            className="text-[2rem] font-semibold text-center text-transparent bg-clip-text"
                            style={{
                                backgroundImage: `linear-gradient(to bottom, black ${gradientHeight}%, gray 0%)`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            From our humble beginnings to sustained organic
                            growth, our journey reflects our passion for
                            cybersecurity and commitment to our clients. As we
                            continue to adapt and evolve, we remain dedicated to
                            staying at the forefront of cybersecurity,
                            safeguarding your digital assets with unmatched
                            expertise and unwavering dedication.
                        </div>
                    </div>
                </div>
            </div>
            {/* Content 5 */}
            <div className="mt-[1000px]"></div>
        </div>
    );
}

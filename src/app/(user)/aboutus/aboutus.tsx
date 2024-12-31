"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import anime from "animejs";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const listInfo = [
    {
        percent: 35,
        title: "Các bài đăng về nhận thức",
    },
    {
        percent: 25,
        title: "Các dấu hiệu lừa đảo không gian mạng",
    },
    {
        percent: 150,
        title: "Các trang web độc hại có thể kiểm tra được",
    },
    {
        percent: 200,
        title: "Các tài khoản lừa đảo cso thể kiểm tra được",
    },
];

const listShaping = [
    {
        icon: "/images/community.svg",
        title: "Sự tham gia của cộng đồng",
        desc: "Tích cực thúc đẩy học tập và hợp tác về an ninh mạng thông qua các sự kiện trên toàn quốc.",
    },
    {
        icon: "/images/g1.svg",
        title: "Lấy khách hàng làm trung tâm",
        desc: "Ưu tiên nhu cầu bảo mật của khách hàng bằng các giải pháp hiệu quả, tiết kiệm chi phí. ",
    },
    {
        icon: "/images/g2.svg",
        title: "Không ngừng cải tiến lien tục",
        desc: "Không ngừng theo đuổi các công nghệ và biện pháp thực hành an ninh mạng mới nhất để bảo mật khách hàng một cách tối ưu.",
    },
    {
        icon: "/images/g3.svg",
        title: "Tính chính trực và minh bạch",
        desc: "Đề cao sự trung thực và giao tiếp rõ ràng để có được mối quan hệ khách hàng đáng tin cậy. ",
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
                <h3 className="text-[1.5rem] font-semibold">{info.title}</h3>
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

    const renderListShaping = () => {
        return listShaping.map((info, index) => (
            <div key={index} className="">
                <div className="bg-white shadow-xl rounded-3xl">
                    <div className="p-5">
                        <div className="flex justify-center">
                            <div className="bg-black inline-block p-5 rounded-full border-[3px] border-[#87dcff]">
                                <Image
                                    src={info.icon}
                                    alt="icon"
                                    width={50}
                                    height={50}
                                />
                            </div>
                        </div>
                        <h3 className="text-center mt-5 text-[1.5rem] font-semibold min-h-[72px]">
                            {info.title}
                        </h3>
                        <p className="text-[#4c4b4b91] mt-5 min-h-[96px] text-center">
                            {info.desc}
                        </p>
                    </div>
                </div>
            </div>
        ));
    };

    //Animation for block introduce mobile app
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    //left to
    const leftVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    const rightVariants = {
        hidden: { opacity: 0, x: 50 }, // Bắt đầu từ bên phải
        visible: { opacity: 1, x: 0 }, // Di chuyển đến vị trí gốc
    };

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
                                            100% tự sở hữu và điều hành
                                        </h2>
                                        <p className="text-[0.8rem] text-[#6b6b6b]">
                                            Dịch vụ cá nhân hóa, hiệu quả
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
                                            Có trụ sở chính tại Việt Nam
                                        </h2>
                                        <p className="text-[0.8rem] text-[#6b6b6b]">
                                            Hỗ trợ trực tiếp và kịp thời cho
                                            người dùng
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
                                            Các chuyên gia từ lĩnh vực an toàn
                                            thông tin
                                        </h2>
                                        <p className="text-[0.8rem] text-[#6b6b6b]">
                                            Cung cấp các bài học và các bài đăng
                                            hữu ích
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
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 1.5,
                                ease: "easeOut",
                            }}
                            variants={leftVariants}
                        >
                            <h1 className="text-[3rem] font-bold leading-[60px] mt-10">
                                Mang lại kết quả an ninh mạng vượt trội
                            </h1>
                        </motion.div>
                    </div>
                    <div className="flex-1">
                        <div>
                            <p className="text-[#4c4b4b91] text-[1.2rem]">
                                Kết quả thực tế, có thể định lượng được không
                                chỉ thể hiện sự cống hiến của chúng tôi cho vấn
                                đề bảo mật mà còn cho thành công chung của bạn.
                                Chứng kiến ​​tính hiệu quả của các chiến lược
                                của chúng tôi thông qua các kết quả an ninh mạng
                                hữu hình, phản ánh cam kết vững chắc của chúng
                                tôi.
                            </p>
                            <div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeOut",
                                    }}
                                    variants={rightVariants}
                                >
                                    <div className="flex flex-wrap gap-4 mt-5">
                                        {renderListInfo()}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="absolute top-[-100px] w-[90%] h-[2px] bg-[#4f4f4e4d]"></span>
            </div>

            {/*content 3*/}
            <div className="mt-[15%]  px-[5%] relative">
                <div className="flex">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 1.5,
                            ease: "easeOut",
                        }}
                        variants={leftVariants}
                        className="flex-1 bg-white p-10 rounded-l-3xl shadow-xl"
                    >
                        <h1 className="text-[2.5rem] font-semibold">
                            Dẫn đầu về an ninh mạng
                        </h1>
                        <h2 className="text-[1.5rem]  font-medium leading-[30px] mt-5">
                            Kiểm tra thâm nhập chuyên gia cho doanh nghiệp và
                            cộng đồng
                        </h2>
                        <p className="text-[#4c4b4b91] mt-5">
                            Tại antiSCM, chúng tôi tin rằng mọi công ty đều phải
                            có quyền truy cập vào các giải pháp an ninh mạng
                            đáng tin cậy và hiệu quả để bảo vệ tài sản kỹ thuật
                            số của mình. Sứ mệnh của chúng tôi là cung cấp các
                            dịch vụ bảo mật toàn diện giúp các doanh nghiệp
                            thuộc mọi quy mô tự bảo vệ mình khỏi các mối đe dọa
                            trên mạng.
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
                            Tại antiSCM, chúng tôi cam kết luôn dẫn đầu với các
                            công cụ, công nghệ mới nhất và các phương pháp hay
                            nhất trong lĩnh vực này. Chúng tôi tin rằng an ninh
                            mạng không chỉ là một sản phẩm hay dịch vụ mà là một
                            quá trình cải tiến và thích ứng liên tục. Chúng tôi
                            làm việc chặt chẽ với từng khách hàng để hiểu nhu
                            cầu riêng của họ và phát triển các giải pháp phù hợp
                            đáp ứng yêu cầu cụ thể của họ.
                        </p>
                        <p className="text-[#4c4b4b91] mt-5">
                            Cho dù bạn là một người chưa có kiến thức về an ninh
                            mạng sau khi đến với chúng tôi bạn sẽ có những kiến
                            thức tuyệt vời không chỉ bảo vệ được bản thân mình
                            mà còn bảo vệ được những người thân bên cạnh mình.
                        </p>
                    </motion.div>

                    <div className="flex-1">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 1.5,
                                ease: "easeOut",
                            }}
                            variants={rightVariants}
                            className="object-cover "
                        >
                            <Image
                                src="/images/about.jpg"
                                alt="icon"
                                width={600}
                                height={350}
                                className="w-[700px] h-[800px] rounded-r-3xl shadow-xl"
                            />
                        </motion.div>
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
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 1.5,
                            ease: "easeOut",
                        }}
                        variants={variants}
                    >
                        <h1 className="text-[3.3rem] leading-[60px] font-bold text-center mt-10">
                            Những thứ bạn sẽ đạt được khi tham gia <br />
                            khóa học của chúng tôi
                        </h1>
                    </motion.div>

                    <div className="flex mt-10">
                        <div className="flex-1 h-[1500px] border-r-2 border-[#87dcff] ">
                            <div className="relative">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeOut",
                                    }}
                                    variants={leftVariants}
                                >
                                    <div className="p-5 border-2 w-[80%] mt-5 rounded-3xl">
                                        <h2 className="text-[2rem] font-semibold leading-[40px]">
                                            Hiểu sâu hơn về công nghệ và các hệ
                                            thống mạng
                                        </h2>
                                        <p className="mt-5 text-[#4c4b4b91]">
                                            Cung cấp nền tảng vững chắc về cấu
                                            trúc mạng, hệ điều hành, và các công
                                            nghệ bảo mật phổ biến. Ngoài ra, nắm
                                            bắt cách hoạt động của tấn công mạng
                                            như phishing, ransomware, DDoS, và
                                            cách phòng ngừa hiệu quả.
                                        </p>
                                    </div>
                                </motion.div>

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

                            <div className="relative mt-[69%]">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeOut",
                                    }}
                                    variants={leftVariants}
                                >
                                    <div className="p-5 border-2 w-[80%] mt-5 rounded-3xl">
                                        <h2 className="text-[2rem] font-semibold leading-[40px]">
                                            Tăng sự tự tin khi sử dụng các thiết
                                            bị và dịch vụ trực tuyến
                                        </h2>
                                        <p className="mt-5 text-[#4c4b4b91]">
                                            Biết cách bảo mật tài khoản, mã hóa
                                            dữ liệu, và tránh các mối nguy tiềm
                                            ẩn khi sử dụng internet. Ngoài ra,
                                            bảo vệ bản thân và gia đình khỏi các
                                            mối đe dọa trực tuyến.
                                        </p>
                                    </div>
                                </motion.div>

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

                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeOut",
                                    }}
                                    variants={rightVariants}
                                >
                                    <div className="p-5 border-2 w-[80%] rounded-3xl absolute right-0">
                                        <h2 className="text-[2rem] font-semibold leading-[40px]">
                                            Khả năng hỗ trợ và tư vấn cho tổ
                                            chức hoặc cộng đồng
                                        </h2>
                                        <p className="mt-5 text-[#4c4b4b91]">
                                            Đóng góp vào cộng đồng bằng cách
                                            chia sẻ kiến thức và nâng cao nhận
                                            thức về an toàn không gian mạng.
                                        </p>
                                    </div>
                                </motion.div>
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

                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeOut",
                                    }}
                                    variants={rightVariants}
                                >
                                    <div className="p-5 border-2 w-[80%] rounded-3xl absolute right-0">
                                        <h2 className="text-[2rem] font-semibold leading-[40px]">
                                            Kết nối với cộng đồng chuyên gia
                                            trong lĩnh vực an ninh mạng
                                        </h2>
                                        <p className="mt-5 text-[#4c4b4b91]">
                                            Cơ hội tham gia các nhóm học tập,
                                            diễn đàn chuyên ngành, hoặc sự kiện,
                                            hội thảo trực tuyến. Bên cạnh đó còn
                                            mở rộng mạng lưới quan hệ với các
                                            chuyên gia, nhà tuyển dụng, và đồng
                                            nghiệp tiềm năng.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
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
                        className="px-[100px] flex items-center"
                    >
                        <h2 className="text-[2rem] font-semibold text-center">
                            Những gì bạn đạt được sau các khóa học của chúng tôi
                            về các biện pháp an toàn khi tham gia không gian
                            mạng cũng là ước muốn và là niềm tự hào của chúng
                            tôi khi thành lập ra antiSCM. Với mục đích bảo vệ
                            chính bạn và cộng đồng khỏi những cuộc tấn công
                            mạng.
                        </h2>
                    </motion.div>
                </div>
            </div>
            {/* Content 5 */}
            <div className="pt-[100px] pb-[100px]">
                <div className="flex justify-center">
                    <div className="p-[1px] bg-white rounded-full drop-shadow-[0_0_6px_#87dcff] inline-block">
                        <div className="rounded-full border-[1px] border-[#87dcff] bg-white shadow-[inset_0_0_4px_#87dcff] p-2">
                            <div className="text-[#13759d]">
                                Nhiệm vụ của chúng tôi
                            </div>
                        </div>
                    </div>
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
                >
                    <h1 className="text-[3.3rem] leading-[60px] font-bold text-center mt-10">
                        Định hình cách tiếp cận của chúng tôi <br />
                        đối với an ninh mạng
                    </h1>
                </motion.div>
                <div className="mt-10 px-[5%]">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 1.5,
                            ease: "easeOut",
                        }}
                        variants={variants}
                    >
                        <div className="grid grid-cols-4 gap-8">
                            {renderListShaping()}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

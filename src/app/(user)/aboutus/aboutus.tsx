"use client";

import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="w-full bg-[#f6f6f6] h-[2000px]">
            {/* Hero Content */}
            <div className="pt-[10%] pl-[10%] bg-[black] relative rounded-b-[50px]">
                <div className="w-full">
                    {/* Left Hero */}
                    <div className="w-[60%] mb-[400px] mt-[100px] relative">
                        <span className="absolute right-[850px] top-0 h-full w-1 bg-[#06c4d9]"></span>
                        <h1 className="text-white text-[3.1rem] leading-[60px] font-bold">
                            Khám phá sứ mệnh và câu chuyện đằng sau công ty
                            chúng tôi.
                        </h1>
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
                        <div className="grid grid-cols-2 gap-5 w-[80%] relative z-10"></div>
                    </div>
                </div>

                <div className="absolute top-[500px]">
                    <div className="flex">
                        <div className="flex-1">
                            <Image
                                src="/images/about_bg.png"
                                alt="icon"
                                width={600}
                                height={350}
                                className="object-cover h-[700px] rounded-3xl"
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
                            <div className="mt-10 w-[90%]">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dolores eligendi quos
                                    ratione iure iusto quam quia consectetur quo
                                    officiis non. Exercitationem, voluptate. In
                                    hic at corporis! Sit harum beatae accusamus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

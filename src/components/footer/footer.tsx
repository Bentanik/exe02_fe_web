"use client";

import React from "react";

export default function Footer() {
    return (
        <div>
            <div className="bg-[#1f1f1f]">
                <div className="p-[50px]">
                    <div className="border-b border-[white]">
                        <div className="grid grid-cols-4 gap-[120px] pb-[70px]">
                            {/* Logo */}
                            <div>
                                <div className="flex gap-2 items-center">
                                    <img
                                        src="/images/logo.png"
                                        alt="logo"
                                        className="w-[60px] h-[60px]"
                                    />
                                    <h1 className="text-[2.5rem] text-white font-semibold">
                                        antiSCM
                                    </h1>
                                </div>
                                <h2 className="text-white mt-2 ml-2">
                                    Trust less, verify more
                                </h2>
                            </div>
                            {/* foundation */}
                            <div>
                                <h3 className="text-white text-[1.3rem]">
                                    ANTISCM FOUNDATION INC
                                </h3>
                                <p className="text-white text-[0.9rem] mt-3">
                                    Office address:
                                </p>
                                <p className="text-white text-[0.9rem] mt-2">
                                    PO Box 143 Dernancourt
                                </p>
                                <p className="text-white text-[0.9rem] mt-2">
                                    SA 5075
                                </p>
                            </div>
                            {/* contact us */}
                            <div>
                                <h3 className="text-white text-[1.3rem]">
                                    CONTACT US
                                </h3>
                                <p className="text-white text-[0.9rem] mt-3">
                                    Phone: 0404 032 650
                                </p>
                                <p className="text-white text-[0.9rem] mt-2">
                                    Email: info@cafinc.org.au
                                </p>
                            </div>
                            {/* privacy */}
                            <div>
                                <h3 className="text-white text-[1.3rem]">
                                    SECURITY AND PRIVACY
                                </h3>
                                <p className="text-white text-[0.9rem] mt-3">
                                    Privacy policy
                                </p>
                                <p className="text-white text-[0.9rem] mt-2">
                                    Terms of service
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*Connect us */}
                    <div className="text-white p-[30px] mt-[80px]">
                        <div className="flex gap-10 justify-center">
                            {/* Facebook icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-[30px] h-[30px]"
                            >
                                <path
                                    fill="#ffffff"
                                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                                />
                            </svg>
                            {/* Instagram icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-[30px] h-[30px]"
                            >
                                <path
                                    fill="#ffffff"
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-[30px] h-[30px]"
                            >
                                <path
                                    fill="#ffffff"
                                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-[30px] h-[30px]"
                            >
                                <path
                                    fill="#ffffff"
                                    d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                                />
                            </svg>
                        </div>
                        <div className="text-[0.7rem] text-center mt-5">
                            © 2024 antiSCM. All rights reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";
import Image from "next/image";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const data = [
    { name: "Jan", uv: 4000, pv: 2000 },
    { name: "Feb", uv: 3000, pv: 4000 },
    { name: "Mar", uv: 2000, pv: 900 },
    { name: "Apr", uv: 2780, pv: 3000 },
    { name: "May", uv: 1000, pv: 1500 },
];

const barData = [
    { name: "Jan", amount: 4000 },
    { name: "Feb", amount: 3000 },
    { name: "Mar", amount: 5000 },
    { name: "Apr", amount: 2000 },
    { name: "May", amount: 2780 },
];

const listRow = [
    {
        img: "/images/bgAdmin.png",
        course: "antiSCM",
        amount: 4000,
        order: "$9999",
    },
    {
        img: "/images/bgAdmin.png",
        course: "antiSCM",
        amount: 3000,
        order: "$9999",
    },
    {
        img: "/images/bgAdmin.png",
        course: "antiSCM",
        amount: 5000,
        order: "$9999",
    },
    {
        img: "/images/bgAdmin.png",
        course: "antiSCM",
        amount: 2000,
        order: "$9999",
    },
    {
        img: "/images/bgAdmin.png",
        course: "antiSCM",
        amount: 2780,
        order: "$9999",
    },
];

export default function Dashboard() {
    const renderListRow = () => {
        return listRow.map((info, index) => (
            <TableRow key={index}>
                <TableCell className="font-medium !pl-7">
                    <Image
                        src={info.img}
                        alt="icon"
                        width={50}
                        height={50}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                </TableCell>
                <TableCell>{info.course}</TableCell>
                <TableCell>{info.amount}</TableCell>
                <TableCell>{info.order}</TableCell>
            </TableRow>
        ));
    };
    return (
        <div className="h-screen">
            <div className="p-5">
                <div className="">
                    <h1 className="text-[2rem] text-[#5c50d7] font-semibold">
                        Admin dashboard
                    </h1>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-5">
                    {/* Total purchase */}
                    <div className="relative">
                        <div>
                            <Image
                                src="/images/green_bg.png"
                                alt="icon 1"
                                width={400}
                                height={500}
                                className="object-cover h-[150px] ml-auto rounded-xl"
                            />
                        </div>
                        <div className="absolute top-3 left-5 min-w-[333px]">
                            <div className="flex justify-between">
                                <div>
                                    <h2 className="text-[1.5rem] text-[white]">
                                        Total purchase
                                    </h2>
                                    <p className="text-[0.8rem] text-[white]">
                                        Per month
                                    </p>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-10 h-10"
                                >
                                    <path
                                        fill="#ffffffff"
                                        d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2c0 0 0 0 0 0s0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4l0 3.4 0 5.7 0 26.3zm32 0l0-32 0-25.9c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 44.2-86 80-192 80S0 476.2 0 432l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-[2rem] mt-4 font-semibold text-[white]">
                                $2000
                            </h2>
                        </div>
                    </div>

                    {/* Total donate */}
                    <div className="relative">
                        <div>
                            <Image
                                src="/images/blue_bg.png"
                                alt="icon 1"
                                width={400}
                                height={500}
                                className="object-cover h-[150px] ml-auto rounded-xl"
                            />
                        </div>
                        <div className="absolute top-3 left-5 min-w-[333px]">
                            <div className="flex justify-between">
                                <div>
                                    <h2 className="text-[1.5rem] text-[white]">
                                        Total donate
                                    </h2>
                                    <p className="text-[0.8rem] text-[white]">
                                        Per month
                                    </p>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                    className="w-10 h-10"
                                >
                                    <path
                                        fill="#ffffff"
                                        d="M312 24l0 10.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3s0 0 0 0c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8l0 10.6c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-11.4c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2L264 24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-[2rem] mt-4 font-semibold text-[white]">
                                $1000
                            </h2>
                        </div>
                    </div>

                    {/* Total user */}
                    <div className="relative">
                        <div>
                            <Image
                                src="/images/red_bg.png"
                                alt="icon 1"
                                width={400}
                                height={500}
                                className="object-cover h-[150px] ml-auto rounded-xl"
                            />
                        </div>
                        <div className="absolute top-3 left-5 min-w-[333px]">
                            <div className="flex justify-between">
                                <div>
                                    <h2 className="text-[1.5rem] text-[white]">
                                        User
                                    </h2>
                                    <p className="text-[0.8rem] text-[white]">
                                        Per month
                                    </p>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"
                                    className="w-10 h-10"
                                >
                                    <path
                                        fill="#ffffff"
                                        d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-[2rem] mt-4 font-semibold text-[white]">
                                200
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 mt-5">
                    <div className=" w-[100%]">
                        <div className="bg-white w-[100%] px-5 border-[2px] rounded-xl">
                            <div className="px-5 py-5 flex justify-between items-center">
                                <h2 className="text-[1.2rem] text-[#28282886]">
                                    Purchase course
                                </h2>
                            </div>
                            <ResponsiveContainer width="90%" height={400}>
                                <LineChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="uv"
                                        stroke="#5fa4fa"
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="pv"
                                        stroke="#1f3c8c"
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="flex gap-[2%]"></div>
                    </div>
                    <div className="bg-white w-[58%] px-5 border-[2px] rounded-xl">
                        <div className="px-5 py-5 flex justify-between items-center">
                            <h2 className="text-[1.2rem] text-[#28282886]">
                                Donation amount
                            </h2>
                        </div>
                        <ResponsiveContainer width="100%" height={390}>
                            <BarChart
                                width={600}
                                height={200}
                                data={barData}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="amount" fill="#1f3c8c" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="mt-5 mb-[100px] bg-white border-[2px]  rounded-xl">
                    <div className="pt-5 pb-10 px-10 text-[1.2rem] text-[#28282886]">
                        Top list course
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow className="">
                                <TableHead className="!pl-10 ">Ảnh</TableHead>
                                <TableHead>Tên</TableHead>
                                <TableHead>Số lượng</TableHead>
                                <TableHead>Tổng tiền</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>{renderListRow()}</TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

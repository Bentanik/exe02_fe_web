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
            <div className="bg-[#e9ecef]">
                <div className="h-[130px] bg-gradient-to-r from-blue-900 via-blue-500 to-blue-400 rounded-b-xl">
                    <h1 className="p-5 text-[1.2rem] text-white font-semibold">
                        Admin dashboard
                    </h1>
                </div>
                <div className="flex">
                    <div className="mt-[60px] p-5 w-[75%]">
                        <div className="bg-white w-[100%] px-5 shadow-xl rounded-xl">
                            <div className="px-5 py-5 flex justify-between items-center">
                                <h2 className="text-[1.2rem] text-[#28282886]">
                                    Purchase course
                                </h2>
                                <p className="text-[1.5rem] font-semibold">
                                    $9999
                                </p>
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

                        <div className="flex gap-[2%]">
                            <div className="bg-white w-[58%] px-5 shadow-xl rounded-xl mt-5">
                                <div className="px-5 py-5 flex justify-between items-center">
                                    <h2 className="text-[1.2rem] text-[#28282886]">
                                        Donation amount
                                    </h2>
                                    <p className="text-[1.5rem] font-semibold">
                                        $9999
                                    </p>
                                </div>
                                <ResponsiveContainer width="100%" height={200}>
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
                            <div className="bg-white w-[40%] px-5 shadow-xl rounded-xl mt-5">
                                <div className="px-5 py-5 flex justify-between items-center">
                                    <h2 className="text-[1.2rem] text-[#28282886]">
                                        New users
                                    </h2>
                                    <p className="text-[1.5rem] font-semibold">
                                        +330
                                    </p>
                                </div>
                                <ResponsiveContainer width="90%" height={200}>
                                    <LineChart data={data}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line
                                            type="monotone"
                                            dataKey="uv"
                                            stroke="#1f3c8c"
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="mt-5 mb-[100px] w-[100%] bg-white shadow-xl  rounded-xl">
                            <div className="pt-5 pb-10 px-10 text-[1.2rem] text-[#28282886]">
                                Top list course
                            </div>
                            <Table>
                                <TableHeader>
                                    <TableRow className="">
                                        <TableHead className="!pl-10 ">
                                            Ảnh
                                        </TableHead>
                                        <TableHead>Tên</TableHead>
                                        <TableHead>Số lượng</TableHead>
                                        <TableHead>Tổng tiền</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>{renderListRow()}</TableBody>
                            </Table>
                        </div>
                    </div>
                    <div className="w-[24%] mt-20">
                        <div className="bg-white shadow-lg rounded-lg flex p-4 justify-between items-center">
                            <div className="pr-20 border-r-[1px] border-gray-300">
                                <h3 className="text-center text-[1.3rem] font-semibold">
                                    780
                                </h3>
                                <p className="text-gray-400">Visitor</p>
                            </div>
                            <div className="pl-4 text-center">
                                <h3 className="text-[1.3rem] font-semibold">
                                    7500
                                </h3>
                                <p className="text-gray-400">New user</p>
                            </div>
                        </div>
                        <div className="min-h-[300px] bg-white shadow-xl rounded-lg mt-5 p-4">
                            <h3 className="text-lg font-semibold">
                                Activity overview
                            </h3>
                            <p className="text-green-500 text-sm mb-4">
                                ▲ 16% this month
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 mt-1 bg-blue-500 rounded-full"></div>
                                    <div className="ml-3">
                                        <p className="text-gray-800 text-sm">
                                            $2400, Purchase
                                        </p>
                                        <p className="text-gray-500 text-xs">
                                            11 JUL 8:10 PM
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-2 h-2 mt-1 bg-blue-500 rounded-full"></div>
                                    <div className="ml-3">
                                        <p className="text-gray-800 text-sm">
                                            $2400, Purchase
                                        </p>
                                        <p className="text-gray-500 text-xs">
                                            11 JUL 8:10 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

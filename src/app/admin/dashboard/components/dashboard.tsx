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
} from "recharts";

import {
    Table,
    TableBody,
    TableCaption,
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
    { name: "May", uv: 1890, pv: 2000 },
];

export default function Dashboard() {
    return (
        <div className="h-screen">
            <div className="bg-[#e9ecef]">
                <div className="h-[130px] bg-gradient-to-r from-blue-900 via-blue-500 to-blue-400">
                    <h1 className="p-5 text-[1.2rem] text-white font-semibold">
                        Admin dashboard
                    </h1>
                </div>
                <div className="mt-5 p-5">
                    <div className="bg-white w-[80%] p-5 shadow-xl rounded-xl">
                        <div className="p-10">
                            <h2>Purchase course</h2>
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
                                    stroke="#8884d8"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#82ca9d"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="bg-white w-[80%] p-5 shadow-xl rounded-xl mt-5">
                        <div className="p-10">
                            <h2>Purchase course</h2>
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
                                    stroke="#8884d8"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#82ca9d"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="mt-5 w-[80%] bg-white shadow-xl  rounded-xl">
                        <Table>
                            <TableCaption>
                                A list of your recent invoices.
                            </TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">
                                        Invoice
                                    </TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Method</TableHead>
                                    <TableHead className="text-right">
                                        Amount
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        INV001
                                    </TableCell>
                                    <TableCell>Paid</TableCell>
                                    <TableCell>Credit Card</TableCell>
                                    <TableCell className="text-right">
                                        $250.00
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>

                <div className="mt-[200px]">hello alksdoaskdlakdlaskdalkd</div>
            </div>
        </div>
    );
}

'use client';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { getDonatesAsync } from "@/services/donate/api-services";
import React from "react";

export default function ManageDonate() {
    const [donates, setDonates] = React.useState<API.TGetDonates>();
    const [pageIndex, setPageIndex] = React.useState<number>(1);

    const handleGetUsers = async () => {
        const res = await getDonatesAsync(pageIndex ?? 1); // Truyền pageIndex vào
        if (res !== null) {
            setDonates(res?.value?.data);
        } else {
            setPageIndex(1);
        }
    }

    React.useEffect(() => {
        handleGetUsers();
    }, [pageIndex]); // Khi pageIndex thay đổi, gọi lại API

    return (
        <div>
            <div className="px-12 py-4 border-b">
                <h2 className="font-semibold text-xl">Quản lí lượt ủng hộ</h2>
                <p className="mt-2 text-base text-gray-500 font-semibold">
                    Quản lý lượt ủng hộ
                </p>
            </div>

            <div>
                <Table>
                    <TableCaption>Danh sách người dùng</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Mã ủng hộ</TableHead>
                            <TableHead>Họ và tên</TableHead>
                            <TableHead>Số tiền</TableHead>
                            <TableHead>Ngày ủng hộ</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {donates?.donates?.items?.map((item: API.TDonate, index: number) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.id}</TableCell>
                                    <TableCell>{item.user?.fullName ?? "Ẩn danh"}</TableCell>
                                    <TableCell>{item.amount}</TableCell>
                                    <TableCell>
                                        {new Date(item.createdDate).toLocaleString("vi-VN", {
                                            day: "2-digit",
                                            month: "2-digit",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            hour12: true,
                                        })}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>

            {/* Phân trang */}
            <div className="flex justify-center items-center space-x-2 py-4">
                <button
                    onClick={() => setPageIndex(prev => Math.max(prev - 1, 1))}
                    className="px-4 py-2 bg-white border rounded shadow-sm hover:bg-gray-100 disabled:opacity-50 transition-all"
                    disabled={pageIndex === 1}
                >
                    Trước
                </button>

                <span className="text-sm font-medium">
                    Trang {pageIndex} / {donates?.donates?.totalPages ?? 1}
                </span>

                <button
                    onClick={() =>
                        setPageIndex(prev =>
                            donates?.donates?.totalPages ? Math.min(prev + 1, donates?.donates?.totalPages) : prev
                        )
                    }
                    className="px-4 py-2 bg-white border rounded shadow-sm hover:bg-gray-100 disabled:opacity-50 transition-all"
                    disabled={pageIndex === donates?.donates?.totalPages}
                >
                    Tiếp
                </button>
            </div>
        </div>
    );
}

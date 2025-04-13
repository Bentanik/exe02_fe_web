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
import { getUsersAsync } from "@/services/user/api-services";
import React from "react";

export default function ManageUser() {
    const [users, setUsers] = React.useState<API.TGetUsers>();
    const [pageIndex, setPageIndex] = React.useState<number>(1);

    const handleGetUsers = async () => {
        const res = await getUsersAsync(pageIndex ?? 1); // Truyền pageIndex vào
        if (res !== null) {
            setUsers(res?.value?.data);
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
                <h2 className="font-semibold text-xl">Quản lí người dùng</h2>
                <p className="mt-2 text-base text-gray-500 font-semibold">
                    Quản lý người dùng là quá trình kiểm soát, phân quyền và theo dõi hoạt động của người dùng nhằm đảm bảo an toàn, hiệu quả và tính minh bạch trong hệ thống
                </p>
            </div>

            <div>
                <Table>
                    <TableCaption>Danh sách người dùng</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Mã người dùng</TableHead>
                            <TableHead>Họ và tên</TableHead>
                            <TableHead>Địa chỉ Email</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users?.users?.items?.map((item: API.TUser, index: number) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.id}</TableCell>
                                    <TableCell>{item.fullName}</TableCell>
                                    <TableCell>{item.email}</TableCell>
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
                    Trang {pageIndex} / {users?.users?.totalPages ?? 1}
                </span>

                <button
                    onClick={() =>
                        setPageIndex(prev =>
                            users?.users?.totalPages ? Math.min(prev + 1, users.users.totalPages) : prev
                        )
                    }
                    className="px-4 py-2 bg-white border rounded shadow-sm hover:bg-gray-100 disabled:opacity-50 transition-all"
                    disabled={pageIndex === users?.users?.totalPages}
                >
                    Tiếp
                </button>
            </div>
        </div>
    );
}

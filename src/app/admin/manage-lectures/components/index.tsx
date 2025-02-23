'use client';

import TableLectures from "@/app/admin/manage-lectures/components/table-lecture";
import BreadcrumbComponent from "@/components/breadcrumb-component";
import ButtonComponent from "@/components/button-component";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { BREADCRUMB_MANAGELECTURES } from "@/const/admin";
import { ArrowLeft, CirclePlus } from "lucide-react";
import Link from "next/link";

export default function ManageLectures() {
    return (
        <div className="">
            <header>
                <div className="flex items-center gap-x-3">
                    <ButtonComponent
                        href="/admin/home"
                        type="none"
                        active={false}
                        className="!px-2 !py-[5px] !min-h-[5px] hover:!bg-none"
                        tooltip="not-full"
                        description="Quay lại trang chủ"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </ButtonComponent>
                    <h1 className="text-xl font-semibold text-primary-admin">
                        Quản lí bài học
                    </h1>
                </div>
                <div className="mt-3 ml-12">
                    <BreadcrumbComponent breadcrumbs={BREADCRUMB_MANAGELECTURES} />
                </div>
            </header>
            <main className="mt-5">
                <div className="flex items-center justify-between">
                    <h3 className='px-4'>Tìm kiếm bài học(Tính năng đang phát triển)</h3>
                    <Link href="/admin/manage-lecture/create-lecture">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="bg-white text-black dark:text-white flex items-center space-x-2 text-sm"
                        >
                            <CirclePlus className="text-base" />
                            <span>Tạo bài học</span>
                        </HoverBorderGradient>
                    </Link>
                </div>
                <div>
                    <TableLectures />
                </div>
            </main>
        </div>
    );
}

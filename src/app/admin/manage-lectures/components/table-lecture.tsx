/* eslint-disable @next/next/no-img-element */
import PaginatedComponent from '@/components/paginated';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getLecturesAsync } from '@/services/lecture/api-services';
import React, { useEffect, useState } from 'react'

export default function TableLectures() {
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [lectures, setLectures] = useState<API.TLectures>();

    const handleGetChapters = async (currentPageIndex: number) => {
        const form = {
            pageIndex: currentPageIndex,
            pageSize: 8,
            includes: ["Chapter"]
        } as REQUEST.TGetLectures;

        const res = await getLecturesAsync(form);
        setLectures(res.value.data);
    }

    useEffect(() => {
        handleGetChapters(1);
    }, [])

    const handlePageChange = (page: number) => {
        setPageIndex(page);
        handleGetChapters(page);
    };


    const renderChapters = () => {
        return lectures?.lectures?.items.map((lecture, index) => {
            return <TableRow key={index}>
                <TableCell className="font-medium">{lecture.id}</TableCell>
                <TableCell>{lecture.name}</TableCell>
                <TableCell>{lecture.chapter?.name}</TableCell>
                {/* <TableCell className="text-right">{lecture.quantityLectures}</TableCell> */}
                <TableCell className="text-right">
                    <Button>Xem chi tiết</Button>
                </TableCell>
            </TableRow>
        })
    }

    return (
        <div className='pt-3 flex flex-col gap-y-4'>
            <div className='w-full'>
                {/* {renderChapters()} */}
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Mã bài học</TableHead>
                            <TableHead>Tên bài học</TableHead>
                            <TableHead>Tên bài học đã tham chiếu đến chương học</TableHead>
                            <TableHead className="text-right"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {renderChapters()}
                    </TableBody>
                </Table>
            </div>
            <div className="mt-5">
                <PaginatedComponent
                    totalPages={lectures?.lectures.totalPages || 0}
                    currentPage={pageIndex}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}

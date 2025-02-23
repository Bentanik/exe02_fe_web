/* eslint-disable @next/next/no-img-element */
import PaginatedComponent from '@/components/paginated';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getChaptersAsync } from '@/services/chapter/api-services';
import React, { useEffect, useState } from 'react'

export default function TableChapters() {
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [chapters, setChapters] = useState<API.TChapters>();

    const handleGetChapters = async (currentPageIndex: number) => {
        const form = {
            pageIndex: currentPageIndex,
            pageSize: 8,
            includes: ["Course", "Lecture"]
        } as REQUEST.TGetChapters;

        const res = await getChaptersAsync(form);
        setChapters(res.value.data);
    }

    useEffect(() => {
        handleGetChapters(1);
    }, [])

    const handlePageChange = (page: number) => {
        setPageIndex(page);
        handleGetChapters(page);
    };


    const renderChapters = () => {
        return chapters?.chapters?.items.map((chapter, index) => {
            return <TableRow key={index}>
                <TableCell className="font-medium">{chapter.id}</TableCell>
                <TableCell>{chapter.name}</TableCell>
                <TableCell>{chapter.course?.name}</TableCell>
                <TableCell className="text-right">{chapter.quantityLectures}</TableCell>
                <TableCell className="text-right">
                    <Button>Chỉnh sửa</Button>
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
                            <TableHead>Mã chương học</TableHead>
                            <TableHead>Tên chương học</TableHead>
                            <TableHead>Tên khóa học đã tham chiếu</TableHead>
                            <TableHead className="text-right">Số lượng bài học</TableHead>
                            <TableHead className="text-right">Chỉnh sửa</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {renderChapters()}
                    </TableBody>
                </Table>
            </div>
            <div className="mt-5">
                <PaginatedComponent
                    totalPages={chapters?.chapters.totalPages || 0}
                    currentPage={pageIndex}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}

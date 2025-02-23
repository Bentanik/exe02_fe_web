/* eslint-disable @next/next/no-img-element */
import { CardCourse } from '@/app/admin/manage-courses/components/card-course';
import PaginatedComponent from '@/components/paginated';
import { getCoursesAsync } from '@/services/course/api-services';
import React, { useEffect, useState } from 'react'

export default function TableCourses() {
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [courses, setCourses] = useState<API.TCourses>();

    const handleGetCourses = async (currentPageIndex: number) => {
        const form = {
            pageIndex: currentPageIndex,
            pageSize: 12
        } as REQUEST.TGetCourses;

        const res = await getCoursesAsync(form);
        setCourses(res.value.data);
    }

    useEffect(() => {
        handleGetCourses(1);
    }, [])


    const renderCourses = () => {
        return courses?.courses?.items.map((course, index) => {
            return <CardCourse
                key={index}
                imageLink={course.thumbnail?.publicUrl || ""}
                title={course.name || ""}
                description={course.desciption || "Chưa có mô tả"}
                category={course.category?.name || "Chưa có"}
                level={course.level?.name || "Chưa có"}
            />
        })
    }

    const handlePageChange = (page: number) => {
        setPageIndex(page);
        handleGetCourses(page);
    };

    return (
        <div className='pt-3 flex flex-col gap-y-4'>
            <div className='grid grid-cols-4 w-full gap-x-4 gap-y-4'>
                {renderCourses()}
            </div>
            <div className="mt-5">
                <PaginatedComponent
                    totalPages={courses?.courses.totalPages || 0}
                    currentPage={pageIndex}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}

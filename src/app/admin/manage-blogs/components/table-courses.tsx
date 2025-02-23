/* eslint-disable @next/next/no-img-element */
import { CardCourse } from '@/app/admin/manage-courses/components/card-course';
import React from 'react'

const arr = [1, 2, 3, 4, 5];
export default function TableCourses() {

    const renderCourses = () => {
        return arr.map((course, index) => {
            return <CardCourse
                key={index}
                title={"Haha"}
                description={"Description"}
                category={"category"}
                level={"level"}
                imageLink={""}
            />
        })
    }

    return (
        <div className='pt-3 flex flex-col gap-y-4'>
            <div className='grid grid-cols-4 w-full gap-x-4 gap-y-4'>
                {renderCourses()}
            </div>
        </div>
    )
}

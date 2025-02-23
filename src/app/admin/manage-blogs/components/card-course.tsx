/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

export const CardCourse = ({
    className,
    title,
    description,
    category,
    level,
}: {
    className?: string;
    title: string;
    description: string;
    category: string;
    level: string;
}) => {

    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 group cursor-pointer",
                className
            )}
        >
            <img src="/images/bgAdmin.png" alt={title} className="w-full h-full" />
            <div className="group-hover/bento:translate-x-2 transition duration-200 flex flex-col gap-y-3">
                <div className="font-sans font-bold text-[18px]">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-base line-clamp-1">
                    {description}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-sm">
                    Thể loại:  {category}
                </div>
                <div className="flex items-center justify-between">
                    <div className="font-sans font-normal text-neutral-600 text-sm">
                        Cấp độ: {level}
                    </div>
                    <div className="font-sans font-normal text-neutral-600 text-sm">
                        <span className="opacity-0 group-hover:opacity-100 text-blue-500 cursor-pointer">Xem chi tiết</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

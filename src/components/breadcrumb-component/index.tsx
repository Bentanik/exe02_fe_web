"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { TBreadcrumb } from "@/utils/types/common";
import { Fragment } from "react";

interface BreadcrumbProps {
  breadcrumbs: TBreadcrumb[];
}

export default function BreadcrumbComponent({ breadcrumbs }: BreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <Fragment key={index}>
              <BreadcrumbItem className="font-montserrat text-sm">
                {breadcrumb.isActive || isLast ? (
                  <BreadcrumbPage className="font-semibold">
                    {breadcrumb.title}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={breadcrumb.link}
                    className="font-medium text-gray-600 hover:text-gray-800"
                  >
                    {breadcrumb.title}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

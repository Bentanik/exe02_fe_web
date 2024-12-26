"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface IMultiSelectDropdownAdminProps {
  id: string;
  title: string;
  values: API.TCategory[] | API.TLevel[] | API.TChapter[];
}

export default function MultiSelectDropdownAdmin({
  id,
  values,
  title,
}: IMultiSelectDropdownAdminProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (value: string) => {
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const renderCategories = (
    arr: API.TCategory[] | API.TLevel[] | API.TChapter[] | API.TCourse[]
  ) => {
    return arr.map((menu, index) => (
      <DropdownMenuItem
        key={index} // Đảm bảo `menu.id` là duy nhất
        onClick={() => toggleCategory(menu.name || "")}
      >
        <input
          type="checkbox"
          checked={selectedCategories.includes(menu.name || "")}
          readOnly
          className="mr-2"
        />
        {menu.name}
      </DropdownMenuItem>
    ));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild id={id}>
        <Button variant="outline" className="w-full">
          {selectedCategories.length > 0
            ? `Đã chọn: ${selectedCategories.length} ${title}`
            : `Chọn ${title}`}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 overflow-y-auto">
        <ScrollArea
          className={`${values.length > 5 ? "h-[200px]" : "min-h-[50px]"} `}
        >
          {renderCategories(values)}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

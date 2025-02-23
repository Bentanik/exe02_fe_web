"use client";

import React, { useEffect, useState } from "react";
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
  onSelect?: (selected: number[]) => void;
  isReset: true | false;
}

export default function MultiSelectDropdownAdmin({
  id,
  values,
  title,
  onSelect,
  isReset
}: IMultiSelectDropdownAdminProps) {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  useEffect(() => {
    if (isReset == true)
      setSelectedIndexes([]);
  }, [isReset])


  useEffect(() => {
    if (selectedIndexes.length > 0) {
      onSelect?.(selectedIndexes);
    } else {
      onSelect?.([]);
    }
  }, [selectedIndexes, values]);

  const toggleCategory = (index: number) => {
    setSelectedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const renderCategories = (
    arr: API.TCategory[] | API.TLevel[] | API.TChapter[]
  ) => {
    return arr.map((menu, index) => (
      <DropdownMenuItem key={index} onClick={() => toggleCategory(index)}>
        <input
          type="checkbox"
          checked={selectedIndexes.includes(index)}
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
          {selectedIndexes.length > 0
            ? `Đã chọn: ${selectedIndexes.length} ${title}`
            : `Chọn ${title}`}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 overflow-y-auto">
        <ScrollArea
          className={`${values.length > 5 ? "h-[200px]" : "min-h-[50px]"}`}
        >
          {renderCategories(values)}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

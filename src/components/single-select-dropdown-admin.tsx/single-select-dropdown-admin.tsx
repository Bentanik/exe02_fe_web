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
  onSelect?: (selected: API.TCategory | API.TLevel | API.TChapter | null) => void;
  isReset: true | false;
}

export default function SingleSelectDropdownAdmin({
  id,
  values,
  title,
  onSelect,
  isReset
}: IMultiSelectDropdownAdminProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isReset == true)
      setSelectedIndex(null);
  }, [isReset])

  useEffect(() => {
    if (selectedIndex !== null) {
      onSelect?.(values[selectedIndex]);
    } else {
      onSelect?.(null);
    }
  }, [selectedIndex, values]);

  const handleSelect = (index: number) => {
    setSelectedIndex((prev) => (prev === index ? null : index));
  };

  const renderCategories = (
    arr: API.TCategory[] | API.TLevel[] | API.TChapter[]
  ) => {
    return arr.map((menu, index) => (
      <DropdownMenuItem key={index} onClick={() => handleSelect(index)}>
        <input
          type="radio"
          checked={selectedIndex === index}
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
          {selectedIndex !== null
            ? `Đã chọn: ${values[selectedIndex]?.name}`
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
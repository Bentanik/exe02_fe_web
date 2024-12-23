"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const categories = [
  { id: 1, label: "Công nghệ", value: "technology" },
  { id: 2, label: "Khoa học", value: "science" },
  { id: 3, label: "Nghệ thuật", value: "art" },
  { id: 4, label: "Kinh doanh", value: "business" },
];

export default function MultiSelectDropdown() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (value: string) => {
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full">
          {selectedCategories.length > 0
            ? `Đã chọn: ${selectedCategories.length} danh mục`
            : "Chọn danh mục"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {categories.map((category) => (
          <DropdownMenuItem
            key={category.id}
            onClick={() => toggleCategory(category.value)}
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(category.value)}
              readOnly
              className="mr-2"
            />
            {category.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

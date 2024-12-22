import { Search } from "lucide-react";

export default function SearchSidebar() {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-2 -translate-y-1/2">
        <Search className="w-4 h-4 text-gray-500" />
      </div>
      <input type="text" className="py-1 px-7 outline-none border rounded-lg text-base" />
    </div>
  );
}

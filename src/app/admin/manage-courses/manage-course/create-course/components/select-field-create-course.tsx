import SingleSelectDropdownAdmin from "@/components/single-select-dropdown-admin.tsx/single-select-dropdown-admin";

interface ISelectFieldCreateCourse {
  id: string;
  title: string;
  value: API.TCategory[] | API.TLevel[] | API.TChapter[];
  onSelect?: (selected: API.TCategory | API.TLevel | API.TChapter | null) => void;
  isReset: true | false;
}

export default function SelectFieldCreateCourse({ id, title, value, onSelect, isReset }: ISelectFieldCreateCourse) {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <label htmlFor="category" className="text-base">
        Chọn thể loại
      </label>
      <SingleSelectDropdownAdmin
        id={id}
        title={title}
        values={value || []}
        onSelect={onSelect}
        isReset={isReset}
      />
    </div>
  )
}

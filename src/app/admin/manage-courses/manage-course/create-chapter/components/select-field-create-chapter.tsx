/* eslint-disable @typescript-eslint/no-unused-vars */
import MultiSelectDropdownAdmin from "@/components/multi-select-dropdown-admin.tsx/multi-select-dropdown-admin";
import SingleSelectDropdownAdmin from "@/components/single-select-dropdown-admin.tsx/single-select-dropdown-admin";

interface ISelectFieldCreateChapter {
  id: string;
  title: string;
  value: API.TCategory[] | API.TLevel[] | API.TChapter[];
  isReset: true | false;
  onSelectSingle?: (selected: API.TCategory | API.TLevel | API.TChapter | null) => void;
  onSelectMulti?: (selected: number[]) => void;
  isMultiSelect?: true | false;
}

export default function SelectFieldCreateChapter({ id, title, value, isReset, onSelectSingle, onSelectMulti, isMultiSelect = false }: ISelectFieldCreateChapter) {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <label htmlFor="category" className="text-base">
        {title}
      </label>
      {isMultiSelect == false ? <SingleSelectDropdownAdmin
        id={id}
        title={title}
        values={value || []}
        onSelect={onSelectSingle}
        isReset={isReset}
      /> : <MultiSelectDropdownAdmin
        id={id}
        title={title}
        values={value || []}
        onSelect={onSelectMulti}
        isReset={isReset}
      />}
    </div>
  )
}

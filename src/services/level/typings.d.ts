declare namespace REQUEST {}

declare namespace API {
  type TLevel = {
    id?: string | null;
    name?: string | null;
    quantityCourses?: number | 0;
  };

  type TLevels = {
    levels: TDataWithPagin<TLevel>;
  };
}

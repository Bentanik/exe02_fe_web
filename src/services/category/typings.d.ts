declare namespace REQUEST {}

declare namespace API {
  type TCategory = {
    id?: string | null;
    name?: string | null;
    quantityCourses?: number | 0;
  };

  type TCategories = {
    categories: TDataWithPagin<TCategory>;
  };
}

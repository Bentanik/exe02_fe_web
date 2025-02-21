declare namespace REQUEST {
  type TCreateCourse = {
    name: string;
    description: string;
    thumbnailFile: File;
    categoryId: string;
    levelId: string;
    chapterIds: string[];
  };

  type TGetCourses = TRequestGetAll;
}

declare namespace API {
  type TCourse = {
    id?: string;
    name?: string;
    thumbnail?: string;
    desciption?: string;
    category?: API.TCategory[];
    level?: API.TLevel[];
    chapters?: TChapter[];
  };

  type TCourses = {
    courses: TDataWithPagin<TCourse>;
  };
}

declare namespace REQUEST {
  type TCreateCourse = {
    name: string;
    description: string;
    thumbnailFile: File;
    categoryId: string;
    levelId: string;
  };
}

declare namespace API {
  type TCourse = {
    name?: string; // Name course
    thumbnail?: string; // Thumbnail
    desciption?: string; // Description
    category?: API.TCategory[]; // List categories for course
    level?: API.TLevel[]; // List of levels for learners
    chapters?: TChapter[];
  };
}

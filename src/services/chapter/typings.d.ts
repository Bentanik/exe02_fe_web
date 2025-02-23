declare namespace REQUEST {
  type TCreateChapter = {
    name: string;
    description: string;
    courseId: string;
    lectureIds: string[];
  };

  type TGetChapters = TRequestGetAll & {
    noneAssignedCourse?: boolean;
  };
}

declare namespace API {
  type TChapter = {
    id?: string | null;
    courseId?: string | null;
    name?: string | null;
    description?: string | null;
    quantityLectures?: number | null;
    totalDuration?: number | null;
    lectures?: TLecture[] | null;
    course?: TCourse | null;
  };

  type TChapters = {
    chapters: TDataWithPagin<TChapter>;
  };
}

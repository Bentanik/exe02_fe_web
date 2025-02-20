declare namespace REQUEST {}

declare namespace API {
  type TChapter = {
    id?: string | null;
    courseId?: string | null;
    name?: string | null;
    description?: string | null;
    totalLecture?: number | null;
    totalDuration?: number | null;
    lectures?: TLecture[] | null;
  };  
}

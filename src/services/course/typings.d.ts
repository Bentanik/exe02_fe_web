declare namespace REQUEST {}

declare namespace API {
  type TLecture = {
    name?: string; // Name lecture
    overviewDescription?: string; // Description short and overview about lecture
    detailDescription?: string; // Description detail about lecture
    duration?: number; // Duration of lecture
  };

  type TChapter = {
    name?: string; // Name chapter
    overviewDescription?: string; // Description short and overview about chapter
    detailDescription?: string; // Description detail chapter
    totalLecture?: number; // Total number of lecture
    totalDuration?: number; // Total duration of courses in chapter
    lectures?: TLecture[];
  };

  type TCourse = {
    name?: string; // Name course
    thumbnail?: string; // Thumbnail
    desciption?: string; // Description
    category?: API.TCategory[]; // List categories for course
    level?: API.TLevel[]; // List of levels for learners
    chapters?: TChapter[];
  };
}

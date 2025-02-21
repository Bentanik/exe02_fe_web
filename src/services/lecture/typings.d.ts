declare namespace REQUEST {
  type TGetLectures = TRequestAll & {
    noneAssignedChapter?: boolean;
  };
}

declare namespace API {
  type TLecture = {
    id?: string | null;
    chapterId?: string | null;
    name?: string | null;
    description?: string | null;
    imageLecture?: API.TImage | null;
    videoLecture?: API.TVideo | null;
  };

  type TLectures = {
    lectures: TDataWithPagin<TLecture>;
  };
}

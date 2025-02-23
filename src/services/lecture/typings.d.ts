declare namespace REQUEST {
  type TGetLectures = TRequestGetAll & {
    noneAssignedChapter?: boolean;
  };

  type TCreateLecture = {
    name: string;
    description: string;
    imageFile: File;
    chapterId: string;
    publicVideoId: string;
    durationVideo: number;
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
    chapter?: API.TChapter | null;
  };

  type TLectures = {
    lectures: TDataWithPagin<TLecture>;
  };
}

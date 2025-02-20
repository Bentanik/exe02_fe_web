declare namespace REQUEST {}

declare namespace API {
  type TLecture = {
    id?: string | null;
    chapterId?: string | null;
    name?: string | null;
    description?: string | null;
    imageLecture?: TImage | null;
    videoLecture?: TVideo | null;
  };  
}

import { Categories } from "@/mooks/category";
import { Levels } from "@/mooks/level";

export const Courses: API.TCourse[] = Array.from(
  { length: 50 },
  (_, index) => ({
    name: `Course ${index + 1}`,
    thumbnail: `https://via.placeholder.com/150?text=Course+${index + 1}`,
    desciption: `This is the description for Course ${index + 1}.`,
    category: Categories,
    level: Levels,
    chapters: Array.from({ length: 5 }, (_, chapterIndex) => ({
      name: `Chapter ${chapterIndex + 1}`,
      overviewDescription: `Overview of Chapter ${chapterIndex + 1}`,
      detailDescription: `Detailed description of Chapter ${chapterIndex + 1}`,
      totalLecture: 10,
      totalDuration: 300,
      lectures: Array.from({ length: 10 }, (_, lectureIndex) => ({
        name: `Lecture ${lectureIndex + 1}`,
        overviewDescription: `Overview of Lecture ${lectureIndex + 1}`,
        detailDescription: `Detailed description of Lecture ${
          lectureIndex + 1
        }`,
        duration: 30,
      })),
    })),
  })
);

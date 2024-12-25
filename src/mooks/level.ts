export const Levels: API.TLevel[] = Array.from(
    { length: 3 },
    (_, index) => ({
      name: `Cấp độ ${index}`,
    })
  );
  
export const Categories: API.TCategory[] = Array.from(
  { length: 50 },
  (_, index) => ({
    name: `Thể loại ${index}`,
  })
);

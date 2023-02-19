interface DataInterface {
  text: string;
  category?: string;
}
export const dataArray: DataInterface[] = [
  {
    text: "Text1",
    category: "national-park",
  },
  {
    text: "Text2Text2",
    category: "river",
  },
  {
    text: "Text3",
    category: "creative-place",
  },
];
console.log(dataArray.length);

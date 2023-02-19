interface DataInterface {
  text: string;
  tab_id: number;
}
export const dataArray: DataInterface[] = [
  {
    text: "Big city",
    tab_id: 1,
  },
  {
    text: "River",
    tab_id: 2,
  },
  {
    text: "Design",
    tab_id: 3,
  },
];
console.log(dataArray.length);

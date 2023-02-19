interface CategoryModel {
  text: string;
  category_id: number;
}

export interface RentalModel {
  location: string;
  category_id: number;
  images?: string[];
}
export const categories: CategoryModel[] = [
  {
    text: "Big city",
    category_id: 1,
  },
  {
    text: "River",
    category_id: 2,
  },
  {
    text: "Design",
    category_id: 3,
  },
];

export const rentals: RentalModel[] = [
  {
    location: "Florence, Italy",
    category_id: 1,
  },
  {
    location: "Kharkiv, Ukraine",
    category_id: 1,
  },
  {
    location: "Kyiv, Ukraine",
    category_id: 1,
  },
  {
    location: "Some city, Country",
    category_id: 2,
  },
  {
    location: "Some city, Country",
    category_id: 2,
  },

  {
    location: "Some city 3 category, Country",
    category_id: 3,
  },
  {
    location: "Some city, Country",
    category_id: 3,
  },
];

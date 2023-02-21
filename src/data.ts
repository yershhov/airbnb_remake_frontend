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
    images: [
      "https://a0.muscache.com/im/pictures/186c0318-0a61-4707-b1e2-6eec6a4c9edf.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-37352977/original/61c5e449-21e6-425f-8ac2-763676f72dd6.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-37352977/original/e98f7990-f8b0-4958-a279-44d0b34c174b.jpeg?im_w=1440",
    ],
  },
  // {
  //   location: "Kharkiv, Ukraine",
  //   category_id: 1,
  // },
  // {
  //   location: "Kyiv, Ukraine",
  //   category_id: 1,
  // },
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

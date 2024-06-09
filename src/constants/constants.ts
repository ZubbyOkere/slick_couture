export type FilterProps = { label: string; values: string[] };

export type Link = {
  name: string;
  href: string;
};

export type Slide = {
  id: number;
  title: string;
  description: string;
  img: string;
  url: string;
  bg: string;
};

export type Product = {
  id: number;
  title?: string;
  price?: string;
  description?: string;
  img: string;
  url?: string;
};

export const links: Link[] = [
  { name: "Homepage", href: "/" },
  { name: "Shop", href: "/" },
  { name: "Deals", href: "/" },
  { name: "Contact", href: "/" },
  { name: "Logout", href: "/" },
  { name: "Cart(1)", href: "/" },
];

export const slides: Slide[] = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

export const featuredProducts: Product[] = [
  {
    id: 1,
    title: "Product name",
    price: "$40",
    description: "Product name",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
  },
  {
    id: 2,
    title: "Product name",
    price: "$40",
    description: "Product name",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
  },
  {
    id: 3,
    title: "Product name",
    price: "$40",
    description: "My description",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
  },
  {
    id: 4,
    title: "Product name",
    price: "$40",
    description: "My description",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
  },
];

export const categoryProducts: Product[] = [
  {
    id: 1,
    title: "Product name",
    price: "$40",
    description: "Product name",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
  },
  {
    id: 2,
    title: "category name",
    price: "$40",
    description: "Product name",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
  },
  {
    id: 3,
    title: "category name",
    price: "$40",
    description: "My description",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
  },
  {
    id: 4,
    title: "category name",
    price: "$40",
    description: "My description",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
  },
  {
    id: 5,
    title: "category name",
    price: "$40",
    description: "Product name",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
  },
  {
    id: 6,
    title: "category name",
    price: "$40",
    description: "Product name",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
  },
  {
    id: 7,
    title: "category name",
    price: "$40",
    description: "My description",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
  },
  {
    id: 8,
    title: "category name",
    price: "$40",
    description: "My description",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
  },
];

export const singleProduct: Product[] = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const options = [
  { label: "TYPE", values: ["physical", "digital"] },
  { label: "SIZE", values: ["physical", "digital"] },
  { label: "COLOR", values: ["physical", "digital"] },
  { label: "COMPANY", values: ["physical", "digital"] },
  { label: "ALL FILTERS", values: ["physical", "digital"] },
];

export const sortOptions = [
  { label: "SORT BY", values: ["price", "price", "newest", "oldest"] },
];

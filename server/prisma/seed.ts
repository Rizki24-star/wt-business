import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const products = [
  {
    id: 1,
    name: "Bluetooth speaker",
    image: "placeholder.jpg",
    stocks: 6,
    price: 126000,
  },
  {
    id: 2,
    name: "Headphone",
    image: "placeholder.jpg",
    stocks: 10,
    price: 6000,
  },
  {
    id: 3,
    name: "Laptop charger",
    image: "placeholder.jpg",
    stocks: 7,
    price: 72000,
  },
  {
    id: 4,
    name: "LCD Monitor",
    image: "placeholder.jpg",
    stocks: 1,
    price: 600000,
  },
];

const main = () => {};

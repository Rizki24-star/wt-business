import { get } from "./api";

export const getProducts = async () => {
  return await get("/products");
};

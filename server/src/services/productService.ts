import { Products } from "@prisma/client";
import { prisma } from "../prsima/prisma";

export const getAllProducts = async (): Promise<Products[]> => {
  return await prisma.products.findMany();
};

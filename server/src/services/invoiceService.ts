import { Invoices, Prisma } from "@prisma/client";
import { prisma } from "../prsima/prisma";
import { Decimal } from "@prisma/client/runtime/library";

type NewInvoice = Omit<Invoices, "id" | "created_at" | "updated_at">;

export const getAllInvoices = async (): Promise<Invoices[]> => {
  return await prisma.invoices.findMany();
};

export const createInvoice = async (invoice: NewInvoice): Promise<Invoices> => {
  return await prisma.invoices.create({ data: invoice });
};

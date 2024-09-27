import { Request, Response } from "express";
import * as invoiceService from "../services/invoiceService";
import { Prisma } from "@prisma/client";

export const getAllInvoices = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const invoices = await invoiceService.getAllInvoices();
    res.status(200).json({ message: "success", data: invoices });
  } catch (error) {
    res.status(500).json({ message: "Error getting all invoices", error });
  }
};

export const createInvoice = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = {
      customer_name: "Rizki Okto",
      salesperson_name: "John Doe",
      date: new Date("2024-09-27"),
      notes: "",
      total_amount: new Prisma.Decimal(600000),
    };
    const invoice = await invoiceService.createInvoice(data);
    res.status(200).json({ message: "success", invoice });
  } catch (error) {
    res.status(500).json({ message: "Error posting invoice", error });
  }
};

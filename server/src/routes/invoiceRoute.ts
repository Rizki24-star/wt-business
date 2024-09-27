import { Router } from "express";
import {
  getAllInvoices,
  createInvoice,
} from "../controllers/invoiceController";

const router = Router();

router.get("/", getAllInvoices);
router.get("/create", createInvoice);

export default router;

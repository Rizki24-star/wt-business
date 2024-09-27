import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 3300;

app.get("/", (req: Request, res: Response) => {
  res.status(201).json({ message: `Server running on ${PORT}` });
});

app.listen(PORT, () => {
  console.log("server running");
});

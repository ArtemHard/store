import { db } from "../data/db";
import { Request, Response } from "express";

const getProducts = (req: Request, res: Response): Response => {
  return res.status(200).json(db.products);
};

export { getProducts };

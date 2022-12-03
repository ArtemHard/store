import { db } from "../data/db";
import { Response } from "express";
import ICustomRequest from "../middlewares/authMiddlewares";

const getProducts = (req: ICustomRequest, res: Response) => {
  const isUser = db.persons.find((value) => req.userId === value.id);
  console.log(isUser);

  isUser
    ? res.json(db.products)
    : res.status(403).json("Подстава токен Есть а логина Нет");
};

export { getProducts };

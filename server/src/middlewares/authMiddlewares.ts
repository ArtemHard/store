import { NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../controllers/authControllers";
import { Request, Response } from "express";
import { db } from "../data/db";

type authMiddlewareType = Response | NextFunction;

export default interface ICustomRequest extends Request {
  // костыль TS ICustomRequest
  userId: string;
}
export const authMiddleware = (
  req: ICustomRequest,
  res: Response,
  next: NextFunction
): authMiddlewareType => {
  console.log("Auth Middleware Work");

  if (!req.headers["authorization"] && ["x-access-token"])
    return res.status(401).send("Access denied. No token provided.");

  const authHeader = req.headers["authorization"];
  const token: string = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(403).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const userId: string = decoded["user"];
    const isUser = db.persons.find((value) => userId === value.id);

    isUser ? next() : res.status(403).json("Подстава токен Есть а логина Нет");
  } catch (ex) {
    // if invalid token
    res.status(400);
    res.send("Invalid token.");
  }
};

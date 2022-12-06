import { db, UserType } from "../data/db";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const bcryptPass = async (data: string): Promise<string> => {
  const hash = await bcrypt.hash(data, 1);
  return hash;
};

const bcryptCompare = async (data: string, hash: string) => {
  const result = await bcrypt.compare(data, hash);
  return result;
};

export const JWT_SECRET =
  "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

const status400 = (res: Response): Response => {
  return res
    .status(400)
    .json({ message: "The email and password your provided are invalid" });
};

const createToken = (id: string) => {
  return jwt.sign({ user: id }, JWT_SECRET, { expiresIn: "1h" });
};

/*Регистрация*/

const SignUp = async (req: Request, res: Response): Promise<Response> => {
  const { name, email, phone, password }: signInType = req.body;
  console.log(`${name} is trying to sign UP ..`);
  let dublicate = false;
  db.persons.forEach((person) => {
    if (person.email === email) {
      dublicate = true;
      return status400(res);
    }
    if (person.phone === phone && !dublicate) {
      dublicate = true;
      return status400(res);
    }
  });
  if (dublicate === false) {
    const id = Date.now().toString();
    const user: UserType = {
      id: id,
      email: email,
      password: await bcryptPass(password),
      phone: phone,
      name: name,
      orders: [],
    };

    if (name && email && phone && password) {
      db.persons.push(user);
      const token = createToken(user.id);
      const dataForUser = {
        id: user.id,
        email: user.email,
        name: user.name,
        token: token,
      };
      console.log(token);

      return res.json(dataForUser).status(201);
    } else return res.status(400);
  }
};

const SignIn = async (req: Request, res: Response): Promise<Response> => {
  const { email, password }: signInType = req.body;

  const personIndex = db.persons.findIndex((person) => person.email === email);

  if (personIndex !== -1) {
    const authorized = await bcryptCompare(
      password,
      db.persons[personIndex].password
    ); // сравниваем пароль
    if (authorized === true) {
      return res.status(200).json({
        token: jwt.sign({ user: db.persons[personIndex].name }, JWT_SECRET, {
          expiresIn: "120ms",
        }),
      });
    }
  }

  return res
    .status(400)
    .json({ message: "The email and password your provided are invalid" });
};

const getUserInfo = (req: Request, res: Response): Response => {
  console.log("Get My Info");

  return res.sendStatus(200);
};

export { SignIn, SignUp, getUserInfo };

type signInType = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

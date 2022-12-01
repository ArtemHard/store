import {db, UserType}  from '../data/db'
import {Request, Response} from 'express';

import jwt from 'jsonwebtoken'

const JWT_SECRET =
  "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

const SignUp = (req: Request, res: Response) => {
    console.log(req.body);
    
    const { name, email, phone, password} : signInType = req.body
    console.log(`${name} is trying to login ..`);

    db.persons.forEach(person => {
        if (person.email === email || person.phone === person.phone) {
            res.status(400)
            .json({ message: "The email and password your provided are invalid" });
        }
    })
    
    if (name === "admin" && password === "admin") {
        return res.json({
          token: jwt.sign({ user: "admin" }, JWT_SECRET),
        });
      }
  
      return res
      .status(401)
      .json({ message: "The email and password your provided are invalid" });
}

const SignIn = (req: Request, res: Response) => {
    console.log('signIn');
    

    res.sendStatus(200).json({ message: "You need to be logged in to access this resource" });
}

const getUserInfo = (req: Request, res: Response) => {
    console.log('Get My Info');
    

    res.sendStatus(200);
}

export {
    SignIn,
    SignUp,
    getUserInfo
    
}

type signInType = {
    name: string
    email: string
    phone:string
    password: string
}
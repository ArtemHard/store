import {db, UserType}  from '../data/db'
import {Request, Response} from 'express';
import { v4 as uuidv4 } from 'uuid';

import jwt from 'jsonwebtoken'

const JWT_SECRET =
  "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

  const status400 = (res: Response) : Response => {
    return res.status(400)
    .json({ message: "The email and password your provided are invalid" });
}

const  SignUp =  (req: Request, res: Response) : Response => {
    
    const { name, email, phone, password} : signInType = req.body
    console.log(`${name} is trying to login ..`);
    let dublicate = false
    db.persons.forEach(person => {
        
        if (person.email === email) {
            dublicate = true
            return status400(res)
        }
        if (person.phone === phone && !dublicate) {
            dublicate = true
            return status400(res)

        }

        // if ((person.email !== email && person.phone !== phone) && (person.email === email 
        //     || person.phone === phone)) {
            // res.status(400)
            // .json({ message: "The email and password your provided are invalid" });
        // }
    })
    if (dublicate === false ) {

        const id = uuidv4() + ' ' + Date.now()
        const user : UserType = {
            id: id,
            email: email,
            password: password,
            phone: phone,
            name: name,
            orders: []
        }
    
        if (name && email && phone && password) {
            db.persons.push(user)
            console.log(db.persons);
    
            return  res.json({
                token: jwt.sign({ user: "admin" }, JWT_SECRET, {expiresIn : "120ms" } ),
            });
    
        } else return res.status(400)
    }
    
    /*
    if (name === "admin" && password === "admin") {
        return  res.json({
            token: jwt.sign({ user: "admin" }, JWT_SECRET, {expiresIn : "120ms" } ),
        });
      }
  
      */
    //    return res
    //   .status(401)
    //   .json({ message: "The email and password your provided are invalid" });
}

const SignIn = (req: Request, res: Response): Response => {
    console.log('signIn');
    

    return res.sendStatus(200).json({ message: "You need to be logged in to access this resource" });
}

const getUserInfo = (req: Request, res: Response): Response => {
    console.log('Get My Info');
    

    return res.sendStatus(200);
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

import {db, UserType}  from '../data/db'
import {Request, Response} from 'express';
// import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
// import { authRouter } from '../routes/authRouts';

const bcryptPass  = async ( data : string) : Promise<string>  => {
    const hash = await bcrypt.hash(data, 1);
    return hash
    }

const bcryptCompare = async (data: string, hash: string) => {
        const result = await bcrypt.compare(data, hash);
        return result;
        }
    
const JWT_SECRET =
  "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

  const status400 = (res: Response) : Response => {
    return res.status(400)
    .json({ message: "The email and password your provided are invalid" });
}

    const createToken = (userName: string, res: Response) : Response => {
        return  res.json({
            token: jwt.sign({ user: userName }, JWT_SECRET, {expiresIn : "120ms" } ),
        });
    }

const  SignUp =  async (req: Request, res: Response) : Promise<Response> => {
    
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
    })
    if (dublicate === false ) {

        const id = Date.now().toString()
        const user : UserType = {
            id: id,
            email: email,
            password: await bcryptPass(password), 
            phone: phone,
            name: name,
            orders: []
        }
    
    if (name && email && phone && password) {
            db.persons.push(user)
            console.log(db.persons);
    
            return   createToken(name, res).status(201)
    
        } else return res.status(400)
    }
    
    
}

const SignIn = async (req: Request, res: Response): Promise<Response> => {
    
    const { email, password } : signInType = req.body
    
     const personIndex = db.persons.findIndex(person => person.email === email )
        
    if (personIndex !== (-1)) {
        
       const authorized = await bcryptCompare(password, db.persons[personIndex].password)   // сравниваем пароль
       if (authorized === true) {
         return res.status(200).json({ token: jwt.sign({ user: db.persons[personIndex].name }, JWT_SECRET, {expiresIn : "120ms" }) })
       } 

    }

    return res.status(400).json({ message: "The email and password your provided are invalid" }) ;
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

import { NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../controllers/authControllers';
import {Request, Response} from 'express';

type authMiddlewareType = Response | NextFunction

export default interface ICustomRequest extends Request {  // костыль TS ICustomRequest
  userId: string;
}
export const authMiddleware = (req: ICustomRequest, res: Response, next: NextFunction) : authMiddlewareType => {
    console.log('Auth Middleware Work');
    
    if (!req.headers["authorization"] && ["x-access-token"]) return res.status(401).send("Access denied. No token provided.")
    console.log();
    
    const authHeader = req.headers["authorization"];
    const token: string = authHeader && authHeader.split(' ')[1]
  
    if (!token) return res.status(403).send("Access denied. No token provided.");
 
    try {

        const decoded = jwt.verify(token, JWT_SECRET);
 
        req.userId = decoded['user']  // костыль TS
        
        next();
   
    } catch (ex) {
        // if invalid token
        res.status(400)
        res.send("Invalid token.")
        
      }
    };
import { NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../controllers/authControllers';

type authMiddlewareType = Response | NextFunction

export const authMiddleware = (req, res, next: NextFunction) : authMiddlewareType => {
    console.log('Auth Middleware Work');
    
    if (!req.headers["authorization"] && ["x-access-token"]) return res.status(401).send("Access denied. No token provided.")
    
    const authHeader = req.headers["x-access-token"] || req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1]
  
    if (!token) return res.status(401).send("Access denied. No token provided.");
 
    try {

        const decoded = jwt.verify(token, JWT_SECRET);
        console.log(decoded);
        
        req.user = decoded;
        
        next();
   
    } catch (ex) {
        // if invalid token
        res.status(400)
        res.send("Invalid token.")
        
      }
    };
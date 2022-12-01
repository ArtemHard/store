import {db}  from '../data/db'
import {Request, Response} from 'express';


const getProducts = (req: Request, res: Response) => {
    
  
    res.json(db.products)
}


export {
    getProducts
}
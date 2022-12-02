import express from "express"


const productsRouter = express.Router()

import { getProducts } from '../controllers/productsControllers'
import { authMiddleware } from "../middlewares/authMiddlewares"

productsRouter.route("/")
                .get(authMiddleware ,getProducts)





export {
    productsRouter
}


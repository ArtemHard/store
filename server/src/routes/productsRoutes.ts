import express from "express"


const productsRouter = express.Router()

import { getProducts } from '../controllers/productsControllers'

productsRouter.route("/")
                .get(getProducts)





export {
    productsRouter
}


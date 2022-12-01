import express from 'express'

const authRouter = express.Router()

import {
    SignIn,
    SignUp,
    getUserInfo
} from '../controllers/authControllers'

authRouter.route('/users').post(SignUp)

authRouter.route('/users/me').get(getUserInfo)

authRouter.route('auth').post(SignIn)

export {authRouter}
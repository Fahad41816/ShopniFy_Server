import express from 'express'
import { userController } from './users.controller'

const route = express.Router()


route.post('/login', userController.LoginUser)
route.post('/create', userController.CreateUser)

export const UserRoute = route
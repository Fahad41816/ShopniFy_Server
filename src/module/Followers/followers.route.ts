import express from 'express' 
import ValidationChecker from '../../Middleware/ValidationCheck' 
import { followerController } from './followers.controller'

const Route = express.Router()
 

Route.post("/", followerController.createFollower)
Route.delete("/upfollow/:id", followerController.UnFollowShop)

export const FollowerRoute = Route
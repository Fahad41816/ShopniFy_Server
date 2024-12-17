import express from 'express'
import { reviewController } from './Reviews.controler'
 

const route = express()
 
route.post('/', reviewController.createReview)

export const ReviewRoute = route
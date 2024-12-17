import express from 'express'
import { CategoryController } from './categori.controller'
import ValidationChecker from '../../Middleware/ValidationCheck'
import CategoryZodValidation from './category.validation'

const route = express.Router()


route.post('/', ValidationChecker(CategoryZodValidation) , CategoryController.createCategory)
route.get('/', CategoryController.getAllCategory)
// route.patch('/', async(req, res)=>{})
// route.delete('/', async(req, res)=>{})

export const CategoryRoute = route
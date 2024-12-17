import express from 'express'
import { ProductController } from './products.controller'
import ValidationChecker from '../../Middleware/ValidationCheck'
import ProductZodValidation from './product.validation'

const Route = express.Router()

// get all  
Route.get('/', ProductController.getAllProductIntoDb)
Route.get('/Home', ProductController.getAllProductForHomePage)
 
// get single 
Route.get('/:shopName/:productName', ProductController.getSingleDataIntoDb)

// post data 
Route.post('/', ValidationChecker(ProductZodValidation) ,ProductController.createProductIntoDb)

// update data 
Route.patch('/:id/:shopId', ProductController.updateProductIntoDb)

// delete product 
Route.delete('/:id', ProductController.DeleteProduct)

export const ProductRoute = Route
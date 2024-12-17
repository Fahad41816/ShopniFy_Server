import express from 'express' 
import { orderController } from './orders.controller'

const route = express()

route.get('/:userId', orderController.getUserOrders)

export const OrdersRoute = route
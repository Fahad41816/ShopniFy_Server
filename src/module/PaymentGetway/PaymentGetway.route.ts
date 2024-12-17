import express from 'express' 

import { sslcommerz } from './SSLCOMMERZ'

const route = express.Router()

route.post('/sslcommerz', sslcommerz.sslcommerzPaymentProccess)
route.post('/sslcommerz/PaymentSuccess/:tranId', sslcommerz.sslcommerzPaymentSuccess)

  
export const PaymentGetwayRoute = route
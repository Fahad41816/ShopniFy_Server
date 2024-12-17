import express from 'express'
import { ShopController } from './Shop.controller'

const route = express()

route.get("/", ShopController.getAllShopIntoDb)
route.get("/:shopName", ShopController.getSingleShopIntoDb) 
route.get("/vendor/:id", ShopController.getVendorShop)
route.post("/", ShopController.createShopintoDb)
// route.delete("/")
route.patch("/:id", ShopController.updateShopIntoDb)

export const shopRoute = route
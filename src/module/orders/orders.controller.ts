import CatchAsync from "../../utils/CatchAsync";
import { ordersService } from "./orders.service";

const getUserOrders = CatchAsync(async(req, res)=>{

    const userId  = req.params.userId

    const result = await ordersService.getUserOrdersIntoDb(userId)

    res.status(200).json({
        success : true,
        status: 200,
        message: "Orders Data Retrive Successfully!",
        data : result
    })


})

export const orderController = {
    getUserOrders
}
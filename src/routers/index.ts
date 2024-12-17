import { CategoryRoute } from "../module/Categories/Category.route";
import express from 'express'
import { ProductRoute } from "../module/Products/Product.route";
import { UserRoute } from "../module/Users/user.Route";
import { shopRoute } from "../module/Shop/Shop.Route";
import { PaymentGetwayRoute } from "../module/PaymentGetway/PaymentGetway.route";
import { FollowerRoute } from "../module/Followers/followers.route";
import { OrdersRoute } from "../module/orders/orders.route";
import { ReviewRoute } from "../module/Reviews/Review.route";

const route = express.Router()

const Routers = [
    {   
        id: 1,
        path: "/category",
        element: CategoryRoute
    },
    {   
        id: 2,
        path: "/product",
        element: ProductRoute
    },
    {   
        id: 3,
        path: "/auth",
        element: UserRoute
    },
    {   
        id: 4,
        path: "/shop",
        element: shopRoute
    },
    {   
        id: 5,
        path: "/payment",
        element: PaymentGetwayRoute
    },
    {   
        id: 6,
        path: "/Follow",
        element: FollowerRoute
    },
    {   
        id: 7,
        path: "/orders",
        element: OrdersRoute
    },
    {   
        id: 7,
        path: "/reviews",
        element: ReviewRoute
    }
]

Routers.map(data => {
    route.use(data.path, data.element)
})

export default route
import CatchAsync from "../../utils/CatchAsync";
import { reviewService } from "./Reviews.service";

const createReview = CatchAsync(async(req, res)=>{

    const RiviewData = req.body
    console.log(RiviewData)
    const result = await reviewService.createReviewintodb(RiviewData)

    res.status(200).json({
        success: true,
        status: 200,
        message : "Review Created successFully!",
        data :result
    })

})

export const reviewController = {
    createReview
}
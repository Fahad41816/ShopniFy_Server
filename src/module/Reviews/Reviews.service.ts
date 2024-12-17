import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const createReviewintodb = async(reviewData : any) => {
    console.log(reviewData)
    
    const result = await prisma.reviews.create({
        data: reviewData
    })

    return result

}

export const reviewService = {
    createReviewintodb
}
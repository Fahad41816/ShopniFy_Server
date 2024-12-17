import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const CreateFollowShopintoDb = async(followerData : TFollower) => {
    console.log(followerData)
    const  result = await prisma.followers.create({
        data: followerData 
    })

    return result

}

const UnFollowShopIntoDb = async(id : string) => {

    const result = await prisma.followers.delete({
        where:{
            id: id
        }
    })

    return result 

}

export const followerServices = {
    CreateFollowShopintoDb,
    UnFollowShopIntoDb
}
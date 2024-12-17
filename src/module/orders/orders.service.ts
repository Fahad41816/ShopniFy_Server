import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUserOrdersIntoDb = async(userid: string) => {
  const result = await prisma.order.findMany({
    where: {
      userId: userid,
    },
    include:{
        orderItems: {
            include:{
                product: true
            }
        },
        user: true
    }
  });

  return result;
};

 


export const ordersService = {
    getUserOrdersIntoDb
}
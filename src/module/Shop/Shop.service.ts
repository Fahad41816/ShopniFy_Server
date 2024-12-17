import { PrismaClient } from "@prisma/client";
import { TShop } from "./Shop.interface";
const prisma = new PrismaClient();

const createShopintoDb = async (ShopData: TShop) => {
  const Result = await prisma.shop.create({
    data: ShopData,
  });

  return Result;
};

const getAllShopIntoDb = async () => {
  const Result = await prisma.shop.findMany({
    include: {
      products: true,
      vendor: true,
      followers: true
    }
  });

  return Result;
};

const GetVendorShopintoDb = async(vendorId : string)=>{

  const result = await prisma.shop.findFirst({
    where: {
      vendorId: vendorId
    }, 
    include: {
      products: {
        include: {
          Category: true
        }
      }
    }
  })

  return result

}
  
const getSingleShopIntoDb = async (name: string) => {
  const Result = await prisma.shop.findFirst({
    where: {
      name: name,
    },
    include: {
      products: {
        include:{
          shops: true
        }
      },      
      followers: true
    }
  });

  return Result;
};

const updateShopIntoDb = async(id: string,ShopData: Partial<TShop>) => {

    const Result = await prisma.shop.update({
        where:{
            id: id, 
        },
        data: ShopData
    })

    return Result

}

export const ShopServices = {
    createShopintoDb,
    getAllShopIntoDb,
    getSingleShopIntoDb,
    updateShopIntoDb,
    GetVendorShopintoDb
}
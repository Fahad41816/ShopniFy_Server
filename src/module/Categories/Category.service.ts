import { PrismaClient } from "@prisma/client"; 
import CategoryZodValidation from "./category.validation";

const prisma = new PrismaClient();

const createCategoryIntoDb = async (Data: { name: string; image: string }) => {
  
  const Result = await prisma.category.create({
    data: Data,
  });

  return Result;
};

const getAllCategoryIntoDb = async () => {

  const Result = await prisma.category.findMany({
  include: {
    products: true
  }
  });
   
  return Result;
};

export const categoryService = {
  createCategoryIntoDb,
  getAllCategoryIntoDb,
};

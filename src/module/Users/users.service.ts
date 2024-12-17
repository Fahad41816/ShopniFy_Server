import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const CreateUserIntoDb = async (UserData: TUser) => {
  return await prisma.$transaction(async (prisma) => {
    // Create the user
    const Result = await prisma.user.create({
      data: UserData,
    });

    // If the role is vendor, create a shop
    if (UserData.role === "vendor") {
      await prisma.shop.create({
        data: {
          vendorId: Result.id,
          status: "Progress",
        },
      });
    }
 
    return Result; // Return the created user data
  });
};


const LoginUserIntoDb = async (UserData: { email: string, password: string }) => {
  const Result = await prisma.user.findFirst({
    where: {
      email: UserData.email,
    },
    include:{
      shop: true
    }
  });

  return Result;
};

export const userService = {
  CreateUserIntoDb,
  LoginUserIntoDb,
};

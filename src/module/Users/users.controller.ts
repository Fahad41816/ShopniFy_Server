import { PrismaClient } from "@prisma/client";
import createToken from "../../Hook/createToken";
import CatchAsync from "../../utils/CatchAsync";
import { userService } from "./users.service";
import bcrypt from "bcrypt";
const pisma = new PrismaClient();

const CreateUser = CatchAsync(async (req, res) => {
  const IsUserExists = await pisma.user.findFirst({
    where: {
      email: req.body.email,
    },
  });

  if (IsUserExists) {
    res.status(409).json({
      success: true,
      message: "User Allready Exists!",
    });
    return;
  }

  const PassHash = await bcrypt.hash(req.body.password, 10);

  req.body.password = PassHash;

  const Result = userService.CreateUserIntoDb(req.body);

  res.status(200).json({
    success: true,
    message: "User Create SuccessFully!",
    data: Result,
  });
});

const LoginUser = CatchAsync(async (req, res) => {
  const IsExistsUser: any = await userService.LoginUserIntoDb(req.body);

  if (!IsExistsUser) {
    res.status(404).json({
      success: false,
      status: 404,
      message: "Email or password invalid!",
    });
    return;
  }

  const IsPassMatch = await bcrypt.compare(
    req.body.password,
    IsExistsUser?.password
  );

  if (!IsPassMatch) {
    res.status(404).json({
      success: false,
      status: 404,
      message: "Email or password invalid!",
    });
    return;
  }

  const TokenData = {
    name: IsExistsUser.firstName + " " + IsExistsUser.lastName,
    email: IsExistsUser.email,
    role: IsExistsUser.role,
    image: IsExistsUser.image,
  };

  const userToken = await createToken(TokenData);

  res.cookie("Token", userToken, {
    httpOnly: false,   // Accessible by the frontend
    secure: true,      // Use HTTPS in production
    sameSite: 'none', // Prevent CSRF
    maxAge: 3600000,   // Cookie expiry time (1 hour)
  });
  
  const {password, ...data} = IsExistsUser 

  res.status(200).json({
    success: true,
    message: "User login Successfully!", 
    data: data
  });
});

export const userController = {
  CreateUser,
  LoginUser,
};

import CatchAsync from "../../utils/CatchAsync";
import { followerServices } from "./followers.service";

const createFollower = CatchAsync(async (req, res) => {
  const data = req.body;

  const result = await followerServices.CreateFollowShopintoDb(data);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Follow Shop Successfully!",
    data: result,
  });
});

const UnFollowShop = CatchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await followerServices.UnFollowShopIntoDb(id);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "UnFollow Shop Successfully!",
  });
});

export const followerController = {
  UnFollowShop,
  createFollower,
};
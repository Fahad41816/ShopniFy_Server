import CatchAsync from "../../utils/CatchAsync";
import { ShopServices } from "./Shop.service";

const createShopintoDb = CatchAsync(async (req, res) => {
  const ShopData = req.body;

  const Result = await ShopServices.createShopintoDb(ShopData);

  res.status(200).json({
    success: true,
    message: "Shop Create Successfully!",
    data: Result,
  });
});

const getAllShopIntoDb = CatchAsync(async (req, res) => {
  const result = await ShopServices.getAllShopIntoDb();

  res.status(200).json({
    success: true,
    message: "Shops Retrive Successfully!",
    data: result,
  });
});

const getSingleShopIntoDb = CatchAsync(async (req, res) => {
  const shopName = req.params.shopName;
  console.log(shopName)
  const result = await ShopServices.getSingleShopIntoDb(shopName);

  res.status(200).json({
    success: true,
    message: "Shop Retrive Successfully!",
    data: result,
  });
});

const getVendorShop = CatchAsync(async (req, res) => {
  const vendorId = req.params.id; 
  const result = await ShopServices.GetVendorShopintoDb(vendorId);

  res.status(200).json({
    success: true,
    message: "Vendor Shop Retrive Successfully!",
    data: result,
  });
});

const updateShopIntoDb = CatchAsync(async (req, res) => {
  const id = req.params.id;
  const shopData = req.body;

  console.log(id)
  console.log(shopData)

  const Result = await ShopServices.updateShopIntoDb(id, shopData);

  res.status(200).json({
    success: true,
    message: "Shop Update Successfully!",
    data: Result,
  });
});

export const ShopController = {
  createShopintoDb,
  getAllShopIntoDb,
  updateShopIntoDb,
  getSingleShopIntoDb,
  getVendorShop
};

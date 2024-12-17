import CatchAsync from "../../utils/CatchAsync";
import { productService } from "./product.service";

// get all product for homepage 
const getAllProductForHomePage = CatchAsync(async(req, res) => {

  const result = await productService.getProductForHomePage()

  res.status(200).json({
    success: true,
    status: 200,
    message: "Products Retrive Successfully!",
    data: result,
  });

}) 

// get
const getAllProductIntoDb = CatchAsync(async (req, res) => {
 
 const queryOption : any = req.query

  const result = await productService.getAllProductIntoDb(queryOption);

  res.status(200).json({
    success: true,
    status: 200,
    message: "Products Retrive Successfully!",
    data: result,
  });
});

const createProductIntoDb = CatchAsync(async (req, res) => {

  const Result = await productService.createProductIntoDb(req.body);

  res.status(200).json({
    success: true,
    status: 200,
    message: "Create Product Successfully!",
    data: Result,
  });
});

 
// get single
const getSingleDataIntoDb = CatchAsync(async (req, res) => {
  const result = await productService.getSingleDataIntoDb(
    req.params.shopName,
    req.params.productName
  );

  res.status(200).json({
    success: true,
    status: 200,
    message: "Product Retrive Successfully!",
    data: result,
  });
});

// update
const updateProductIntoDb = CatchAsync(async (req, res) => {
  const Result = await productService.updateProductIntoDb(
    req.params.id,
    req.params.shopId,
    req.body
  );

  res.status(200).json({
    success: true,
    status: 200,
    message: "Product update Successfully!",
    data: Result,
  });
});

const DeleteProduct = CatchAsync(async (req, res) => {
  const Result = await productService.DeleteProductIntoDb(req.params.id);

  res.status(200).json({
    success: true,
    status: 200,
    message: "Product Deleted Successfully!",
    data: Result,
  });
});

export const ProductController = {
  updateProductIntoDb,
  getSingleDataIntoDb,
  getAllProductIntoDb,
  createProductIntoDb,
  DeleteProduct,
  getAllProductForHomePage
};

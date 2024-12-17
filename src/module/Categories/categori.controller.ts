import { Request, RequestHandler, Response, NextFunction } from "express";
import { categoryService } from "./Category.service";
import CatchAsync from "../../utils/CatchAsync";

const createCategory = CatchAsync(async (req: Request, res: Response) => {
  const Result = await categoryService.createCategoryIntoDb(req.body);

  res.status(200).json({
    success: true,
    message: "Category Data add Successfully!",
    data: Result,
  });
});

const getAllCategory = CatchAsync(async (req, res) => {
  const Result = await categoryService.getAllCategoryIntoDb();

  res.status(200).json({
    success: true,
    message: "Category Data Retrive Successfully!",
    data: Result,
  });
});

export const CategoryController = {
  createCategory,
  getAllCategory,
};

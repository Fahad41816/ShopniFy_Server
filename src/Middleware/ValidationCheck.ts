import { NextFunction, Request, Response } from "express";
import {  ZodSchema } from "zod";

const ValidationChecker = (Schema : ZodSchema) => {

    return async(req: Request, res: Response, next: NextFunction) => {
      try {
       await Schema.parse(req.body)
       next()
      } catch (error) {
        next(error)
      }
    }
 
}

export default ValidationChecker
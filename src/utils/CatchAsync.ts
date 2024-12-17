import { NextFunction, Request, RequestHandler, Response } from "express"

const CatchAsync = (fn: RequestHandler) => {
    return async(req : Request, res: Response, next:NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch((err) =>{
            res.status(404).json({
                success: false,
                message:  err.message || "Something Wrong!",
                status: 404
            })
        })
    }
}
export default CatchAsync
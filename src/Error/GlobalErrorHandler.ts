import {  NextFunction, Request, Response } from "express"

const GlobalErrorHandler = async(err : any, req: Request, res: Response, next: NextFunction) => {

     res.status(400).json({
        success: false,
        status:400,
        message: err?.message ||  "Something Wrong!"
     })

}

export default GlobalErrorHandler
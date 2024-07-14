
import {Request, Response, NextFunction} from 'express'

const errorMiidleware = (
    err:any,
    req:Request,
    res:Response,
    next:NextFunction
)=>{
const status = err.status || 500
const message = err.message || 'Internal Server Error'
res.status(status).json({message})
}
export default errorMiidleware
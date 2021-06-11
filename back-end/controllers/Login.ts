import Controller from "./Controller"
import { Request, Response } from "express"

export default class Login extends Controller{
    
    constructor(req: Request, res:Response){
        super(req, res);
    }

   get main(){
       return this.res.json({
           message:"hello world"
       })
   }
}
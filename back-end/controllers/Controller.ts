
import { Request, Response } from "express"

export default class Controller {
   
    constructor(public req:Request, public res:Response){
        this.req = req;
        this.res = res;
    }

    public post() {}

    public delete() {}

    public update() {}

    public get() {}
}
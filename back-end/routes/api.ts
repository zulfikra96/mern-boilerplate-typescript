import app from "express"
const route = app.Router()

route.get("/",(req: app.Request , res: app.Response) => res.json({message:"hello world"}) )

export default route
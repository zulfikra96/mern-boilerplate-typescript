import app from "express"
import AddUser from "../../controllers/AddUser"
import GetUsers from "../../controllers/GetUsers";
const route = app.Router()

route.route("/")
    .post((req,res) => new AddUser(req,res).main)
    .get((req,res) => new GetUsers(req,res).main)

export default route
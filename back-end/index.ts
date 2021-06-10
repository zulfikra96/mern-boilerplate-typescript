import express, { Express } from "express";
import * as dotenv from "dotenv"
import route from "./routes/api";
dotenv.config();
const app:Express = express();
app.use("/", route);
const PORT: any = process.env.port || 4000;

app.listen(PORT, () => console.log("app run on ", PORT));
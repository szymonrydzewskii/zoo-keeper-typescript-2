import express, {Application, Request, Response} from "express";
import router from "./routes/animals.routes"
const app: Application = express()

app.use(express.json())

app.use("/", router);




export default app
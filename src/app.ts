import express, {Application, Request, Response} from "express";
import router from "./routes/animals.routes"
const app: Application = express()

app.use(express.json())

app.use("/", router);
app.use("/:id", router);
app.post("/", router);
app.put("/:id", router);



export default app
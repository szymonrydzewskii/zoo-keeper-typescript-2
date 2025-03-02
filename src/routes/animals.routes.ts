import AnimalsControllers from "../controllers/animals.controllers";
import express, {Request, Response} from "express";

const router = express.Router()

router.get("/", AnimalsControllers.getAllAnimals);


export default router;
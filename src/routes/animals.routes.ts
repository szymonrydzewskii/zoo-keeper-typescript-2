import AnimalsControllers from "../controllers/animals.controllers";
import express, {Request, Response} from "express";

const router = express.Router()

router.get("/", AnimalsControllers.getAllAnimals);
router.get("/:id", AnimalsControllers.getAnimalById)


export default router;
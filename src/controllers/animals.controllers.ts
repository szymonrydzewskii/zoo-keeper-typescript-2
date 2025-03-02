import {Request, Response} from "express";
import {animalService} from "../services/animals.service";

class AnimalsControllers{
    static getAllAnimals = (req: Request, res: Response) => {
        const animals = animalService.getAllAnimals()
        res.json({message: "All animals", animals: animals})
    }
}

export default AnimalsControllers;
import {Request, Response} from "express";
import {animalService} from "../services/animals.service";

class AnimalsControllers{
    static getAllAnimals = (req: Request, res: Response) => {
        const animals = animalService.getAllAnimals()
        res.json({message: "All animals", animals: animals})
    }

    static getAnimalById = (req: Request, res: Response) => {
        const userId = parseInt(req.params.id)
        const user = animalService.getAnimalById(userId)

        if(!user){
            res.status(400).json({message: "User not found"})
        }
        res.json({message: "User found", user: user})

    }
}

export default AnimalsControllers;
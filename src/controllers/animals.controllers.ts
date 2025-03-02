import {Request, Response} from "express";
import {animalService} from "../services/animals.service";

class AnimalsControllers{
    static getAllAnimals = (req: Request, res: Response) => {
        const animals = animalService.getAllAnimals()
        res.json({message: "All animals", animals: animals})
    }

    static getAnimalById = (req: Request, res: Response) => {
        const animalId = parseInt(req.params.id)
        const animal = animalService.getAnimalById(animalId)

        if(!animal){
            res.status(400).json({message: "Animal not found"})
        }
        res.json({message: "Animal found", animal: animal})
    }

    static createAnimal = (req: Request, res: Response) => {
        const {name, species, age, isEndangered, habitat} = req.body;
        if(!name || !species || !age || !isEndangered || !habitat){
            res.status(400).json({message: "Missing required field"})
            return
        }
        const newAnimal = animalService.createAnimal(name, species, age, isEndangered, habitat)
        res.status(200).json({message: "A new animal added", animal: newAnimal})
    }

    static updateAnimal = (req: Request, res: Response) : void => {
        const animalId: number = parseInt(req.params.id)
        console.log(`to jest id= ${animalId}`)
        const {name, species, age, isEndangered, habitat} = req.body

        if (!name || !species || !age || !isEndangered || !habitat) {
            res.status(400).json({message: "Missing required field"})
            return
        }

        const updatedAnimal = animalService.updateAnimal(animalId, name, species, age, isEndangered, habitat)
        if(!updatedAnimal){
            res.status(400).json({message: "Animal not found"})
        }

        res.status(200).json({message: "Animal updated", animal: updatedAnimal})
    }
}

export default AnimalsControllers;
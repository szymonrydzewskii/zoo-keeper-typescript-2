import {Animal} from "../models/Animal";

class AnimalService {
    private animals: Array<Animal> = [
        { "id": 1, "name": "Simba", "species": "Lion", "age": 5, "isEndangered": true, "habitat": "Savanna" },
        { "id": 2, "name": "Simba", "species": "Lion", "age": 5, "isEndangered": true, "habitat": "Savanna"},
        { "id": 3, "name": "Dory", "species": "Fish", "age": 2, "isEndangered": false, "habitat": "Ocean"},
        { "id": 4, "name": "Nala", "species": "Lion", "age": 4, "isEndangered": true, "habitat": "Savanna"},
        { "id": 5, "name": "Fafik", "species": "Dog", "age": 4, "isEndangered": false, "habitat": "Home"}
    ]

    getAllAnimals(): Array<Animal> {
        return this.animals
    }
}

export const animalService = new AnimalService()
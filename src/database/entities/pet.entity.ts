import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";

export enum animalType {
    CAT = 'cat',
    DOG = 'dog',
    BIRD = 'bird',
    OTHER = 'other'
}

@Entity({name: 'pets'})
export class Pet {
    @PrimaryGeneratedColumn({type: "integer"})
    id: number

    @Column({type: "varchar", length: 100})
    name: string

    @Column({
        name: 'animalType',
        type: 'enum',
        enum: [
            animalType.CAT,
            animalType.DOG,
            animalType.BIRD,
            animalType.OTHER
        ],
        enumName: 'animalTypeEnum',
        default: 'other' // here, I used single quotes
    })
    animalType: animalType

    @Column({type: "varchar", length: 100})
    animalBreed: string

    @Column({type: "varchar", length: 100})
    color: string

    @Column({type: "integer"})
    age: number

}

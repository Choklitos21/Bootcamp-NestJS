import {IsNotEmpty, IsString, IsNumber, IsArray, IsEnum} from 'class-validator';
import {animalType} from "../../database/entities/pet.entity";

export class CreatePetDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsEnum(animalType)
    animalType: animalType

    @IsString()
    @IsNotEmpty()
    animalBreed: string

    @IsString()
    @IsNotEmpty()
    color: string

    @IsNumber()
    @IsNotEmpty()
    age: number

}
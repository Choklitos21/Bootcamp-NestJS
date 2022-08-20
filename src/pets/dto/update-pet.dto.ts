import { PartialType } from '@nestjs/mapped-types';
import { CreatePetDto } from './create-pet.dto';
import {IsEnum, IsOptional, IsString} from "class-validator";
import {animalType} from "../../database/entities/pet.entity";

export class UpdatePetDto extends PartialType(CreatePetDto) {
    @IsOptional()
    @IsString()
    name: string

    @IsOptional()
    @IsEnum(animalType)
    animalType: animalType

    @IsOptional()
    @IsString()
    animalBreed: string

    @IsOptional()
    @IsString()
    color: string

    @IsOptional()
    @IsString()
    age: number
}

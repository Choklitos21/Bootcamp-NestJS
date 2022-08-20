import {
  BadGatewayException,
  Injectable,
  InternalServerErrorException,
  NotFoundException
} from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Pet } from "../database/entities/pet.entity";

@Injectable()
export class PetsService {
  constructor(
      @InjectRepository(Pet)
      private readonly petRepository: Repository<Pet>,
  ) {}

  async createPet(createPetDto: CreatePetDto) {
    try {
      const newPet = this.petRepository.create(createPetDto)
      await this.petRepository.save(newPet)
      return newPet;
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException('unhandled error');
    }
  }

  async findAllPets(): Promise<Pet[]> {
    return await this.petRepository.find()
  }

  async findOnePet(id: number): Promise<Pet> {
    const pet = await this.petRepository.findOne({where: {id} })

    if(!pet) {
      throw new NotFoundException('Pet not found')
    }

    return pet
  }

  async updatePet(id: number, petData: UpdatePetDto): Promise<Pet> {

    const pet = await this.petRepository.findOne({where: {id} })

    if (!pet) {
      throw new BadGatewayException('User not found')
    }

    const updatedPet = Object.assign(pet, petData)

    return await this.petRepository.save(updatedPet)

  }

  async deletePetById(id: number) {
    const petInfo = await this.petRepository.findOne({where: {id} })

    if (!petInfo) {
      throw new BadGatewayException('Pet not found')
    }
    const log = await this.petRepository.delete(id)
    console.log('Pet data deleted \n' + JSON.stringify(petInfo))
    return log
  }

}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import {DeleteResult} from "typeorm";

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  create(@Body() createPetDto: CreatePetDto) {
    return this.petsService.createPet(createPetDto);
  }

  @Get('')
  findAllPets() {
    return this.petsService.findAllPets();
  }

  @Get(':petId')
  findOne(@Param('petId') petId: number) {
    return this.petsService.findOnePet(+petId);
  }

  @Patch(':petId')
  update(@Param('petId') petId: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petsService.updatePet(+petId, updatePetDto);
  }

  @Delete(':petId')
  remove(@Param('petId') petId: number): Promise<DeleteResult> {
    return this.petsService.deletePetById(+petId);
  }
}

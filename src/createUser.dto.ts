import {
    IsEmail,
    IsInt,
    IsNotEmpty,
    IsString,
    MaxLength,
    Min,
    MinLength
} from "class-validator";
import {Expose} from "class-transformer";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @Expose()
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @MaxLength(250)
    @Expose()
    address: string;

    @IsNotEmpty()
    @IsEmail()
    @Expose()
    email: string;

    @IsNotEmpty()
    @IsInt()
    @Min(18)
    @Expose()
    age: number;
}
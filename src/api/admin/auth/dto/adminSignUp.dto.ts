import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsEmail, IsNotEmpty, Min, MinLength } from "class-validator";
import { SignUpDto } from "src/core/authentication/signUp.dto";

export class AdminSignUpDto extends SignUpDto {
    
}
import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class SignUpDto {
   @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    public email: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @MinLength(8, {message: "Password cannot be less than 8"})
    @IsAlphanumeric()
    public password: string;

    @ApiProperty()
    @IsNotEmpty() 
    @IsAlphanumeric()
    public username: string;

    
 }
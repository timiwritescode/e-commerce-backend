import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsEmail, IsNotEmpty, MinLength } from "class-validator";


/**
 * Class proivdes a base validation class for the signup dto 
 * across the three modules of admin, agent and customer
 * to eliminate redundancy. Each sign up flow can extend class
 * with custom functionalities as needed
 */
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
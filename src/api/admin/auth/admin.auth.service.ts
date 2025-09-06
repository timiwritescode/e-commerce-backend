import { Injectable } from "@nestjs/common";
import { SignUpService } from "src/core/authentication/signup.service";
import { AdminSignUpDto } from "./dto/adminSignUp.dto";
import { UserRole } from "src/core/users/UserRole";
import { SuccessResponse } from "src/shared/dtos/sucessResponse";
import { UserDto } from "src/core/users/user.dto";

@Injectable()
export class AdminAuthService {
    constructor(
        private readonly registerUserService: SignUpService
    ) {}

    async signUpUser(dto: AdminSignUpDto): Promise<SuccessResponse<UserDto>> {
        const user = await this.registerUserService.signUpUser(UserRole.USER, dto);
       
       // TODO: Add an event and a listener that will send user created event
        return new SuccessResponse(
            "User created successfully",
            user
        )

        
    }
}
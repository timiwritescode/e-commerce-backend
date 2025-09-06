import { Body, Controller, Post } from "@nestjs/common";
import { AdminAuthService } from "./admin.auth.service";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { AdminSignUpDto } from "./dto/adminSignUp.dto";

@Controller("/admin/auth")
@ApiTags("Admin-Auth")
export class AdminAuthController {
    constructor(
        private readonly service: AdminAuthService
    ) {};


    @Post("/sign-up")
    @ApiBody({type: AdminSignUpDto})
    private async signUpUser(@Body() reqBody: AdminSignUpDto) {
        return await this.service.signUpUser(reqBody);
    }
}
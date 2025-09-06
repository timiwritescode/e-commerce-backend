import { Module } from "@nestjs/common";
import { AdminAuthController } from "./admin.auth.controller";
import { AdminAuthService } from "./admin.auth.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/core/users/user.entity";
import { Role } from "src/core/users/role.entity";
import { SignUpService } from "src/core/authentication/signup.service";
import { UserService } from "src/core/users/user.service";
import { FirebaseConfigService } from "src/configs/firebase.config";

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Role])
    ],
    controllers: [AdminAuthController],
    providers: [
        AdminAuthService, 
        SignUpService, 
        UserService,
        FirebaseConfigService]
})
export class AdminAuthModule {}
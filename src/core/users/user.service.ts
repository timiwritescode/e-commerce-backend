import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { UserRole } from "./UserRole";
import { SignUpDto } from "../authentication/signUp.dto";
import { Role } from "./role.entity";
import { UserDto } from "./user.dto";
import { generateUserId } from "./util";
import { UserIDPrefixes } from "./userPrefix";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,

        @InjectRepository(Role)
        private readonly roleRepo: Repository<Role>
    ) {}

    async createUser(role: UserRole, firebaseId: string, dto: SignUpDto): Promise<UserDto> {
        // create role
        const roleInDb = await this.roleRepo.find({
            where: {name: role}
        })
        let userId: string;

        userId = this.setUserId(role, userId);
        console.log(dto.email);
        const newUser = this.userRepository.create({
            email: dto.email,
            username: dto.username,
            fireBaseAuthId: firebaseId,
            roles: roleInDb,
            publicId: userId
        
        })

        const savedUser = await this.userRepository.save(newUser);
        return new UserDto(savedUser);
    }

    private setUserId(role: UserRole, userId: string) {
        switch (role) {
            case UserRole.USER:
                userId = generateUserId(UserIDPrefixes.ADMIN);
                break;
            case UserRole.AGENT:
                userId = generateUserId(UserIDPrefixes.AGENT);
                break;

            default:
                userId = generateUserId(UserIDPrefixes.CUSTOMER);
                break;
        }
        return userId;
    }
}

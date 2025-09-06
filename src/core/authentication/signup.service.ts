import { BadRequestException, ConflictException, Injectable } from "@nestjs/common";
import { UserService } from "../users/user.service";
import { FirebaseConfigService } from "src/configs/firebase.config";
import { UserRole } from "../users/UserRole";
import { SignUpDto } from "./signUp.dto";
import { UserDto } from "../users/user.dto";
import { QueryFailedError } from "typeorm";


/**
 * Class provides service to handle sign up flow across admin, agent and customer module
 * to reduce redundacy of the same flow across the three moduless
 */
@Injectable()
export class SignUpService {
    constructor(
        private readonly userService: UserService,
        private firebaseConfig: FirebaseConfigService,
      
    ) {}


    async signUpUser(role: UserRole, dto: SignUpDto): Promise<UserDto> {
        try {
            const app = this.firebaseConfig.getApp();
            
            // new firebase user
            const newUser = await app
                            .auth()
                            .createUser({
                                email: dto.email, 
                                password: dto.email, 
                                displayName: dto.email})
        await app.auth().setCustomUserClaims(newUser.uid, {role: [role]})
        
        // persist firebase user to app db
        const user = await this.userService.createUser(role, newUser.uid, dto)
        return user;
    } catch (error) {
                         const errors = {
                "auth/email-already-exists": () => {throw new ConflictException("Email already exists")},
                'auth/invalid-password': () => {throw new BadRequestException('Password is too weak or invalid')},
                "auth/invalid-email": () => {throw new BadRequestException('Invalid email format')}, 
                 }
                 
            const mappedError = errors[error.code];
            // TODO: If email does not exist in local dn, persist that user to db:
            // if error = auth/email-already-exists
            // can do that with an event handler
            
            if (mappedError) return mappedError();
            // if (error instanceof QueryF)
            if (error.code === '23505' && (error instanceof QueryFailedError) ) {
                // TODO: implement roll back mechanism that deletes that email from data base
            }
            // logging and error is handled in global exception filter
            throw error;
        }
    }
}
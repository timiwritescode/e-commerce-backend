import { User } from "./user.entity";

export class UserDto {
    id: string;
    publicId: string;
    username: string;
    email: string;
    roles: string[]
    
    constructor(user: User) {
        this.publicId = user.publicId;
        this.email = user.email;
        this.username = user.username;
        this.roles = user.roles.length > 0 ? 
                            user.roles.map(role => role.name):
                            [];
        
    }

    
}
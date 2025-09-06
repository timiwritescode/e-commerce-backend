import { 
    Column, 
    Entity, 
    ManyToMany, 
    PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { UserRole } from "./UserRole";

@Entity("roles")
export class Role {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        type: 'enum', 
        enum: UserRole,
        unique: true})
    name: UserRole;

    @ManyToMany(() => User, (user) => user.roles)
    users: User[];
}
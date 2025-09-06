import { BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Role } from "./role.entity";
import {v4 as uuidv4} from "uuid";


@Entity("users")
export class User {
    @PrimaryColumn()
    id : string;

    @Column({nullable: false, unique: true})
    publicId: string;

    @Column({nullable: false, unique: true})
    email: string;

    @Column({nullable: false})
    username: string;

    @Column({nullable: false, unique: true})
    fireBaseAuthId: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToMany(() => Role, (role) => role.users, {cascade: true})
    @JoinTable()
    roles: Role[]; 

    @BeforeInsert()
    private setFields() {
        this.id = uuidv4();
    }
}
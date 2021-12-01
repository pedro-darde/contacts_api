import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {UniqueValidator} from "../validators/unique-constraint";

@Entity("users")
export class UserModel {
    @PrimaryGeneratedColumn("increment")
    id?: number

    @Column()
    nome: string

    @Column()
    @UniqueValidator(UserModel, {
        message: "Este nome de usuário já esta sendo utilizado $value",
    })
    usuario: string

    @Column()
    senha: string
}

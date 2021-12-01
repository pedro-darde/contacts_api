import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {IsEmail} from "class-validator";

@Entity("contacts")
export class ContactModel {
    @PrimaryGeneratedColumn("identity")
    id?: number;

    @Column()
    nome: string

    @Column()
    sobrenome: string

    @Column()
    telefone: string

    @Column()
    dataNascimento: Date

    @Column()
    endereco: string

    @Column()
    @IsEmail({}, {message: "O campo email informado não é válido $value"})
    email: string

}

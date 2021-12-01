import {UserModel} from "../../models/user.model";

export type UserModelRepository = {
    id?: number
    usuario: string
    nome: string
    senha: string
}

export type User = Omit<UserModelRepository, "id">

export interface AddUserRepository {
    add(user: UserModel): Promise<UserModelRepository>
}

import { AbstractRepository, EntityRepository } from "typeorm";
import { UserModel } from "../models/user.model";
import {
  AddUserRepository,
  User,
  UserModelRepository,
} from "./usecase/add-user-repository";

@EntityRepository(UserModel)
export class UserRepository
  extends AbstractRepository<UserModel>
  implements AddUserRepository
{
  async add(user: UserModel): Promise<UserModelRepository> {
    await this.repository.save(user);
    return user;
  }

  async findOneOrFail(usuario: string) {
    return await this.repository.findOneOrFail({ where: { usuario } });
  }

  toModelType(user: User): UserModel {
    return this.repository.create(user);
  }
}

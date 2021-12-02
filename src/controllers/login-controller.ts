import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/user-repository";
import bcrypt from "bcrypt";
export default {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { user } = req.body;
      const customRepo = getCustomRepository(UserRepository);

      const authUser = await customRepo.findOneOrFail(user.usuario);

      let isValid = await bcrypt.compare(user.senha,authUser.senha);
      if (!isValid) {
        return res.status(400).json({
          message: "Informações incorretas",
          errors: ["Senha incorreta"],
        });
      }

      return res.status(201).json({ success: true });
    } catch (err) {
      next(err);
    }
  },
};

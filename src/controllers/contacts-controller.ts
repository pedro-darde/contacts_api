import { Request, Response, NextFunction } from "express";
import { ContactRepository } from "../repository/contact-repository";
import { getCustomRepository } from "typeorm";
import BeforeInsertUpdateHelper from "../helpers/before-insert-update-helper";

export default {
  async add(req: Request, res: Response, next: NextFunction) {
    try {
      const { contact } = req.body;

      const customRepository = getCustomRepository(ContactRepository);
      const modeledObject = await customRepository.toModelType(contact);

      // Validação do email
      await BeforeInsertUpdateHelper.ContactbeforeInsertOrUpdateValidation(
        modeledObject
      );

      const contactModel = await customRepository.add(modeledObject);

      return res.status(201).json({ contactModel });
    } catch (err) {
      next(err);
    }
  },
  async edit(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { contact } = req.body;

      const customRepository = getCustomRepository(ContactRepository);
      const modeledObject = await customRepository.toModelType(contact);

      // Validação do email
      await BeforeInsertUpdateHelper.ContactbeforeInsertOrUpdateValidation(
        modeledObject
      );

      await customRepository.edit(parseInt(id), modeledObject);

      return res
        .status(200)
        .json({ message: "Informações atualizadas com sucesso" });
    } catch (err) {
      next(err);
    }
  },
  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const customRepo = getCustomRepository(ContactRepository);

      const contact = await customRepo.getOne(parseInt(id));

      return res.status(201).json({ contact });
    } catch (e) {
      next(e);
    }
  },
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const customRepository = getCustomRepository(ContactRepository);
      const contacts = await customRepository.list();

      return res.status(201).json({ contacts });
    } catch (err) {
      next(err);
    }
  },

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const customRepository = getCustomRepository(ContactRepository);

      await customRepository.remove(parseInt(id));

      return res.status(201).json({ok : true})
    } catch (e) {
      next(e);
    }
  },
};

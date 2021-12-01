import {Request, Response, NextFunction} from 'express'
import {getCustomRepository} from "typeorm";
import {UserRepository} from "../repository/user-repository";
import BeforeInsertUpdateHelper from '../helpers/before-insert-update-helper'
import bcrypt from 'bcrypt'

export default {
    async add(req: Request, res: Response, next: NextFunction) {
        try {
            const {user} = req.body
            const customRepo = getCustomRepository(UserRepository)

            const modeledObject = customRepo.toModelType(user)

            modeledObject.senha = bcrypt.hashSync(modeledObject.senha, bcrypt.genSaltSync(12))

            await BeforeInsertUpdateHelper.UserbeforeInsertValidation(modeledObject)

            const userModel = await customRepo.add(modeledObject)

            return res.status(201).json({userModel})
        } catch (e) {
            next(e)
        }
    }
}

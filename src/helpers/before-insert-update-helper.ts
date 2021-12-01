import {validate} from "class-validator";
import {ValidationException} from "../errors/ValidationException";
import {ContactModel} from "../models/contact.model";
import {UserModel} from "../models/user.model";

export default {
    async ContactbeforeInsertOrUpdateValidation(contactModel: ContactModel) {
        let errors = await validate(contactModel, {stopAtFirstError: false})
        if (errors.length) {
            throw new ValidationException(errors);
        }
    },

    async UserbeforeInsertValidation(user: UserModel) {
        let errors = await validate(user, {stopAtFirstError: false})
        if (errors.length) {
            throw new ValidationException(errors)
        }
    }
}

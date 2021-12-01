import { ErrorRequestHandler } from "express";
import { EntityNotFoundError } from "typeorm";
import { ValidationException } from "./ValidationException";

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    if (error instanceof ValidationException) {
        let errors: Array<string> = [];
        error.errors.forEach((err) => {
            const { constraints } = err;
            /* @ts-ignore*/
            errors.push(Object.values(constraints)[0]);
        });

        return response
            .status(422)
            .json({ message: "Validation error", errors: errors });
    }

    if (error instanceof EntityNotFoundError) {
        return response.status(422).json({
            message: "Entity not found",
            errors: ["Não foi possível localizar o registro solicitado."],
        });
    }
    console.log(error.message);

    return response.status(500).json({ message: "Internal server error" });
};

export default errorHandler;

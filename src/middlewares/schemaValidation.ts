import { errors } from "@/errors/errors";
import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export function validateSchema(schema: ObjectSchema) {

    return (req: Request, res: Response, next: NextFunction) => {

        const validation = schema.validate(req.body, { abortEarly: false });

        if (validation.error) {
            let errorMessage = "";
            validation.error.details.forEach(det => errorMessage += det.message + " ");

            throw errors.joi(errorMessage);
        }

        next();
    }
}
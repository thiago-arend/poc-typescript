import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ApplicationError } from "@/protocols/protocols";

export default function errorHandler(error: ApplicationError | Error, req: Request, res: Response, next: NextFunction) {
    //console.log(error);

    if (error.name === "joiError") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    }

    if (error.name === "conflictError") {
        return res.status(httpStatus.CONFLICT).send(error.message);
    }

    if (error.name === "notFoundError") {
        return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong!");
}
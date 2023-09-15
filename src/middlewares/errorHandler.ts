import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ApplicationError } from "@/protocols/protocols";

export default function errorHandler(error: ApplicationError | Error, req: Request, res: Response, next: NextFunction) {
    console.log(error);

//    if (error.name === "databaseNotPopulated") {
//        return res.status(httpStatus.SERVICE_UNAVAILABLE).send(error.message);
//    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong!");
}
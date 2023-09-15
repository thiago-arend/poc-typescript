import { CreateBook } from "@/protocols/protocols";
import Joi from "joi";

export const bookSchema = Joi.object<CreateBook>({
    title: Joi.string().required(),
	author: Joi.string().required(),
	year: Joi.number().integer().min(1800).max(2023).required(),
	publisher: Joi.string().required(),
});
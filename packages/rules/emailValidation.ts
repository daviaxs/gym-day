import { z } from "zod";

export const emailValidation = z.string().email('E-mail inválido')
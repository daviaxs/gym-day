import { z } from "zod";

export const passwordValidation = z.string().min(6, 'A senha precisa de no mínimo 6 caracteres')
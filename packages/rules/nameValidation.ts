import { z } from 'zod'

export const nameValidation = z
  .string()
  .min(3, { message: 'O nome precisa ter no mínimo 3 caracteres' })
  .max(20, { message: 'O nome precisa ter no máximo 20 caracteres' })
  .transform((name) => {
    return name
      .trim()
      .split(' ')
      .map((word) => {
        return word[0]
          .toLocaleUpperCase()
          .concat(word.substring(1).toLocaleLowerCase())
      })
      .join(' ')
  })
  .refine((value) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/.test(value), {
    message: 'O nome não pode conter números ou caracteres especiais',
  })
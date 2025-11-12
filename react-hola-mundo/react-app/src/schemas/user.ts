import { z } from 'zod';

export const userSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Campo requerido" })
        .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
    lastname: z
        .string()
        .min(1, { message: "Campo requerido" })
        .min(3, { message: "El apellido debe tener al menos 3 caracteres" }),
});

export type userForm = z.infer<typeof userSchema>;
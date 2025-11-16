import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Nombre requerido").min(3, "Mínimo 3 caracteres"),
  lastname: z
    .string()
    .min(1, "Apellido requerido")
    .min(3, "Mínimo 3 caracteres"),
  email: z.string().min(1, "Correo requerido").email("Correo inválido"),
});

export type Contact = z.infer<typeof contactSchema> & { id: string };

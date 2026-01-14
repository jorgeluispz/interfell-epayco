import { z } from "zod";

export const postFormSchema = z.object({
  title: z
    .string()
    .min(1, "El título es requerido")
    .min(3, "El título debe tener al menos 3 caracteres")
    .max(100, "El título no puede exceder 100 caracteres"),
  body: z
    .string()
    .min(1, "El contenido es requerido")
    .min(10, "El contenido debe tener al menos 10 caracteres")
    .max(1000, "El contenido no puede exceder 1000 caracteres"),
  userId: z
    .number()
    .int("El ID de usuario debe ser un número entero")
    .positive("El ID de usuario debe ser positivo")
    .min(1, "El ID de usuario debe ser al menos 1"),
});

export type PostFormData = z.infer<typeof postFormSchema>;

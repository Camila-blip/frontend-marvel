import { z } from "zod";

export const RecoverPasswordSchema = z.object({
    email: z
        .string()
        .email("Invalid email!")
        .min(1, { message: "Email is required!" }),
});

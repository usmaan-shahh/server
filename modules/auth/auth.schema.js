import * as z from "zod";

export const registerSchema = z.object({

    name: z
        .string()
        .min(2, "Name must be at least 2 characters long")
        .max(30),

    email: z.string()
        .email()
        .transform(value => value.toLowerCase().trim()),

    password: z
        .string()
        .min(8, "password must be at least 8 characters long")
        .regex(/[A-Z]/, "password must contain at least one uppercase letter")
        .regex(/[a-z]/, "password must contain at least one lowercase letter")
        .regex(/[0-9]/, "password must contain at least one number")
});


export const loginSchema = z.object({

    email: z
        .string()
        .email({ pattern: z.regexes.email })
        .transform(value => value.toLowerCase().trim()),

    password: z
        .string()


});
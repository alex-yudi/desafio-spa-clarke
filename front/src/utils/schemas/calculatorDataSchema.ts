import { z } from "zod";

const valueKw = z
    .string({
        required_error: "Por favor, forneça um valor",
    })
    .transform((val, ctx) => {
        const parsed = parseInt(val);
        if (isNaN(parsed) || parsed <= 0) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Forneça um valor válido",
            });
            return z.NEVER;
        }
        return parsed;
    });

export const SchemaCalculatorData = z.object({
    valueKw,
});
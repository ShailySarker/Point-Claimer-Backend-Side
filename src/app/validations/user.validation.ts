import z from "zod";

export const userSchema = z.object({
    name: z
        .string({ message: "Name must be a string!" })
        .min(2, { message: "Name must be at least 2 characters long." })
        .max(50, { message: "Name cannot exceed 50 characters." }),
    points: z
        .number({ message: "Point must be a number" })
        .int({ message: "Point must be a positive number" })
        .min(0, { message: "Point must be a positive number" })
        .default(0),
});
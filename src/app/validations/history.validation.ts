import z from "zod";

export const historyValidation = z.object({
    userId: z
        .string({ message: 'User ID is required' })
    // .min(1, 'User ID is required')
    ,
    points: z
        .number({ message: "Point must be a number" })
        .int({ message: "Point must be a positive number" })
        .min(1, { message: "Point value must be at least 1" })
    //   .max(10),
});
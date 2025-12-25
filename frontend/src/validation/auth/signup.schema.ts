// register schema
import {z} from "zod";

export const signUpSchema = z.object({
   username: z.string().min(5, "Username too short"),
   email: z.string().email("Invalid email"),
   password: z.string().min(6, "Password min 6 characters")
})

export type SignUpForm = z.infer<typeof signUpSchema>;
// login schema 
import {z} from "zod";

export const loginSchema = z.object({
   username: z.string().min(5, "Username too short"),
   password: z.string().min(6, "Password min 6 characters")
})

export type loginForm = z.infer<typeof loginSchema>;
// create-user.dto.ts create user 

import {z}  from "zod";

export const createUserDTO = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
});

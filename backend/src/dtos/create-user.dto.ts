// create-user.dto.ts create user 

import {z}  from "zod";

export const createUserDTO = z.object({
    username: z.string().min(5),
    email: z.string().email(),
    password: z.string().min(6),
});

//update user dto

import {z}  from "zod";

export const updateUserDTO = z.object({
    username: z.string().optional(),
    email: z.string().email().optional(),
});
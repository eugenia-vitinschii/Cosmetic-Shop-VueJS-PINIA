// admin-update-user.dto.ts update role: admin

import {z}  from "zod";

export const adminUpdateUserDTO = z.object({
    username: z.string().optional(),
    email: z.string().optional(),
    role: z.enum(["user", "admin"]).optional(),
});
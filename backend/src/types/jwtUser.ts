//jwt user

import { JwtPayload } from "jsonwebtoken";


export interface JwtUser extends JwtPayload{
   id: string;
   role: "admin" | "user"
}
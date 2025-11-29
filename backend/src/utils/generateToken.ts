// generate token

import jwt from "jsonwebtoken";

export const generateToken =  (_id: string, role: "admin"| "user") => {
   return jwt.sign( {_id, role}, process.env.JWT_SECRET as string, { expiresIn: "7d"})
}
// // adminMiddleware.ts

import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";

//type for user
interface CustomUser extends JwtPayload{
   id: number;
   role: "admin" | "user"
}

interface CustomRequest extends Request{
   user?: CustomUser
}

export const adminMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {

   if(!req.user ){
      return res.status(401).json({message: "Not authenticated"})
   }

   if(req.user.role  !== "admin"){
      return res.status(403).json({ message: "Acces denied"})
   }
   next();
}


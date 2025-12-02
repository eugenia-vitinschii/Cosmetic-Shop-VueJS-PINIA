// adminMiddleware.ts

import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";


export const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {

   if(!req.user ){
      return res.status(401).json({message: "Not authenticated"})
   }

   if(req.user.role  !== "admin"){
      return res.status(403).json({ message: "Acces denied"})
   }
   next();
}


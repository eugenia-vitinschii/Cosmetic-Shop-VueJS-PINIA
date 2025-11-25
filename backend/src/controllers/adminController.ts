//adminController.ts

import { Request, Response } from "express";

export const adminInfo = (req: Request, res: Response) =>{
   res.json({ message: "Admin acces granted", user: (req as any).user})
}
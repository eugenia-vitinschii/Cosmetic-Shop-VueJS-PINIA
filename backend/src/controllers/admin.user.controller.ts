//admin.user.controller.ts (edit all users, roles)

import { Request, Response} from "express";
import { userService } from "../services/user.service";

class AdminUserControlller {
   async getAll(req: Request, res:Response){
      try{
         const users = await userService.getAll();
         return res.json(users);         
      }catch(err){
         return res.status(500).json({message: "Server error"})
      }

   }

   async getById(req: Request, res:Response){
      const user = await userService.getById(req.params.id);
      return res.json(user)
   }

   async create(req: Request, res:Response) {
      const newUser = await userService.create(req.body);
      return res.status(201).json(newUser);
   }

   async update(req: Request, res:Response){
      const updated = await userService.update(req.params.id, req.body);
      return res.json(updated);
   }

   async delete(req: Request, res:Response){
      const deleted = await userService.delete(req.params.id);
      return res.json({success: true});
   }
}


export const adminUserControlller = new AdminUserControlller();
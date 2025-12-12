//user.controller.ts (edit itself user: use)

import { Request, Response} from "express";
import { userService } from "../services/user.service";

class UserController{
   async getMe(req: Request, res: Response){
      const userId = req.user._id;
      const user = await userService.getById(userId);
      return res.json(user);
   }

   async updateMe(req: Request, res: Response){
      const userId = req.user._id;
      const updated = await userService.update(userId, req.body);
      return res.json(updated)
   }
}

export const userController = new UserController();
//adminController.ts

import { Request, Response } from "express";
import User from "../models/user.model"

/* === getMyProfile === */
export const getAllUsers = async (req: Request, res: Response) =>{
   const users = await User.find();
   res.json(users)
}

/* === updateUserAsAdmin === */
export const updateUserAsAdmin = async (req: Request, res: Response) =>{
   const updates = req.body;
   const user = await User.findByIdAndUpdate(req.params._id, updates, {new: true})
   res.json(user);
}
/* === deleteUser === */
export const deleteUser= async (req: Request, res: Response) =>{
   await User.findByIdAndDelete(req.params.id);
   res.json({ message: "User deleted!!!"})
}
//user.controller.ts
import { Request, Response} from "express";
import User from "../models/user.model";

/* === getMyProfile === */
export const getMyProfile = async (req: Request, res: Response) => {
   const user = await User.findById(req.user._id);
   res.json(user);
}

/* === updateMyProfile === */
export const updateMyProfile = async (req: Request, res: Response) => {
   const updates = req.body; 
   const user = await User.findByIdAndUpdate(req.user._id, updates, {new: true});
   res.json(user);
}
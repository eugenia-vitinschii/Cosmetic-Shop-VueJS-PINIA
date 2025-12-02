//constollers/authController.ts

//imports
import { Request, Response } from "express";
import User from "../models/user.model";
import { generateToken } from "../utils/generateToken";

 /* === LOGIN === */
export const login =  async(req: Request, res: Response) => {
   const { username, password} = req.body;

   if(!username || !password){
      return res.status(400).json({ message: "Enter your login and password!"})
   }

   const user =  await User.findOne({username});

   if(!user){
      return res.status(401).json({message: "Wrong data!"});
   }

   if(user.password !== password){
      return res.status(401).json({message: "wrong data!"})
   }

   const token = generateToken(user._id.toString(), user.role);

   return res.json({
      message: "Login succesful!",
      user: {
         id: user._id,
         username: user.username,
         email: user.email,
         role: user.role, 
      },
      token
   });
}
 /* === Register === */
export const register = async (req: Request, res: Response) => {
   const {username, password, email} = req.body;

   const existingUser = await User.findOne({username})

   if(existingUser) {
     return res.status(400).json({ message: "This user exist!"})
   }

   const newUser = await User.create({
      username,
      email,
      password,
      role: 'user' as "user"
   })
   User.insertOne(newUser);

   const token = generateToken(newUser._id.toString(), newUser.role);
   

   res.status(201).json({
      message: "User was created!",
      user: {
         id: newUser._id.toString(),
         username: newUser.username,
         email: newUser.email,
         role: newUser.role,
      },
      token,
   });
}
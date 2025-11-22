//constollers/authController.ts

//imports
import { Request, Response } from "express";
import {users} from "../models/userModel"
import { generateToken } from "../utils/generateToken";

 /* === LOGIN === */
export const login = (req: Request, res: Response) => {
   const { username, password} = req.body;

   if(!username || !password){
      return res.status(400).json({ message: "Enter your login and password!"})
   }

   const user = users.find(
      (u) => u.username === username && u.password === password
   );

   if(!user){
      return res.status(401).json({message: "Wrong data!"});
   }

   const token = generateToken(user.id, user.role);

   return res.json({
      message: "Login succesful!",
      user: {
         id: user.id,
         username: user.username,
         email: user.email,
         role: user.role, 
      },
      token
   });
}

 /* === Register === */
export const register = (req: Request, res: Response) => {
   const {username, password, email} = req.body;

   const existingUser = users.find((u) => u.username === username || u.email === email);

   if(existingUser) {
     return res.status(400).json({ message: "This user exist!"})
   }

   const newUser = {
      id: Date.now(),
      username,
      email,
      password,
      role: 'user' as "user"
   }

   users.push(newUser);

   const token = generateToken(newUser.id, newUser.role);
   

   res.status(201).json({
      message: "User was created!",
      user: {
         id: newUser.id,
         username: newUser.username,
         email: newUser.email,
         role: newUser.role,
      },
      token,
   });
}
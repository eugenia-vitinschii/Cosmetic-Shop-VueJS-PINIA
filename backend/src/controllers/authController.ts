//constollers/authController.ts

//imports
import { Request, Response } from "express";
import {users} from "../models/userModel"


//login
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

   return res.json({
      message: "Login succesful!",
      username: user.username,
      role: user.role,
   });

}

//register 
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
   
   console.log("REGISTER request received!");

   res.status(201).json({message: "User was created!", user: newUser})

}
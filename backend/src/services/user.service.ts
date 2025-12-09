//user service

import User from "../models/user.model";

class UserService {
   async getAll() {
      return await User.find();
   }
   
   async getById(id: string){
      return await User.findById(id);
   }

   async getByUsername(username){
      return await User.findOne({ username})
   }

   async create(data){
      return await User.create({
         role: data.role ?? "user", 
         ...data,
      });
   }

   async update(id: string, data){
      return await User.findByIdAndUpdate(id, data, {new: true})
   }

   async delete(id: string){
      return await User.findByIdAndDelete(id);
   }
}

export const userService = new UserService()
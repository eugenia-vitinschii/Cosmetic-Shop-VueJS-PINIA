//product service

import   Product from "../models/product.model";

class ProductService {
   async getAll(){
      return await Product.find();
   }

   async getById(id: string){
      return await Product.findById(id);
   }

   async create(data){
      return await Product.create(data);
   }

   async update(id: string, data){
      return await Product.findByIdAndUpdate(id, data,{new: true});
   }

   async delete(id: string){
      return await Product.findByIdAndDelete(id);
   }
}

export const productService = new ProductService()
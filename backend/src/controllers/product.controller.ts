// product.controller.ts

import { Request, Response} from "express";
import { productService } from "../services/product.service";

class ProductController {
   async getAll(req: Request, res:Response){
      const products = await productService.getAll();
      return res.json(products);
   }

   async getById(req: Request, res:Response){
      const product = await productService.getById(req.params.id);
      return res.json(product);
   }

   async create(req: Request, res:Response){
      const newProduct = await productService.create(req.body);
      return res.status(201).json(newProduct.toJSON());
   }

   async update(req: Request, res:Response){
      const updated = await productService.update(req.params.id, req.body);
      return res.json(updated);
   }

   async delete(req: Request, res:Response){
      await productService.delete(req.params.id);
      return res.status(204).send();
   }
}

export const productController = new ProductController();























































// import Product from "../models/product.model";
// import { Request, Response} from "express";

// /* === getProducts === */

// export const getProducts  = async(req: Request, res: Response) =>{
//    try{
//       const{
//          page = 1,
//          limit = 30,
//          brand, type,category, tag
//       } = req.query;
   
//       const query: any = {};

//       if(brand) query.brand = brand;
//       if(type) query.type= type;
//       if(category) query.category = category;
//       if(tag) query.tag = tag;

//       const skip = (Number(page) - 1) * Number(limit);

//       const products = await Product.find(query).skip(skip).limit(Number(limit));

//       const count = await Product.countDocuments(query);

//       res.json({
//          item: products,
//          total:count,
//          page: Number(page),
//          limit: Number(limit),
//          complected: products.length < Number(limit),
//       });
//    }catch(err) {
//       console.log("GetProducts error:", err);
//       res.status(500).json({message: "Server error"})
//    }
// };

// /* === getProductsById === */

// export  const getProductsById = async (req:Request, res: Response) =>{
//    try{
//       const product = await Product.findById(req.params.id);

//       if(!product) return res.status(404).json({message: "Not found"});

//       res.json(product)
//    }catch(error){
//       console.log("getProductById error:", error);
//       res.status(500).json({message: "Server Error"})
//    }
// }
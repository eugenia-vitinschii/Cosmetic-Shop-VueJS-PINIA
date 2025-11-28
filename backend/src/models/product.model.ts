//product ts

import mongoose, { Schema, Document} from "mongoose";

export interface ProductColor {
   hex_value: string;
   colour_name: string;
}

export interface IProduct extends Document {
   brand: string;
   name: string;
   price: number;
   price_sign: string;
   currency: string;
   image_link?: string;
   product_link?: string;
   website_link?: string;
   description?: string;
   rating?: number;
   category: string;
   product_type: string;
   tag_list?: string[];
   created_at?: string;
   updated_at?: string;
   product_api_url?: string;
   api_featured_image?: string;
   product_colors?: ProductColor[];
   sliderTags?: string[];
   selectedColor?: ProductColor;
   colorKey?: string;
}

const ProductSchema: Schema = new Schema({
   brand: {type: String},
   name: {type: String},
   price: {type: Number},
   price_sign: {type: String},
   currency: {type: String},
   image_link: {type: String},
   product_link: {type: String},
   website_link: {type: String},
   description: {type: String},
   rating:  {type: Number},
   category: {type: String },
   product_type: {type: String},
   tag_list: [{type: String}],
   product_api_url: {type: String},
   api_featured_image: {type: String},
   product_colors: [
      {
         hex_value:{type: String},
         colour_name: {type: String}
      }
   ],
   sliderTags: [ {type: String}],
   selectedColor:{
      hex_value:{type: String},
      colour_name: {type: String}
   },
   colorKey:  {type: String},
}, {timestamps: true});

export default mongoose.model<IProduct>("Product", ProductSchema);
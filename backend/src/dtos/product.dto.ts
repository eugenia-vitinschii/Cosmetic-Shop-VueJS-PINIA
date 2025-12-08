//product.dto.ts

import {z} from "zod";

const ColorSchema = z.object({
   hex_value: z.string(),
   colour_name: z.string()
})

export const ProductSchema = z.object({
   brand: z.string(),
   name: z.string(),
   price: z.number().min(0),
   price_sign: z.string().optional(),
   currency: z.string().optional(),
   image_link: z.string().url().optional(),
   product_link: z.string().url().optional(),
   website_link: z.string().url().optional(),
   description: z.string().optional(),
   rating: z.number().min(0).max(5).optional(),
   category: z.string(),
   product_type: z.string(),
   tag_list: z.array(z.string()).optional(),
   product_api_url: z.string(),
   api_featured_image: z.string(),
   product_colors: z.array(ColorSchema).optional(),
   sliderTags:  z.array(z.string()).optional(),
   selectedColor: ColorSchema.optional(),
   colorKey: z.string().optional,
});
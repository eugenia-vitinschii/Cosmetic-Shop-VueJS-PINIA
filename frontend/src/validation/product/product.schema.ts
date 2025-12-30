// product (create/update) schema

import {z} from "zod";

const ColorSchema = z.object({
   hex_value: z.string(),
   colour_name: z.string()
})

export const productSchema = z.object({
   brand: z.string({error: "Brand is required"}).min(1, "Brand is required"),
   name: z.string().min(1, "Name is required"),
   price: z.number({error: "Price most be number"}).min(0, "Price most be > 0"),
   price_sign: z.string().optional(),
   currency: z.string().optional(),
   image_link: z.string().url().optional(),
   product_link: z.string().url().optional(),
   website_link: z.string().url().optional(),
   description: z.string().optional(),
   rating: z.number().min(0).max(5).optional(),
   category: z.string().min(1, "Category is required"),
   product_type: z.string().min(1, "Type is required"),
   tag_list: z.array(z.string()).optional(),
   product_api_url: z.string().optional(),
   api_featured_image: z.string().optional(),
   product_colors: z.array(ColorSchema).optional(),
   sliderTags:  z.array(z.string()).optional(),
   selectedColor: ColorSchema.optional(), 
   colorKey: z.string().optional(),
})

export type ProductForm = z.infer<typeof productSchema>;

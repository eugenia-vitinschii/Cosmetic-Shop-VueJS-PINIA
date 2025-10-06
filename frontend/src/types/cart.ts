// types/cart.ts

//product color (hex + name)
export interface ProductColor {
   hex_value: string;
   colour_name: string;
}


export interface CartItem {
   id: string;
   name: string;
   price: number;
   price_sign: string;
   image_link: string;
   product_type: string;
   api_featured_image: string;
   category: string;
   selectedColor?: ProductColor;
   currency: string;
   quantity: number;
   colorKey: string
   selected: boolean
}



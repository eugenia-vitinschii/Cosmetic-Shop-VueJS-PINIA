//product constructor

//product color (hex + name)
export interface ProductColor {
   hex_value: string;
   colour_name: string;
}

export interface ProductData {
   id?: string;
   brand?: string;
   name?: string;
   price?: number;
   price_sign?: string;
   currency?: string;
   image_link?: string;
   product_link?: string;
   website_link?: string;
   description?: string;
   rating?: number;
   category?: string;
   product_type?: string;
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

export class Product {
   id?: string;
   brand?: string;
   name?: string;
   price?: number;
   price_sign?: string;
   currency?: string;
   image_link?: string;
   product_link?: string;
   website_link?: string;
   description?: string;
   rating?: number;
   category?: string;
   product_type?: string;
   tag_list?: string[];
   created_at?: string;
   updated_at?: string;
   product_api_url?: string;
   api_featured_image?: string;
   product_colors:  ProductColor[];
   sliderTags?: string[];
   selectedColor?: ProductColor;
   colorKey?: string;

   constructor(data: ProductData = {}) {
      this.id = data.id;
      this.brand = data.brand;
      this.name = data.name;
      this.price = data.price;
      this.price_sign = data.price_sign;
      this.currency = data.currency;
      this.image_link =  data.image_link;
      this.product_link = data.product_link;
      this.website_link = data.website_link;
      this.description = data.description ;
      this.rating = data.rating;
      this.category = data.category;
      this.product_type = data.product_type;
      this.tag_list = data.tag_list;
      this.created_at = data.created_at;
      this.updated_at = data.updated_at ;
      this.product_api_url = data.product_api_url ;
      this.api_featured_image = data.api_featured_image;
      this.product_colors = data.product_colors ?? [];
      this.sliderTags = data.sliderTags ?? [];
      this.selectedColor =  data.selectedColor;
      this.colorKey = data.colorKey ?? `${data.id}-${data.selectedColor?.hex_value ?? "default"}`;
   }
}
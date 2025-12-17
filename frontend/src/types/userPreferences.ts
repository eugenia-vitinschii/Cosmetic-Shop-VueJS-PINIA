// types/user.ts

import { Product  } from "@/models/product"
import  type { CartItem } from "./cart"

export interface UserPreferences{
  cart: CartItem[],
  favorite: Product[]
}

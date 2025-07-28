// types/user.ts

import { Product  } from "@/models/product"

export interface UserData{
  cart: Product[],
  favorite: Product[]
}

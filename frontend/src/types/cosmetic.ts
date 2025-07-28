// types/user.ts

import { Product  } from "@/models/product"

export interface CosmeticState {
  products: Product []
  limit: number,
  page: number,
  complected: boolean,
  count: number,
}
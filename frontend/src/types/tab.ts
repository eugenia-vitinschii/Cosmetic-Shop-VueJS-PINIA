//tab component

import type { ProductData } from "@/models/product";
import type { Component } from "vue";

export type ProductField = keyof ProductData;

export interface TabConfig {
   key: string,
   label: string,
   fields: ProductField[],
   component: Component
}
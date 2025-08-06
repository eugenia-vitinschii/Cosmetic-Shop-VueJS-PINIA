//cosmetic store


import { defineStore } from "pinia";
import { computed, reactive } from "vue";

import type { CosmeticState } from "@/types/cosmetic"

import { api } from "@/utils/api"

export const useCosmeticStore = defineStore("cosmetic", () => {
  const cosmetics = reactive<CosmeticState>({
    products: [],
    limit: 30,
    page: 1,
    complected: true,
    count: 1
  })
  const products = computed(() => cosmetics.products);

  const filteredByBrand = (brandName: string) => {
    return products.value.filter((item) => item.brand === brandName)
  };

  const fileredByProductType = (productType: string) => {
    return products.value.filter((item) => item.product_type === productType)
  };

  const fileredByCategory = (theCategory: string) => {
    return products.value.filter((item) => item.category?.toLocaleLowerCase() === theCategory.toLocaleLowerCase())
  };

  const allBrands = computed(() => {
    return [...new Set(products.value.map((item) => item.brand))]
  });

  const allProductTypes = computed(()  => {
    return [...new Set(products.value.map((item) => item.product_type))]
  });

  const allCategory = computed(() => {
    return [...new Set(products.value.map((item) => item.category)
      .filter((category): category is string => typeof category === 'string'))]
  })

  const productsByTag = (tag: string) =>{
    return products.value.filter( p => p.sliderTags?.includes(tag))
  };

  async function fetchCosmetics() {
    try {
      const response = await api.get("/cosmetics");
      cosmetics.products = response.data;
    } catch (error) {
      console.log("fetchCosmetics error:", error);
    }
  }

  async function fetchProductById(id: string) {
    try {
      const response = await api.get(`/cosmetics/${id}`);
      cosmetics.products = [response.data];
    } catch (error) {
      console.log("fetchProductById(id) error:", error);
    }
  }

  async function loadMore() {
    cosmetics.page++
    try {
      const response = await api.get(`/cosmetics?_page=${cosmetics.page}&_limit=${cosmetics.limit}`);
      cosmetics.products.push(...response.data);
      if (response.data.length < cosmetics.limit) {
        cosmetics.complected = false
      }
    } catch (error) {
      console.log('load more err:', error);
    }
  }
  return { cosmetics, products, filteredByBrand, fileredByProductType, fileredByCategory, allBrands, allProductTypes, allCategory, productsByTag ,fetchCosmetics, fetchProductById, loadMore }
})


//pinia
import { defineStore  } from "pinia";

//axios
import axios from "axios";

//baseUrl
const baseUrl = "http://localhost:3000";

//import cosmetic store
import { useCosmeticStore } from "@/stores";


export const useSliderStore = defineStore( "sliderId", {
   state: () => ({
      top: [],
      brand: [],
      category: [],
      cosmeticStore: useCosmeticStore()
   }),
   getters: {

   },
   actions: {
      async fetchTopProducts() {
         // get cosmetics from db.json
         try {
           const response = await axios.get(`${baseUrl}/top`);
           this.top = response.data;
         } catch (error) {
           console.log(" fetchTopProducts error:", error);
         }
       },
       async fetchBrandProducts() {
        // get brand from db.json
        try {
          const response = await axios.get(`${baseUrl}/brand`);
          this.brand = response.data;
        } catch (error) {
          console.log(" fetchBrandProducts error:", error);
        }
      }, 
      async fetchCategoryProducts() {
        // get categoryfrom db.json
        try {
          const response = await axios.get(`${baseUrl}/category`);
          this.category = response.data;
        } catch (error) {
          console.log(" fetchCategoryProducts error:", error);
        }
      },
       pushToCart(item) {
         return this.cosmeticStore.addToCart(item)
        },
        pushToFavorite(item){
          return this.cosmeticStore.addToFavorite(item)
        },
   }
})
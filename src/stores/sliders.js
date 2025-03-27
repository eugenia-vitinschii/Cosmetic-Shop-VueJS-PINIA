import { defineStore  } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3000";

//import cosmetic store
import {useCosmeticStore} from "./cosmetic"


export const useSliderStore = defineStore( "sliderId", {
   state: () => ({
      top: [],
      limit: 30,
      page: 1,
      complected: true,
      user:{
        cart: [],
        favorite: []
      },
      count: 1,
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
       pushToCart(item) {
         return this.cosmeticStore.addToCart(item)
        },
        pushToFavorite(item){
          return this.cosmeticStore.addToFavorite(item)
        },
   }
})
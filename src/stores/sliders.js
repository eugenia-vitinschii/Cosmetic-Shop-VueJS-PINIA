import { defineStore  } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3000";

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

   }
})
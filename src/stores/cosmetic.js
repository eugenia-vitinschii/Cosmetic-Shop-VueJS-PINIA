import { defineStore  } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3000";

export const useCosmeticStore = defineStore( "cosmeticId", {
   state: () => ({
      cosmetics: []
   }),
   getters: {},
   actions: {
      async fetchCosmetics() {
         // get cosmetics from db.json
         try {
           const response = await axios.get(`${baseUrl}/cosmetics`);
           this.cosmetics = response.data;
         } catch (error) {
           console.err("fetchCosmetics error:", error);
         }
       },
   }
})
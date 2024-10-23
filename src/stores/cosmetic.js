import { defineStore  } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3000";

export const useCosmeticStore = defineStore( "cosmeticId", {
   state: () => ({
      cosmetics: []
   }),
   getters: {
    fileredByBrand: (state) => {
      return (brandName) => state.cosmetics.filter((item) => item.brand === brandName )
    }
   },
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
       async fetchCosmeticsById(id) {
         // get Cosmetics from db.json by id
         try {
           const response = await axios.get(`${baseUrl}/cosmetics/${id}`);
           this.cosmetics = response.data;
         } catch (error) {
           console.error("fetchCosmeticsById(id) error:", error);
         }
       },
   }
})
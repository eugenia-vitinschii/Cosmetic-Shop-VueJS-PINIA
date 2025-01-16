import { defineStore  } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3000";

export const useCosmeticStore = defineStore( "cosmeticId", {
   state: () => ({
      cosmetics: [],
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
    //products by brand
    fileredByBrand: (state) => {
      return (brandName) => state.cosmetics.filter((item) => item.brand === brandName )
    },
    //products by productType
    fileredByProductType: (state) => {
      return (productType) => state.cosmetics.filter((item) =>  item.product_type ===  productType )
    },
    // category
    fileredByCategory: (state) => {
      return (theCategory) => state.cosmetics.filter((item) => item.category === theCategory)
    },
    //brands
    allBrand: (state) => {
    let brands = state.cosmetics.map(item => item.brand).filter((value, index, self) => self.indexOf(value) === index);
    return brands
    },
    //product types
    allProductTypes: (state) => {
      let productTypes = state.cosmetics.map(item => item.product_type).filter((value, index, self) => self.indexOf(value) === index);
    return productTypes 
    },
    // category
    allCategory: (state) => {
      let category = state.cosmetics.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
    return category
    }
   },
   actions: {
      async fetchCosmetics() {
         // get cosmetics from db.json
         try {
           const response = await axios.get(`${baseUrl}/cosmetics`);
           this.cosmetics = response.data;
         } catch (error) {
           console.log("fetchCosmetics error:", error);
         }
       },
       async fetchCosmeticsById(id) {
         // get Cosmetics from db.json by id
         try {
           const response = await axios.get(`${baseUrl}/cosmetics/${id}`);
           this.cosmetics = response.data;
         } catch (error) {
           console.log("fetchCosmeticsById(id) error:", error);
         }
       },
       async loadMore(){
        this.page++
        try {
          const response = await axios.get(`${baseUrl}/cosmetics?_page=${this.page}&_limit=${this.limit}`);
          this.cosmetics.push(...response.data);
          if(response.data.lenght < this.limit){
            this.complected = false
          }
        }catch (error){
          console.log('load more err:', error);
        }
       },
       //add to wish list
       addToCart(item) {
        this.count = this.user.cart.findIndex((product) => product.id == item.id);
        if ( this.count !== -1){
          this.cosmetics[this.count].quantity += 1;
        } else {
          item.quantity =1;
          this.user.cart.push(item)
        }
        localStorage.setItem("cart",JSON.stringify(item));
       },
   }
})


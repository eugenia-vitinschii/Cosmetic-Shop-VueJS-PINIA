//cosmetic store

//pinia
import { defineStore  } from "pinia";
//axios
import axios from "axios";
import { Product  } from "@/models/product"

//base url
const baseUrl = "http://localhost:3000";

//interface state
interface UserData{
  cart: Product[],
  favorite: Product[]
}
interface CosmeticState {
  cosmetics: Product []
  limit: number,
  page: number,
  complected: boolean,
  count: 1,
  user: UserData,
}

export const useCosmeticStore = defineStore( "cosmeticId", {
   state: (): CosmeticState => ({
      cosmetics: [],
      limit: 30,
      page: 1,
      count: 1,
      complected: true,
      user:{
        cart: [],
        favorite: [],
      }
   }),
   getters: {
    //products by brand
    fileredByBrand: (state) => {
      return (brandName: string) => state.cosmetics.filter((item) => item.brand === brandName )
    },
    //products by productType
    fileredByProductType: (state) => {
      return (productType: string) => state.cosmetics.filter((item) =>  item.product_type ===  productType )
    },
    // category
    fileredByCategory: (state) => {
      return (theCategory:string) => state.cosmetics.filter((item) => item.category === theCategory)
    },
    //brands
    allBrand: (state) => {
      return [...new Set(state.cosmetics.map((item) => item.brand))]
    },
    //product types
    allProductTypes: (state) => {
      return [...new Set(state.cosmetics.map((item) => item.product_type))]
    },
    // category
    allCategory: (state) => {
      return [...new Set(state.cosmetics.map((item) => item.category))]
    }
   },
   actions: {
    // fetch cosmetics from db.json
      async fetchCosmetics() {
         try {
           const response = await axios.get(`${baseUrl}/cosmetics`);
           this.cosmetics = response.data;
         } catch (error) {
           console.log("fetchCosmetics error:", error);
         }
       },
    //create 
       async createProduct(payload: Product) {
        if (!payload.name || !payload.brand) return; 
        try{
          const createdAt = new Date().toISOString()
          const {data} = await axios.post(`${baseUrl}/cosmetics`,{
            ...payload,
            created_at: createdAt,
            updated_at: createdAt,
          });
          this.cosmetics.push(data);
        }catch (err){
          console.log(err)
        }
       },
       //updateItem
       async updateProduct(id: string, payload: Product){
        try{
          const {data} = await axios.put(`${baseUrl}/cosmetics/${id}`, payload);
            
          const index = this.cosmetics.findIndex(p => p.id === id);
          if( index !== -1){
            this.cosmetics[index] = data;
          }
        } catch(err){
          console.log(err)
        } 
       },
       //fetch by id
       async fetchProductById(id: string) {
         // get Cosmetics from db.json by id
         try {
           const response = await axios.get(`${baseUrl}/cosmetics/${id}`);
           this.cosmetics = [response.data];
         } catch (error) {
           console.log("fetchProductById(id) error:", error);
         }
       },
        // delete product from db.json
        async deleteProduct(id: string) {
          try {
            await axios.delete(`${baseUrl}/cosmetics/${id}`);
            this.cosmetics = this.cosmetics.filter((item) => item.id !== id);
          } catch (err) {
            console.error("Delete item ERROR!", err);
          }
        },
      //load more
       async loadMore(){
        this.page++
        try {
          const response = await axios.get(`${baseUrl}/cosmetics?_page=${this.page}&_limit=${this.limit}`);
          this.cosmetics.push(...response.data);
          if(response.data.length < this.limit){
            this.complected = false
          }
        }catch (error){
          console.log('load more err:', error);
        }
       },
       //add to wish list
       addToCart(item: Product) {
        const index = this.user.cart.findIndex((p) => p.id == item.id);
        if ( index !== -1){
          this.user.cart[index].quantity = ( this.user.cart[index].quantity || 0) + 1
        } else {
          item.quantity = 1;
          this.user.cart.push(item)
        }
        localStorage.setItem("cart",JSON.stringify(this.user.cart));
       },
       //add to favorite
       addToFavorite(item: Product){
        const index = this.user.favorite.findIndex((p) => p.id == item.id);
        if ( index !== -1){
          this.user.favorite[index].quantity = (this.user.favorite[index].quantity || 0) +1;
        } else {
          item.quantity = 1;
          this.user.favorite.push(item)
        }
        localStorage.setItem("favorite",JSON.stringify(this.user.favorite));
      //incriment
       },
       incrementQuantity(id: string) {
        const item = this.user.cart.find((p) => p.id === id);
        if(item) {
          item.quantity = (item.quantity || 0) +1
        }
      },
      removeItem(id:string){
        this.user.cart = this.user.cart.filter((item) => item.id !== id)
      },
      removeFromFavorites(id: string){
        this.user.favorite = this.user.favorite.filter((item) => item.id !== id)
      }
   }
})


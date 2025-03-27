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
       //create 
       async createProduct(payload) {
        try{
          const {data} = await axios.post(`${baseUrl}/cosmetics`, payload);
          this.cosmetics.push(data);
          console.log("Product was created")
        }catch (err){
          console.log(err)
        }
       },
       //updateItem
       async updateCosmetic(id){
        try{
          await axios.put(`${baseUrl}/cosmetics/${id}`,{
            id: this.cosmetics.id,
            brand: this.cosmetics.brand,
            name: this.cosmetics.name,
            price: this.cosmetics.price,
            price_sign: this.cosmetics.price_sign,
            currency: this.cosmetics.currency,
            image_link: this.cosmetics.image_link,
            product_link: this.cosmetics.product_link,
            website_link: this.cosmetics.website_link,
            description: this.cosmetics.description,
            rating: this.cosmetics.rating,
            category: this.cosmetics.category,
            product_type: this.cosmetics.product_type,
            tag_list: this.cosmetics.tag_list,
            created_at: this.cosmetics.created_at,
            updated_at: new Date(),
            product_api_url: this.cosmetics.product_api_url,
            api_featured_image: this.cosmetics.api_featured_image,
            product_colors: this.cosmetics.product_colors,
          })
        } catch(err){
          console.log(err)
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
           // delete product in db.json
    async deleteProduct(id) {
      try {
        await axios.delete(`${baseUrl}/cosmetics/${id}`);
        this.cosmetics = this.cosmetics.filter((prev) => prev.id !== id);
      } catch (err) {
        console.error("Post ERROR!", err);
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
          item.quantity = 1;
          this.user.cart.push(item)
        }
        localStorage.setItem("cart",JSON.stringify(item));
       },
       addToFavorite(item){
        this.count = this.user.favorite.findIndex((product) => product.id == item.id);
        if ( this.count !== -1){
          this.cosmetics[this.count].quantity += 1;
          this.user.active = false;
        } else {
          item.quantity = 1;
          this.user.active = true;
          this.user.favorite.push(item)
        }
        localStorage.setItem("favorite",JSON.stringify(item));
        
       },
       test(b){
        return 4 + b
       },
       incrementQuantity(id) {
        this.user.cart.forEach((item) => {
          if (item.id === id) {
            return this.user.cart.quantity++;
          }
        });
      },
      removeItem(id){
        this.user.cart = this.user.cart.filter((item) => item.id !== id)
      },
      removeFromFavorites(id){
        this.user.favorite = this.user.favorite.filter((item) => item.id !== id)
      }
   }
})


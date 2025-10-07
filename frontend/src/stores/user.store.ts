//stores/user.store.ts

import { defineStore } from "pinia";
import { reactive, computed } from "vue";

import type { UserData } from "@/types/user";
import type { CartItem } from "@/types/cart";

import { Product } from "@/models/product"

export const useUserStore = defineStore("user", () => {
 
const user = reactive<UserData>({
    cart: [],
    favorite: []
})
 /* === Favorite logic === */
  const favorite = computed(() => user.favorite);
  
  function  loadFavorite(){
    const saved = localStorage.getItem('favorite');
    
    if(saved){
      user.favorite = JSON.parse(saved)
    }
  }

  function toggleFavorite(item: Product){
    const index = user.favorite.findIndex((p) => p.id === item.id);

    if(index !== -1){
      user.favorite.splice(index, 1)
    } else {
      user.favorite.push({...item})
    }

    localStorage.setItem('favorite', JSON.stringify(user.favorite))
  }

  function isFavorite(id: string):boolean{
    if(!id) return false;
    return user.favorite.some((p) => p.id === id)
  }

  function resetFavorite(){
    user.favorite = [];
    localStorage.removeItem('favorite')
  }
 /* === Cart Logic === */

  const cart = computed(() => user.cart);
  
  function addToCart(item: CartItem){
    const index = user.cart.findIndex((p) => p.colorKey === item.colorKey);

    if(index !== -1){
      user.cart[index].quantity++
    } else {
      user.cart.push({...item, quantity:1, selected:false});
    }

    saveCart()
  }

  function incrementQuantity(colorKey: string){
    const item = user.cart.find((p) => p.colorKey === colorKey);
    if(item) item.quantity++;
    saveCart();
  }

  function decrementQuantity(colorKey: string){
    const item = user.cart.find((p) => p.colorKey === colorKey);
    if(item && item.quantity > 1){
      item.quantity-- ;
    } else {
      console.log('delete item function')
      removeFromCart(colorKey);
    }
    saveCart()
  }

  function removeFromCart(colorKey: string){
    user.cart = user.cart.filter((p) => p.colorKey !== colorKey);
    saveCart()
  }

  function saveCart(){
  localStorage.setItem("cart", JSON.stringify(user.cart))
  }

  const allSelected = computed({
    get: ()=> user.cart.length > 0 && user.cart.every(item =>item.selected),
    set: (value: boolean) =>{
      user.cart.forEach(item => (item.selected = value))
      saveCart()
    }
  })

  function removeSelectedFromCart(){
    user.cart = user.cart.filter((item) => !item.selected)
    saveCart()
  }

  const totalPrice = computed(() => 
    cart.value.reduce(
      ( sum, item ) => item.selected ? sum + item.price * item.quantity : sum, 0
      )
  )
    
  return { user, allSelected, removeSelectedFromCart,cart, favorite , addToCart, loadFavorite , toggleFavorite, isFavorite, resetFavorite, incrementQuantity, decrementQuantity, totalPrice, saveCart, removeFromCart}
})
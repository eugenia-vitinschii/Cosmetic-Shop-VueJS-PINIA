//stores/user.store.ts

import { defineStore } from "pinia";
import { reactive, computed } from "vue";

import type { UserData } from "@/types/user";

import { Product } from "@/models/product"

export const useUserStore = defineStore("user", () => {
  const user = reactive<UserData>({
    cart: [],
    favorite: []
  })

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

  //delete
  function addToCart(item: Product) {
    const index = user.cart.findIndex((p) => p.id == item.id);
    if (index !== -1) {
      user.cart[index].quantity = (user.cart[index].quantity || 0) + 1
    } else {
      item.quantity = 1;
      user.cart.push(item)
    }
    localStorage.setItem("cart", JSON.stringify(user.cart));
  }
  return { user, favorite ,  addToCart, loadFavorite , toggleFavorite, isFavorite, resetFavorite}
})
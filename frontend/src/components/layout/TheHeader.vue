<template>
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <!-- header data before nav -->
        <div class="header__data">
          <div class="header__data--text">
            <p class="small-text" title="Free delivery from orders> 10$">
              Free delivery
            </p>
          </div>
          <div class="header__data--links">
            <ul>
              <li></li>
              <li>
                <router-link to="/terms" class="small-text"
                  >Terms of use</router-link
                >
              </li>
              <li>
                <router-link to="/about" class="small-text"
                  >About us</router-link
                >
              </li>
            </ul>
          </div>
          <div class="header__data--promo">
            <router-link to="/brand" class="small-text">
              Brands
            </router-link>
          </div>
        </div>
        <!-- header logo & user & fav & cart -->
        <div class="header__control">
          <div class="header__control--img">
            <router-link to="/">
              <img src="@/assets/img/BORCELLE.jpg" alt="logo" />
            </router-link>
          </div>
          <div class="header__control--buttons">
            <div class="header-user tooltip">
              <span class="tooltip-text small-text">user</span>
              <router-link to="/sign-up">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path
                    d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"
                  />
                </svg>
              </router-link>
            </div>
            <!-- favorites -->
            <div class="header-fav tooltip">
              <span class="tooltip-text small-text">favorites</span>
              <router-link to="/favorites">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path
                    d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"
                  />
                </svg>
              </router-link>
            </div>
            <!-- cart -->
            <div class="header-cart tooltip">
              <span class="tooltip-text small-text">cart</span>
              <router-link to="/cart">
               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>
              </router-link>
              <!-- <span class="small-text">{{ user.cart.length }}</span> -->
            </div>
            <div class="header-nav tooltip">
              <span class="tooltip-text small-text">menu</span>
              <button    
              @click="showNav = !showNav "
              > 
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
              </button>
            </div>
          </div>
        </div>
        <!-- header nav -->
        <nav v-bind:class="{ active: showNav  }">
          <button  @click="showNav = !showNav " class="header__nav--toogle">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </button>
          <ul class="header__top">
            <li >
              <router-link to="/admin" class="header__link">Admin</router-link>
            </li>
            <!-- home -->
            <li >
              <router-link to="/" class="header__link">Home</router-link>
            </li>
            <!-- brands -->
            <li >
              <router-link to="/brand" class="header__link">Brands</router-link>
            </li>
          </ul>
            <!-- category -->
            <dropdown-menu @toggle="toogleDropdown('categories')" :isOpen="openDropdown === 'categories'" title="Category" to="/category" :groups="categories"/>
            <!-- type -->
           <dropdown-menu @toggle="toogleDropdown('types')" :isOpen="openDropdown === 'types'" title="Types" to="/product-type" :groups="types"/>
        </nav>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
//vue
import { ref } from "vue";

//components
import DropdownMenu from "../core/DropdownMenu.vue";

//component settings
defineOptions({
  name: "TheHeader",
});


//variables
const showNav = ref<boolean>(false);

//categories
const categories = [
  {
    title: "Eyes",
    items: [
      {name: 'Palette', link: '/category/palette'},
      {name: 'Pencil', link: '/category/pencil'},
      {name: 'Gel',  link: '/category/gel'},
    ]
  },
  {
    title: "Lips",
    items: [
      {name: "Lipstick", link: '/category/lipstick'},
      {name: 'Lip gloss', link: '/category/lip_gloss'}
    ]
  },
  {
    title: "Face",
    items: [
      {name: 'Powder',  link: '/category/powder'},
      {name: 'Liquid', link: '/category/liquid'},
      {name: 'Highlighter', link: '/category/highlighter'},
      {name: "Concealer", link: '/category/concealer'}
    ]
  },
  {
    title: "Skin",
    items: [
      { name: 'BB CC',  link: '/category/bb_cc'},
      {name: 'Contour',  link: '/category/contour'},
      {name: 'Cream',  link: '/category/cream'},
      {name: 'Mineral',  link: '/category/mineral'},
    ]
  }
]
//types
const types = [
  {
    title: "Eyes",
    items: [
      {name: 'Eyeshadow', link: '/product-type/eyeshadow'},
      {name: 'Eyeliner', link: '/product-type/eyeliner'},
    ]
  },
    {
    title: "Lips",
    items: [
      {name: 'Lipstick', link: '/product-type/lipstick'}
    ]
  },
    {
    title: "Face",
    items: [
      {name: 'Blush', link: '/product-type/blush'},
      {name: 'Foundation', link: '/product-type/foundation'},
      {name: "Bronzer", link: '/product-type/bronzer'}
    ]
  },
  {
    title: "Nails",
    items: [
      {name: 'Nail Polish', link: '/product-type/nail_polish'}
    ]
  }
]


const openDropdown = ref<string |null>(null);

function toogleDropdown(name: string){
  openDropdown.value = openDropdown.value === name ? null : name
}
</script>
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
            <router-link to="/all-brand" class="small-text">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path
                    d="M221-120q-27 0-48-16.5T144-179L42-549q-5-19 6.5-35T80-600h190l176-262q5-8 14-13t19-5q10 0 19 5t14 13l176 262h192q20 0 31.5 16t6.5 35L816-179q-8 26-29 42.5T739-120H221Zm-1-80h520l88-320H132l88 320Zm260-80q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM367-600h225L479-768 367-600Zm113 240Z"
                  />
                </svg>
              </router-link>
              <span class="small-text">{{ user.cart.length }}</span>
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
          <button  @click="showNav = !showNav ">
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
              <router-link to="/all-brand" class="header__link">Brands</router-link>
            </li>
          </ul>
            <!-- category -->
            <div class="dropdown">
              <!-- button -->
              <div class="dropdown__button">
                 <router-link to="/all-category" class="header__link">Category</router-link>
              <button @click="showDropdown = !showDropdown" v-bind:class="{ active: showDropdown  }"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-360 280-560h400L480-360Z"/></svg></button> 
              </div>
              <!-- category items -->
              <div class="header__bottom dropdown__menu"  v-bind:class="{ active: showDropdown  }">
                <div class="dropdown__menu--items">
                  <!-- eyes -->
                  <ul class="dropdown__menu--item">
                    <li>
                      <router-link to="/category/liquid" class="header__link">Liquid</router-link>
                    </li>
                    <li>
                      <router-link to="/category/palette" class="header__link"> Palette</router-link>
                    </li>
                    <li>
                      <router-link to="/category/pencil" class="header__link">Pencil</router-link>
                    </li>
                  </ul>
                <!-- lips -->
                <ul class="dropdown__menu--item">
                  <li>
                    <router-link to="/category/lipstick" class="header__link">Lipstick</router-link>
                  </li>
                  <li>
                    <router-link to="/category/lip_gloss" class="header__link">
                      Lip gloss
                    </router-link>
                  </li>
                </ul>
                <!-- face -->
                <ul class="dropdown__menu--item">
                  <li>
                    <router-link to="/category/powder" class="header__link">Powder</router-link>
                  </li>
                  <li>
                    <router-link to="/category/concealer" class="header__link"
                      >Concealer</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/category/highlighter" class="header__link"
                      >Highlighter</router-link
                    >
                  </li>
                </ul>
                <!-- skin -->
              <ul class="dropdown__menu--item">
                <li>
                  <router-link to="/category/bb_cc" class="header__link">BB_CC</router-link>
                </li>
                <li>
                  <router-link to="/category/contour" class="header__link">Contour</router-link>
                </li>
                <li>
                  <router-link to="/category/cream" class="header__link">Cream</router-link>
                </li>
                <li>
                  <router-link to="/category/mineral" class="header__link">Mineral</router-link>
                </li>
                <li>
                  <router-link to="/category/gel" class="header__link">Gel</router-link>
                </li>
                </ul>
            </div>
            </div>
            </div>
            <!-- type -->
            <div class="dropdown">
               <div class="dropdown__button">
                 <router-link to="/all-product-type" class="header__link">Types</router-link>
              <button @click="showDropdown = !showDropdown" v-bind:class="{ active: showDropdown  }"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-360 280-560h400L480-360Z"/></svg></button> 
              </div>
              <div class="header__bottom dropdown__menu">
                <!-- make up -->
                <div class="dropdown__menu--items">
                  <ul class="dropdown__menu--item">
                <li>
                  <router-link to="/product-type/eyeshadow" class="header__link"
                    >Eyeshadow</router-link
                  >
                </li>
                 <li>
                  <router-link to="/product-type/lipstick" class="header__link"
                    >Lipstick
                  </router-link>
                </li>   
                <li>
                  <router-link to="/product-type/eyeliner" class="header__link"
                    >Eyeliner</router-link
                  >
                </li>
                  </ul>

                  <ul class="dropdown__menu--item">
                             <li>
                  <router-link to="/product-type/foundation" class="header__link"
                    >Foundation
                  </router-link>
                </li>
               

                <li>
                  <router-link to="/product-type/blush" class="header__link">Blush</router-link>
                </li>
                <li>
                  <router-link to="/product-type/nail_polish" class="header__link"
                    >Nail Polish
                  </router-link>
                </li>
                <li>
                  <router-link to="/product-type/bronzer" class="header__link">Bronzer</router-link>
                </li>
                  </ul>
                </div>
              </div>
            </div>
        </nav>
      </div>
    </div>
  </div>
</template>


<script setup>
//vue
import { defineOptions, ref } from "vue";

//component settings
defineOptions({
  name: "TheHeader",
});

//variables
const showNav = ref(false)
const showDropdown= ref(false)
//import store
import { useCosmeticStore } from "@/stores/cosmetic";
import { storeToRefs } from "pinia";

//pinia const
const store = useCosmeticStore();
const { user } = storeToRefs(store);
</script>
<template>
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__data">
          <div class="header__data--text">
            <p class="small-text" title="Free delivery from orders> 10$">
              Free delivery
            </p>
          </div>
          <div class="header__data--links">
            <ul>
              <li>
                <router-link to="/" class="small-text">Promotions</router-link>
              </li>
              <li>
                <router-link to="/" class="small-text">Terms of use</router-link>
              </li>
              <li>
                <router-link to="/" class="small-text">About us</router-link>
              </li>
            </ul>
            
          </div>
          <div class="header__data--promo">
            <router-link to="/all-brand" class="small-text">
              Brands
            </router-link>
          </div>
        </div>
        <div class="header__control">
          <div class="header__control--img">
            <img src="@/assets/img/logo.png" alt="logo">
          </div>
          <div class="header__control--buttons">
            <button class="svg-button">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M221-120q-27 0-48-16.5T144-179L42-549q-5-19 6.5-35T80-600h190l176-262q5-8 14-13t19-5q10 0 19 5t14 13l176 262h192q20 0 31.5 16t6.5 35L816-179q-8 26-29 42.5T739-120H221Zm-1-80h520l88-320H132l88 320Zm260-80q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM367-600h225L479-768 367-600Zm113 240Z"/></svg>
            </button>
          </div>
        </div>
        <nav>
          <ul class="header__top">
            <!-- home -->
            <li class="header__link"> 
              <router-link to="/">
              Home
              </router-link>
            </li>
            <!-- brands -->
            <li class="header__link"> 
              <router-link to="/all-brand"> Brands </router-link>
            </li>
            <!-- category -->
            <li class="header__link dropdown"> 
              <a  @click="showCategory = ! showCategory">
               Category
              </a>
            </li>
            <!-- category items -->
            <ul class="header__bottom" v-show="showCategory">
              <li class="header__link">
                <router-link to="/category/liquid">LIQUID</router-link>
              </li>
              <li class="header__link">
                <router-link to="/category/powder">POWDER</router-link>
              </li>
              <li class="header__link">
                <router-link to="/category/concealer">CONCEALER</router-link>
              </li>
              <li class="header__link">
                <router-link to="/category/highlighter">HIGHLIGHTER</router-link>
              </li>
              <li class="header__link">
                <router-link to="/category/bb_cc">BB_CC</router-link>
              </li>
              <li class="header__link">
                <router-link to="/category/contour">CONTOUR</router-link>
              </li>
              <li class="header__link"> 
                <router-link to="/category/cream">CREAM</router-link>
              </li>
              <li  class="header__link">
                <router-link to="/category/mineral"> MINERAL</router-link>
              </li>
              <li class="header__link">
                <router-link to="/category/lipstick" >LIPSTICK</router-link>
              </li>
              <li class="header__link">  
                <router-link to="/category/lip_gloss">  LIP GLOSS </router-link>
              </li>
              <li class="header__link">
                <router-link to="/category/palette" >PALETTE</router-link>
              </li>
              <li class="header__link">
                <router-link to="/category/pencil">PENCIL</router-link>
              </li>
              <li class="header__link">
                <router-link to="/category/gel"> GEL</router-link>
              </li>
            </ul>
            <!-- type -->
            <li class="header__link dropdown">
              <a @click="showType = ! showType">
               Types
              </a>
            </li>
            <ul class="header__bottom" v-show="showType">
               <li class="header__link">
                <router-link to="/product-type/foundation" >FOUNDATION </router-link>
              </li>
               <li class="header__link">
                <router-link to="/product-type/lipstick">LIPSTICK </router-link>
              </li>
               <li class="header__link">
                <router-link to="/product-type/eyeshadow">EYESHADOW</router-link>
              </li>
               <li class="header__link">
                <router-link to="/product-type/blush" >BLUSH</router-link>
              </li>
               <li class="header__link">
                <router-link to="/product-type/nail_polish">NAIL_POLISH </router-link>
              </li>
               <li class="header__link">
                <router-link to="/product-type/bronzer">BRONZER</router-link>
              </li>
              <li class="header__link">
                <router-link to="/product-type/eyeliner">EYELINER</router-link>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>


<script setup>
import { defineOptions, ref} from "vue";

defineOptions({
  name: "TheHeader",
});

const showCategory = ref(false)
const showType= ref(false)
</script>
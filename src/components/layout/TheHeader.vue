<template>
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <nav>
          <ul class="header__top">
            <!-- home -->
            <li class="header__link">
              <router-link  to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path
                    d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
                  />
                </svg>
              </router-link>
            </li>
            <!-- favorite -->
            <li class="header__link"> 
              <router-link to="/">
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
            </li>
            <!-- brands -->
            <li class="header__link"> 
              <router-link to="/all-brand"> Brands </router-link>
            </li>
            <!-- category -->
            <li class="header__link dropdown"> 
              <router-link to="/all-category"> Category </router-link>
            </li>
            <!-- category items -->
            <ul class="header__bottom">
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
              <router-link   to="/all-product-type">Types</router-link>
            </li>
            <ul class="header__bottom">
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
import { defineOptions } from "vue";

defineOptions({
  name: "TheHeader",
});
</script>
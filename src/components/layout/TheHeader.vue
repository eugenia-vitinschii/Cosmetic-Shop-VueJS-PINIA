<template>
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
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
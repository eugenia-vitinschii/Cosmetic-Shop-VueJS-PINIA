<template>
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <nav>
          <ul>
            <li>
              <router-link class="header__link" to="/">
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
            <li>
              <router-link class="header__link" to="/">
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
            <li>
              <router-link class="header__link" to="/all-brand">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path
                    d="M480-120 80-600l120-240h560l120 240-400 480Zm-95-520h190l-60-120h-70l-60 120Zm55 347v-267H218l222 267Zm80 0 222-267H520v267Zm144-347h106l-60-120H604l60 120Zm-474 0h106l60-120H250l-60 120Z"
                  /></svg
              ></router-link>
            </li>
            <li @click="showCategory = !showCategory">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path
                  d="M200-80 40-520l200-120v-240h160v240l200 120L440-80H200Zm480 0q-17 0-28.5-11.5T640-120q0-17 11.5-28.5T680-160h120v-80H680q-17 0-28.5-11.5T640-280q0-17 11.5-28.5T680-320h120v-80H680q-17 0-28.5-11.5T640-440q0-17 11.5-28.5T680-480h120v-80H680q-17 0-28.5-11.5T640-600q0-17 11.5-28.5T680-640h120v-80H680q-17 0-28.5-11.5T640-760q0-17 11.5-28.5T680-800h160q33 0 56.5 23.5T920-720v560q0 33-23.5 56.5T840-80H680Zm-424-80h128l118-326-124-74H262l-124 74 118 326Zm64-200Z"
                />
              </svg>
            </li>
            <ul class="header__bottom" v-show="showCategory">
              <li>
                <router-link to="/category/liquid"> LIQUID </router-link>
              </li>
              <li>
                <router-link to="/category/powder"> POWDER </router-link>
              </li>
              <li>
                <router-link to="/category/concealer"> CONCEALER </router-link>
              </li>
              <li>
                <router-link to="/category/highlighter"> HIGHLIGHTER </router-link>
              </li>
              <li>
                <router-link to="/category/liquid"> BB_CC </router-link>
              </li>
              <li>
                <router-link to="/category/liquid"> CONTOUR </router-link>
              </li>
              <li>
                <router-link to="/category/liquid"> CREAM </router-link>
              </li>
              <li>
                <router-link to="/category/liquid"> MINERAL </router-link>
              </li>
              <li>
                <router-link to="/category/liquid"> LIPSTICK </router-link>
              </li>
              <li>
                <router-link to="/category/liquid"> LIP_GLOSS </router-link>
              </li>
              <li>
                <router-link to="/category/liquid"> PALETTE </router-link>
              </li>
              <li>
                <router-link to="/category/liquid">  PENCIL </router-link>
              </li>
              <li>
                <router-link to="/category/liquid">  GEL </router-link>
              </li>

            </ul>
            <li @click="showTypes = !showTypes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path
                  d="m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z"
                />
              </svg>
            </li>
            <ul class="header__bottom" v-show="showTypes">
              <li>
                <router-link to="/category/liquid">FOUNDATION </router-link>
              </li>
              <li>
                <router-link to="/category/liquid">LIPSTICK </router-link>
              </li>
              <li>
                <router-link to="/category/liquid">EYESHADOW</router-link>
              </li>
              <li>
                <router-link to="/category/liquid">BLUSH</router-link>
              </li>
              <li>
                <router-link to="/category/liquid">NAIL_POLISH </router-link>
              </li>
              <li>
                <router-link to="/category/liquid">BRONZER</router-link>
              </li>
               <li>
                <router-link to="/category/liquid">EYELINER</router-link>
              </li>

            </ul>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>


<script setup>
import { defineOptions, ref } from "vue";

defineOptions({
  name: "TheHeader",
});

let showCategory = ref(false);
let showTypes = ref(false);
</script>
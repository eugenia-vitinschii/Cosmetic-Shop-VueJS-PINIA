<template>
  <div class="account">
    <div class="container">
      <div class="account__wrapper">
        <div class="page-header">
          <back-button />
          <the-breadcrumbs :items="[
            { label: 'home', to: '/' },
            { label: 'account', to: '/account' },
          ]" :current="'edit account'" />
        </div>
        <p class="heading">Edit Account View</p>
      </div>
    </div>
  </div>
  <div class="swiper">
    <div class="container">
      <div class="swiper__wrapper">
        <p class="heading">Lipstick</p>
        <category-sliders />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//vue 

//components
import BackButton from '@/components/core/BackButton.vue';
import TheBreadcrumbs from "@/components/core/Breadcrumbs.vue"
import CategorySliders from "@/components/sliders/CategorySliders.vue";

//Component settings
defineOptions({
  name: 'AccountEditView'
})

</script>

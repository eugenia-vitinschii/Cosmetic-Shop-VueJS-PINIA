<template>
<div class="product-card-skeleton">
   <div class="product-card-skeleton__img shimmer" >
   </div>
   <div class="product-card-skeleton__content">
      <div class="product-card-skeleton__title shimmer"></div>
      <div class="product-card-skeleton__info">
         <div class="product-card-skeleton__text shimmer"></div>
         <div class="product-card-skeleton__text shimmer"></div>
         <div class="product-card-skeleton__text shimmer"></div>
      </div>
   </div>
</div>
</template>

<script setup lang="ts">
//vue 
//Component settings
defineOptions({
  name: 'ProductCardSkeleton'
})
</script>

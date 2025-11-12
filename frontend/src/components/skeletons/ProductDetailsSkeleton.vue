<template>
<div class="product-details-skeleton">
   <div class="product-details-skeleton__layout">
      <div class="product-details-skeleton__details">
         <div class="product-details-skeleton__details--top">
            <div class="product-details-skeleton__details--text shimmer"></div>
            <div class="product-details-skeleton__details--text shimmer"></div>
         </div>
         <div class="product-details-skeleton__details--bottom  shimmer"></div>
      </div>
      <div class="product-details-skeleton__media shimmer">    
      </div>
      <div class="product-details-skeleton__info">
         <div class="product-details-skeleton__info--price shimmer"></div>
         <div class="product-details-skeleton__info--colors">
            <div class="product-details-skeleton__info--color shimmer"></div>
             <div class="product-details-skeleton__info--color shimmer"></div>
              <div class="product-details-skeleton__info--color shimmer"></div>
         </div>
      </div>
   </div>
   <div class="product-details-skeleton__description">
      <div class="product-details-skeleton__text shimmer"></div>
      <div class="product-details-skeleton__text shimmer"></div>
      <div class="product-details-skeleton__text shimmer"></div>
      <div class="product-details-skeleton__text shimmer"></div>
   </div>
</div>
</template>

<script setup lang="ts">
//vue 
//Component settings
defineOptions({
  name: 'ProductDetailsSkeleton'
})
</script>

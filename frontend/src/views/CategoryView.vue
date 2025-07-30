<template>
  <div class="category">
    <div class="container">
      <div class="category__wrapper">
         <div class="category__nav brand__nav">
            <traverse-history />
            <the-router :items="'/category'" :item="category" />
         </div>
        <div class="category__title">
          <p class="heading">Category: {{ category }}</p>
          <p class="small-text">{{ filtered(category).length }}</p>
        </div>
        <div class="category__items products-wrapper" v-if="created">
          <the-product-card
            v-for="item in filtered(category)"
          :key="item.id"
          :id="item.id"
          :image_link="item.image_link"
          :api_featured_image="item.api_featured_image"
          :name="item.name"
          :product_type="item.product_type"
          :price="item.price"
          :price_sign="item.price_sign"
          :category="item.category"
          :brand="item.brand"
          :rating="item.rating"
          :currency="item.currency"
          :isFavorite="item.id ? user.isFavorite(item.id) :false"
          @toggleFavorite="user.toggleFavorite(item)"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import {ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute } from "vue-router";

//componets
import TraverseHistory from "@/components/sections/TraverseHistory.vue";
import TheRouter from "@/components/sections/TheRouter.vue";
import TheProductCard from "@/components/TheProductCard.vue";

//pinia
import { useCosmeticStore } from "@/stores/cosmetic.store";
import { useUserStore } from "@/stores/user.store";

defineOptions({
  name: "CategoryView",
});


const cosmetic = useCosmeticStore();
const user = useUserStore()

const route = useRoute();
const category = route.params.category as string;

let created = ref(false);

const filtered = computed(() => cosmetic.fileredByCategory)

onMounted(() => {
  created.value = true;
  cosmetic.fetchCosmetics();
});

onUnmounted(() => {
  cosmetic.$reset()
});
</script>
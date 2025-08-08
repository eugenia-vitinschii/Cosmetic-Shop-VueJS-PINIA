<template>
  <div class="category">
    <div class="container">
      <div class="category__wrapper">
         <div class="category__nav brand__nav">
            <button-back />
            <router-links :items="'/category'" :item="category" />
         </div>
        <div class="category__title">
          <p class="heading">Category: {{ category }}</p>
          <p class="small-text">{{  cosmetic.fileredByCategory(category).length }}</p>
        </div>
        <div class="category__items products-wrapper">
          <product-card
            v-for="item in cosmetic.fileredByCategory(category)"
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
import { onMounted, watch,  computed } from "vue";
import { useRoute } from "vue-router";

//componets
import ButtonBack from "@/components/sections/ButtonBack.vue";
import RouterLinks from "@/components/sections/RouterLinks.vue";
import ProductCard from "@/components/product/ProductCard.vue";

//pinia
import { useCosmeticStore } from "@/stores/cosmetic.store";
import { useUserStore } from "@/stores/user.store";

defineOptions({
  name: "CategoryDetails",
});

const cosmetic = useCosmeticStore();
const user = useUserStore()

const route = useRoute();
const category =  computed (() => route.params.category as string);


onMounted(() => {
  cosmetic.fetchCosmetics();
  cosmetic.fileredByCategory(route.params.category as string)
});

watch( () => route.params.category,
    (newCategory) => cosmetic.fileredByCategory( newCategory as string)
)

</script>
<template>
  <div class="type">
    <div class="container">
      <div class="type__wrapper">
        <div class="type__nav brand__nav">
          <traverse-history />
          <the-router :items="'/product-type'" :item="product_type" />
        </div>
        <div class="type_title">
          <p class="heading">The {{ product_type }}</p>
          <p class="small-text">
            {{ fileredByProductType(product_type).length }}
          </p>
        </div>
        <div class="type__wrapper products-wrapper" v-if="created">
          <the-product-card
            v-for="item in fileredByProductType(product_type)"
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
            :currency="item.currency"
            :rating="item.rating"
             @addToFavorite="pushtoFavorite(item)"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

//componets
import TraverseHistory from "@/components/sections/TraverseHistory.vue";
import TheRouter from "@/components/sections/TheRouter.vue";
import TheProductCard from "@/components/TheProductCard.vue";

//pinia
import { useCosmeticStore } from "@/stores/cosmetic.store";
import { storeToRefs } from "pinia";

defineOptions({
  name: "ProductTypeView",
});
const store = useCosmeticStore();
const { fetchCosmetics, addToFavorite  } = store;
const { fileredByProductType } = storeToRefs(store);

const route = useRoute();
const product_type = route.params.product_type;

// add to favorite
function pushtoFavorite(cosmetics){
    addToFavorite({
    id: cosmetics.id,
    image_link: cosmetics.image_link,
    api_featured_image: cosmetics.api_featured_image,
    color: cosmetics.color,
    name: cosmetics.name,
    product_type: cosmetics.product_type,
    price: cosmetics.price,
    price_sign: cosmetics.price_sign,
    category: cosmetics.category,
    brand: cosmetics.brand,
    currency: cosmetics.currency,
    product_colors: cosmetics.product_colors
  });
}
let created = ref(false);

onMounted(() => {
  created.value = true;
  fetchCosmetics();
});

onUnmounted(() => {
  store.$reset;
});
</script>
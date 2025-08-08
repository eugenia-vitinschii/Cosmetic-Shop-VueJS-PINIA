<template>
  <div class="brand">
    <div class="container">
      <div class="brand__wrapper" v-if="brand">
        <div class="brand__nav">
           <traverse-history />
        <the-router :base="'/brand'" :sub="brand" />
        </div>
        <!-- brand title -->
        <div class="brand__title">
          <p class="heading">Brand: {{ brand }}</p>
          <p class="small-text">
             {{ filtered(brand).length }}  products were found</p>
        </div>
        <!-- brand items -->
        <div class="brand__items products-wrapper">
          <the-product-card
            v-for="item in filtered(brand)"
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
      <p class="body-text" v-else>Something is wrong, try again</p>
    </div>
  </div>
</template>


<script setup lang="ts">
import { onMounted, watch, computed} from "vue";
//vue router
import { useRoute } from "vue-router";

//componets
import TraverseHistory from "@/components/sections/TraverseHistory.vue";
import TheRouter from "@/components/sections/TheRouter.vue";
import TheProductCard from "@/components/TheProductCard.vue";

//pinia
import { useCosmeticStore } from "@/stores/cosmetic.store";
import { useUserStore } from "@/stores/user.store";


defineOptions({
  name: "BrandDetails",
});

const cosmetic = useCosmeticStore();
const user = useUserStore();

//router
const route = useRoute();
const brand = route.params.brand  as string;


//filtered
const filtered = computed(() => cosmetic.filteredByBrand )

//hooks
onMounted(() => {
  cosmetic.fetchCosmetics();
  cosmetic.filteredByBrand(route.params.brand as string)
});
watch(() => route.params.brand,
  (newType) => {
    cosmetic.filteredByBrand(newType as string);
  }
);
</script>
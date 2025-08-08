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
            {{ filtered(product_type).length }}
          </p>
        </div>
        <div class="type__wrapper products-wrapper" v-if="created">
          <the-product-card
            v-for="item in filtered(product_type)"
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
          :isFavorite="item.id ? user.isFavorite(item.id) :false"
          @toggleFavorite="user.toggleFavorite(item)"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute } from "vue-router";

//componets
import TraverseHistory from "@/components/sections/TraverseHistory.vue";
import TheRouter from "@/components/sections/TheRouter.vue";
import TheProductCard from "@/components/TheProductCard.vue";

//pinia
import { useCosmeticStore } from "@/stores/cosmetic.store";
import { useUserStore } from "@/stores/user.store";

defineOptions({
  name: "ProductTypeDetails",
});

const cosmetic = useCosmeticStore();
const user = useUserStore()

const route = useRoute();
const product_type = route.params.product_type as string;

let created = ref(false);

const filtered = computed(() => cosmetic.fileredByProductType)

onMounted(() => {
  created.value = true;
  cosmetic.fetchCosmetics();
});

onUnmounted(() => {
  cosmetic.$reset;
});
</script>
<template>
  <div class="filtered-products">
    <div class="container">
      <div class="filtered-products__wrapper" v-if="productType">
        <div class="page-header">
          <back-button/>
          <the-breadcrumbs
            :items="[
              {label: 'home', to: '/'},
              {label: 'types', to: '/product-type'},
            ]"
            :current="productType"
          />
        </div>
        <div class="filtered-products__title">
          <p class="heading">The {{ productType }}</p>
          <p class="small-text">{{ filtered(productType).length }}</p>
        </div>
          <transition-group name="skeleton" tag="div" appear class="filtered-products__container">
            <product-card-skeleton v-if="loading" v-for="i in 9" :key="i" />  
            <template v-else>
              <product-card
                v-for="item in filtered(productType)"
                :key="item.id"
                :id="item.id"
                :image_link="item.image_link"
                :api_featured_image="item.api_featured_image"
                :name="item.name"
                :product_type="item.product_type"
                :price="Number(item.price)"
                :price_sign="item.price_sign"
                :category="item.category"
                :brand="item.brand"
                :currency="item.currency"
                :rating="item.rating"
                :isFavorite="item.id ? user.isFavorite(item.id) :false"
                @toggleFavorite="user.toggleFavorite(item)"
              />
            </template>
          </transition-group>
        </div>
      <p class="body-text" v-else>error</p>
    </div>
    </div>
</template>


<script setup lang="ts">

import { onMounted, watch, computed, ref} from "vue";

import { useRoute } from "vue-router";

//componets
import TheBreadcrumbs from "@/components/core/Breadcrumbs.vue"
import BackButton from "@/components/core/BackButton.vue";
import ProductCard from "@/components/product/ProductCard.vue";
import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton.vue";
//pinia
import { useCosmeticStore } from "@/stores/cosmetic.store";
import { useUserStore } from "@/stores/user.store";

defineOptions({
  name: "ProductTypeDetails",
});

const cosmetic = useCosmeticStore();
const user = useUserStore()

const route = useRoute();
const productType = route.params.product_type as string;


const filtered = computed(() => cosmetic.fileredByProductType)

//delay
const loading = ref(true)

onMounted(async() => {
  try{
    await await cosmetic.fetchCosmetics();
    cosmetic.fileredByProductType(productType)
   
  }catch(err){
    console.error('Error fetching cosmetics:', err)
  }
  finally{
    setTimeout(() => {
      loading.value = false
    }, 1000)  
  }
});


watch(() => route.params.product_type,
  (newType) => {
    cosmetic.fileredByProductType(newType as string)
  }
)
</script>
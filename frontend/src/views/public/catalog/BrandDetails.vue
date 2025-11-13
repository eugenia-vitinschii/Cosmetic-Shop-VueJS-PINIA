<template>
  <div class="filtered-products">
    <div class="container">
      <div class="filtered-products__wrapper" v-if="brand">
        <div class="page-header">
          <back-button/>
          <the-breadcrumbs
            :items="[
              {label: 'home', to: '/'},
              {label: 'brands', to: '/brand'},
            ]"
            :current="brand"
          />
        </div>
        <!-- brand title -->
        <div class="filtered-products__title">
          <p class="heading">Brand: {{ brand }}</p>
          <p class="small-text">
             {{ filtered(brand).length }}  products were found
          </p>
        </div>
        <!-- brand items -->
          <transition-group name="skeleton" tag="div" appear class="filtered-products__container">
            <product-card-skeleton v-if="loading" v-for="i in 9" :key="i" />  
            <template v-else>
              <product-card
                v-for="item in filtered(brand)"
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
                :rating="item.rating"
                :currency="item.currency"
                :isFavorite="item.id ? user.isFavorite(item.id) :false"
                @toggleFavorite="user.toggleFavorite(item)"
              />
            </template>
          </transition-group>
        </div>    
      <p class="body-text" v-else>Something is wrong, try again</p>
    </div>
  </div>
</template>


<script setup lang="ts">
import { onMounted, watch, computed, ref} from "vue";
//vue router
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
  name: "BrandDetails",
});

const cosmetic = useCosmeticStore();
const user = useUserStore();

//router
const route = useRoute();
const brand = route.params.brand  as string;

//filtered
const filtered = computed(() => cosmetic.filteredByBrand)

const loading = ref(true)

//hooks
onMounted(async() => {
  try{
    await cosmetic.fetchCosmetics();
    cosmetic.filteredByBrand(brand)
  }catch(err){
    console.error('Error fetching cosmetics:', err)
  }finally{
    setTimeout(() => {
      loading.value = false
    }, 1000)
  }
});

watch(() => route.params.brand,
  (newType) => {
    cosmetic.filteredByBrand(newType as string);
  }
);

</script>
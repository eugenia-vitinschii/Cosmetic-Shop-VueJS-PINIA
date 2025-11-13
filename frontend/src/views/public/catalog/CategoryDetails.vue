<template>
  <div class="filtered-products">
    <div class="container">
      <div class="filtered-products__wrapper" v-if="category">
         <div class="page-header">
          <back-button/>
          <the-breadcrumbs
            :items="[
              {label: 'home', to: '/'},
              {label: 'categories', to: '/category'},
            ]"
            :current="category"
          />
        </div>
        <div class="filtered-products__title">
          <p class="heading">Category: {{ category }}</p>
          <p class="small-text">{{  cosmetic.fileredByCategory(category).length }}</p>
        </div>
          <transition-group name="skeleton" tag="div" appear class="filtered-products__container">
            <product-card-skeleton v-if="loading" v-for="i in 9" :key="i" />  
            <template v-else>
              <product-card
                v-for="item in filtered(category)"
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
      <p class="body-text" v-else>error</p>
    </div>
  </div>
</template>


<script setup lang="ts">
import { onMounted, watch,  computed , ref} from "vue";
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
  name: "CategoryDetails",
});

const cosmetic = useCosmeticStore();
const user = useUserStore()

const route = useRoute();
const category =  computed (() => route.params.category as string);

//filtered
const filtered = computed(() => cosmetic.fileredByCategory)

//delay
const loading = ref(true)

onMounted(async() => {
  try{
    await cosmetic.fetchCosmetics();
    cosmetic.fileredByCategory(category.value)
  }catch(err){
    console.error('Error fetching cosmetics:', err)
  }finally{
      setTimeout(() => {
      loading.value = false
    }, 1000)  
  }

});


watch(() => route.params.category,
  (newCategory) => cosmetic.fileredByCategory(newCategory as string)
)

</script>
<template>
<!-- all brands -->
  <div class="brand">
    <div class="container">
      <div class="brand__wrapper">
        <!-- brand nav -->
        <div class="brand__nav">
          <button-back/>
        </div>
        <!-- brands items -->
        <div class="brand__items" v-if="created">
          <brand-link
            v-for="(item, index) in allBrands"
            :index="index"
            :key="index"
            :brand="item"
          >
          </brand-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
//vue
import { ref, onMounted} from "vue";

//components
import ButtonBack from "@/components/sections/ButtonBack.vue";
import BrandLink from "@/components/ui/BrandLink.vue";


defineOptions({
  name: "BrandListView",
});

//pinia
import { useCosmeticStore } from "@/stores/cosmetic.store";
import { storeToRefs } from "pinia";

const store = useCosmeticStore();
const { fetchCosmetics } = store;
const { allBrands  } = storeToRefs(store);

let created = ref<boolean>(false); 

onMounted(() => {
  created.value = true
  fetchCosmetics();
});


</script>
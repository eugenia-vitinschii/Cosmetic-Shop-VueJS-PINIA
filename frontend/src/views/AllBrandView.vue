<template>
<!-- all brands -->
  <div class="brand">
    <the-decor/>
    <div class="container">
      <div class="brand__wrapper">
        <!-- brand nav -->
        <div class="brand__nav">
          <traverse-history/>
        </div>
        <!-- brands items -->
        <div class="brand__items" v-if="created">
          <the-brand
            v-for="(item, index) in allBrands"
            :index="index"
            :key="index"
            :brand="item"
          >
          </the-brand>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
//vue
import { ref, onMounted} from "vue";

//components
import TheDecor from "@/components/sections/TheDecor.vue"
import TraverseHistory from "@/components/sections/TraverseHistory.vue"
import TheBrand from "@/components/TheBrand.vue";

defineOptions({
  name: "AllBrandView",
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
<template>
  <div class="brand__item">
    <router-link :to="'/product-type/' + brand" class="brand-text">
      {{ brand }}
    </router-link>
  </div>
</template>

<script setup>
import { defineOptions, defineProps } from "vue";

defineOptions({
  name: "TheProductType",
});

defineProps({
  id: {
    type: String,
  },
  brand: {
    type: String,
  },
});
</script>

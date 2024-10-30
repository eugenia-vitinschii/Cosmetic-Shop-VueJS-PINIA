<template>
  <div class="brand__item">
    <router-link :to="'/category/' + brand" class="brand-text">
      {{ brand }}
    </router-link>
  </div>
</template>

<script setup>
import { defineOptions, defineProps } from "vue";

defineOptions({
  name: "TheCategoryType",
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
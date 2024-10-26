<template>
  <div class="brand__item">
    <router-link :to="'/brand/' + brand" class="brand-text">
      {{ brand }}
    </router-link>
  </div>
</template>

<script setup>
import { defineOptions, defineProps } from "vue";

defineOptions({
  name: "TheBrand",
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

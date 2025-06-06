<template>
  <div class="brand__item">
    <router-link :to="'/brand/' + brand" class="body-text-light">
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

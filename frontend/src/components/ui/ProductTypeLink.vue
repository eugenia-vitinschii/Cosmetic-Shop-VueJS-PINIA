<template>
  <div class="brand__item">
    <router-link :to="'/product-type/' + brand" class="body-text-light link">
      {{ brand }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "ProductTypeLink",
});

const props = defineProps<{
  brand: string
}>()

</script>

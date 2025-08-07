<template>
  <div class="brand__item">
    <router-link :to="'/product-type/' + brand" class="body-text-light">
      {{ brand }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "TheProductType",
});

const props = defineProps<{
  brand: string
}>()

</script>

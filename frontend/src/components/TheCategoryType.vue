<template>
  <div class="brand__item">
    <router-link :to="'/category/' + brand" class="body-text-light">
      {{ brand }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
//componet
defineOptions({
  name: "TheCategoryType",
});

//props
const props = defineProps<{
  id: string,
  brand: string
}>()

</script>
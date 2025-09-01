<template>
  <div class="brand__item">
    <router-link :to="'/category/' + brand" class="body-text-light link">
      {{ brand }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
//componet
defineOptions({
  name: "TheCategoryLink",
});

//props
const props = defineProps<{
  brand: string,
}>()

</script>
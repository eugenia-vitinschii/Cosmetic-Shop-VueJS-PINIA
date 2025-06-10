<template>
  <div class="brand__item">
    <router-link :to="'/brand/' + brand" class="body-text-light">
      {{ brand }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
//component
defineOptions({
  name: "TheBrand",
});

//props
const props = defineProps<{
  brand: string
}>()

</script>

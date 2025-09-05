<template>
<nav 
   class="breadcrumbs"
   aria-label="Breadcrumb"
>
   <router-link
      v-for="(item, index) in items"
      :key="index"
      :to="item.to"
      class="breadcrumbs__link body-text link " 
   >
      {{ item.label }} /
   </router-link>
   <!-- current page -->
   <span class="breadcrumbs__current body-text" > {{ current }}</span>
</nav>
</template>

<script setup lang="ts">

defineOptions({
   name: "TheBreadcrumbs"
})

//props
const props = defineProps<{
   items: {
      label: string;
      to: string
   }[];
   current: string;
}>()
</script>
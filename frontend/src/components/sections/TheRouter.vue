<template>
   <div class="router">
      <router-link to="/" class="body-text-light hover-text">
         home
      </router-link>
      <router-link :to="items" class="body-text-light hover-text">
         {{ items}}
      </router-link>
      <span>/</span>
      <router-link :to="item" class="body-text">
         {{ item}}
      </router-link>
   </div>
</template>

<script setup lang="ts">
 defineOptions({
   name: "TheRouter"
 })

//props
const props = defineProps<{
   items: string,
   item: string
}>()

</script>

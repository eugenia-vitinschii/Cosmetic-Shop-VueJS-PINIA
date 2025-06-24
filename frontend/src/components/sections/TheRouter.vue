<template>
   <div class="router">
      <router-link to="/" class="body-text-light hover-text">
         home
      </router-link>
      <router-link :to="`${base}`" class="body-text-light hover-text">
         {{ base}}
      </router-link>
      <span v-if="sub">/</span>
      <router-link :to="`${base}/${sub}`" class="body-text">
         {{ sub}}
      </router-link>
   </div>
</template>

<script setup lang="ts">
 defineOptions({
   name: "TheRouter"
 })

//props
const props = defineProps<{
   base?: string,
   sub?: string
}>()

</script>

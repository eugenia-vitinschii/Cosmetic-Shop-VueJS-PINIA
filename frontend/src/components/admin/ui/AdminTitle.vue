<template>
   <div class="admin-title">
      <h1 class="admin-subheading">
         <slot>
            {{ title }}
         </slot>
      </h1>
</div>
</template>

<script setup lang="ts">

//Component settings
defineOptions({
  name: 'AdminTitle'
})

defineProps<{
   title?: string
}>()

</script>

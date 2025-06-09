<template>
   <li><a :href="section">{{name}}</a></li>
</template>

<script setup lang="ts">

defineOptions({
   name: "SmallNavItem"
})

const props = defineProps<{
   section: string,
   name:string
}>()


</script>

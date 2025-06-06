<template>
   <li><a :href="section">{{name}}</a></li>
</template>

<script setup>
import defineProps from "vue"

defineProps({
   section: {
      type: String},
   name: {
      type: String
   }
 })


</script>

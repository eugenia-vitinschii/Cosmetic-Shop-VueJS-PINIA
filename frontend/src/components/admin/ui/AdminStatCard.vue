<template>
   <div class="admin-stat-card">
      <div class="admin-stat-card__icon">
         <slot name="icon"></slot>
      </div>
      <div class="admin-stat-card">
         <p class="admin-body-text">{{ label }}</p>
         <p class="admin-subheading">{{ value }}</p>
      </div>
   </div>
</template>

<script setup lang="ts">
//vue 


//Component settings
defineOptions({
  name: 'AdminStatsCards'
})


defineProps<{
   label: string
   value: string |number
}>()
</script>

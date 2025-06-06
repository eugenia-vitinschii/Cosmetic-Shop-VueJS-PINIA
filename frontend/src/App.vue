<template>
<the-header />
  <!-- content -->
  <div class="content">
    <router-view />
  </div>
  <!-- footer -->
<the-footer/>
</template>

<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
</script>
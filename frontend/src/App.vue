<template>
  <div :class="['app-wrapper', {'admin-theme': isAdminRoute}]">
    <the-header v-if="!isAdminRoute" />
  <!-- content -->
  <div class="content">
    <router-view />
  </div>
  <!-- footer -->
<the-footer v-if="!isAdminRoute"/>
  </div>

</template>

<script setup lang="ts">
//vue
import {useRoute} from 'vue-router'
import {computed} from 'vue'

//components
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue';

//variables
const route = useRoute()

const isAdminRoute = computed(() => route.path.startsWith('/admin'))

</script>
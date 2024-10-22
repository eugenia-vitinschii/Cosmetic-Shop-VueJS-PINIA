<template>
   <ul>
      <li>
         <router-link class="body-text" to="/">Home</router-link>
      </li>
   </ul>
   
</template>


<script setup>

import { defineOptions } from 'vue';

defineOptions({
   name: "TheHeader",
});

</script>
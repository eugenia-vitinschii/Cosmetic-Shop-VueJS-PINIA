<template>
<!-- go back svg -->
  <div class="traverse-history">
    <button class="button-svg" @click="$router.go(-1)">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#e8eaed"
      >
        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
//component
defineOptions({
  name: "BackButton",
});
</script>
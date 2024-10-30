<template>
  <div class="delivery">
    <div class="delivery__item">
      <p class="body-text"> Deliver time {{ currentDate.getMonth() }}</p>
      <p>{{ currentDate }}</p>
    </div>
    <div class="delivery__item">
      <p class="body-text">Free Shipping (Orders $10)</p>
    </div>
    <div class="delivery__item">
      <p class="body-text">Return policy</p>
    </div>
  </div>
</template>

<script setup>
import { defineOptions } from "vue";

defineOptions({
  name: "TheDelivery",
});

const currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 7)

</script>

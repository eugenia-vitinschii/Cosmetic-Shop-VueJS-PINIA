<template>
  <div class="empty">
    <div class="empty__text">
      <p class="subheading">
        Your {{ entity }} is empty.
        <router-link 
          :to="link"
          class="subheading">
          Pick some Products!
        </router-link>
      </p>
    </div>
    <div class="empty__img">
      <img 
        :src="image || defaultImage" 
        alt="Empty state"
      >
    </div>
  </div>
</template>

<script setup lang="ts">

//Component settings
defineOptions({
  name: 'MyComponent'
})

defineProps<{
  entity: string
  link: string
  image?: string
}>()

const defaultImage = new URL('@/assets/img/empty-cart.jpg', import.meta.url).href

</script>

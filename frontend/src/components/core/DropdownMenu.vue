<template>
<div class="dropdown">
   <div class="dropdown__button">
      <router-link :to="to" class="header__link"> {{ title }} </router-link>
      <button @click="$emit('toggle')" :class="{ active: isOpen }"  class="dropdown__toggle"> 
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-360 280-560h400L480-360Z"/></svg>
      </button>
   </div>

   <div v-if="isOpen" class="header__bottom dropdown__menu">
      <div class="dropdown__menu--items">
         <ul v-for="(group, i) in groups" :key="i" class="dropdown__menu--item">
            <li v-for="item in group.items" :key="item.link">
               <router-link :to="item.link" class="header__link">{{ item.name }}</router-link>
            </li>
         </ul>
      </div>
   </div>
</div>

</template>

<script setup lang="ts">

const props = defineProps<{
   title: string
   to: string
   isOpen: boolean
   groups: { title?: string; items: { name: string; link: string}[]} []
}>()

defineEmits(["toggle"])
</script>
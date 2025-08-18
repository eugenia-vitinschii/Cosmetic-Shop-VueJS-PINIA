<template>
<div class="star" v-if="ratingStar">
   <div class="star__item-gray">
      <svg
        v-for="i in 5"
        :key="`gray-${i}`"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#e3e3e3"
      >
        <path
          d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143Z"
        />
      </svg>
   </div>
   <div class="star__item-color">
      <svg
        v-for="i in filteredCount"
        :key="`color-${i}`"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#ffc107"
      >
        <path
          d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143Z"
        />
      </svg>
   </div>
   <div class="star__item" v-if="hasRating">
      ({{ ratingStar }})
   </div>
</div>
</template>

<script setup lang="ts">
//vue
import { computed} from 'vue';

//props
const props = withDefaults(defineProps<{
  ratingStar?:number |null
}>(),{
  ratingStar: null
})

//colored starts count
const filteredCount = computed(() =>{
  const c = props.ratingStar ?? 0;
  return Math.max(0, Math.floor(c));
})

//show rating 
const hasRating = computed(() => props.ratingStar != null)

</script>
 
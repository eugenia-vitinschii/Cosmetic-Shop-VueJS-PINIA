<template>
<Transition name="popup">
  <div class="modal">
    <div v-if="show" class="modal__wrapper">
      <div class="modal__content">
         <button class="modal__close" @click="$emit('close')">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
         </button>
        <div class="modal__item">
          <p class="body-text">
            Items in this category are not able to be returned or exchanged,
            please understand.
          </p>
          <button @click="$emit('close')" class="body-text">ok</button>
        </div>
      </div>
    </div>
  </div>
</Transition>
</template>

<script setup lang="ts">

defineOptions({
  name: 'ReturnPolicy'
});

const props = defineProps<{
  show: boolean
}>();

</script>

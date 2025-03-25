<template>
  <details class="accordion">
    <summary class="accordion__title subheading">
      {{title}} 
      </summary>
    <div class="accordion__content">
      <p class="body-text-light">
       {{content}}
      </p>
    </div>
  </details>
</template>

<script setup>
import {defineOptions, defineProps} from 'vue';

//component settings
defineOptions({
   name: "TheAccordion"
});

//props
defineProps({
   title:{
      type: String,
   },
   content:{
      type: String,
   }
})

</script>

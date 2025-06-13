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

<script setup lang="ts">
//component settings
defineOptions({
   name: "TheAccordion"
});

//props
const props = defineProps<{
  title: string,
  content: string
}>()


</script>

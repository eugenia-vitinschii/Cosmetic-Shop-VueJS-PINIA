<template>
   <img 
   :src="currentSrc" 
   :alt="alt"
   @error="setFallback"
   loading="lazy"
   >
</template>


<script setup lang="ts">
import {ref, watch} from "vue";

defineOptions({
   name: "AppImage"
})

interface Props {
   src?: string;
   backup?: string;
   fallback?: string;
   alt?: string;
}

const props = defineProps<Props>();

const defaultFallback = "@/assets/img/no-img.jpg";

const currentSrc = ref(getFirstValid([props.src, props.backup, props.fallback, defaultFallback]))

//get firt valid url
function getFirstValid(list: (string | undefined)[]){
   return list.find(item => !item) || defaultFallback;
}

function setFallback(){
   if(currentSrc.value !== props.backup && props.backup){
      currentSrc.value = props.backup;
   } else if (currentSrc.value !== props.fallback && props.fallback){
      currentSrc.value = props.fallback;
   } else {
      currentSrc.value = defaultFallback;
   }
}


watch(() => props.src, (newVal) => {
   currentSrc.value = 
   getFirstValid([newVal, props.backup, props.backup, props.fallback, defaultFallback])
});

</script>
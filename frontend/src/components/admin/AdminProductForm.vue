<template>
<div class="admin-product-form">
   <admin-toast ref="toast"/>
   <div class="admin-product-form__buttons">
      <button 
         class="admin-svg-button"
         @click="prevTab"
         :disabled="activeIndex === 0"
      >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
      </button>
      <button 
         class="admin-body-text"
         v-for="(tab, i) in tabs"
         :key="i"   
         :class="['tab-button', {active: activeIndex === i}]"
         @click="activeIndex = i"  
      >
         {{ tab.label}}
      </button>
      <button 
         class="admin-svg-button"
         @click="nextTab"
         :disabled="activeIndex === tabs.length -1"
      >
         <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
      </button>
   </div>
   <form 
      class="admin-product-form__form" 
      @submit.prevent="handleSubmit"
   >
      <div class="admin-product-form__tabs">
         <keep-alive>
            <component 
               :is="activeTab.component"
               v-model="product"
            />
         </keep-alive>
      </div>
      <div class="admin-product-form__buttons">
         <button class="admin-svg-button" @click="$router.go(-1)" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
         </button>
         <button class="admin-svg-button" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
         </button>
      </div>
   </form>   
</div>

</template>

<script setup lang="ts">
//vue
import {computed, defineAsyncComponent, ref, watch } from 'vue';

//components
import AdminToast from './ui/AdminToast.vue';

//product model
import type { ProductData } from '@/models/product';


//tab logic
const activeIndex = ref(0)
const activeTab = computed(() => tabs[activeIndex.value])

const tabs = [
   {key: 'GeneralTab', label:'General', component: defineAsyncComponent(() => import('./tabs/GeneralTab.vue'))},
   {key: 'CategorizationTab', label:'Categorization', component: defineAsyncComponent(() => import('./tabs/CategorizationTab.vue'))},
   {key: 'MediaTab', label:'Media', component: defineAsyncComponent(() => import('./tabs/MediaTab.vue'))},
   {key: 'DescriptionTab', label:'Description', component: defineAsyncComponent(() => import('./tabs/DescriptionTab.vue'))},
   {key: 'SystemInfoTab', label:'System Info', component: defineAsyncComponent(() => import('./tabs/SystemInfoTab.vue'))},
   {key: 'ProductColorsTab', label:'Product colors', component: defineAsyncComponent(() => import('./tabs/ProductColorsTab.vue'))},
]

function nextTab(){
   if(activeIndex.value < tabs.length -1) activeIndex.value ++
}

function prevTab(){
   if(activeIndex.value > 0) activeIndex.value --
}

//emit
const emit = defineEmits<{
   (e: 'update:modelValue', value: ProductData): void
   (e: 'submit', value: ProductData): void
}>()

//props
const props = defineProps<{
   modelValue: ProductData
}>()

//local copy
const product = ref<Partial<ProductData>>({...props.modelValue})

//sync with v-model
watch(product, (newVal) => {
   emit('update:modelValue', newVal as ProductData)
}, {deep: true})

//toast
const toast = ref<InstanceType<typeof AdminToast>>()

//handleSubmit
function handleSubmit(){
   if(!product.value) {
       toast.value?.showToast('Error: missing product data')
       return
   }

   emit('submit', product.value as ProductData)

   toast.value?.showToast('Product saved successfully')
}

</script>
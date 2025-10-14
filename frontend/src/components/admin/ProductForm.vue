<template>
       <div class="add__tabs-buttons">
         <button 
             class="admin-body-text"
            v-for="tab in tabs"
            :key="tab.key"
            @click="activeTab = tab.key"         
         >
            {{ tab.label }}
         </button>
      </div>
   <form 
      class="add__form" 
      @submit.prevent="handleSubmit"
      >

<div class="add__tabs">
            <GeneralTab v-model="product" v-if="activeTab === 'GeneralTab'"/>
         <CategorizationTab v-model="product" v-if="activeTab === 'CategorizationTab'"/>
         <MediaTab v-model="product" v-if="activeTab === 'MediaTab'"/>
         <SystemInfoTab v-model="product" v-if="activeTab === 'SystemInfoTab'"/>
         <ProductColorsTab v-model="product" v-if="activeTab === 'ProductColorsTab'"/>
</div>
         <div class="add__buttons">
                        <button class="delete tooltip" @click="$router.go(-1)" type="button">
              <span class="tooltip-text small-text">back</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path
                  d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"
                />
              </svg>
            </button>
            <button class="edit tooltip" type="submit">
              <span class="tooltip-text small-text">save</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path
                  d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                />
              </svg>
            </button>
         </div>
   </form>
</template>

<script setup lang="ts">
//vue
import {ref, watch } from 'vue';

//product model
import type { ProductData } from '@/models/product';

//components
import CategorizationTab from './tabs/CategorizationTab.vue';
import GeneralTab from './tabs/GeneralTab.vue';
import MediaTab from './tabs/MediaTab.vue';
import SystemInfoTab from'./tabs/SystemInfoTab.vue';
import ProductColorsTab from './tabs/ProductColorsTab.vue';
//tab logic
const activeTab = ref('GeneralTab')

const tabs = [
   {key: 'GeneralTab', label:'General'},
   {key: 'CategorizationTab', label:'Categorization'},
   {key: 'MediaTab', label:'Media'},
   {key: 'SystemInfoTab', label:'System Info'},
   {key: 'ProductColorsTab', label:'Product colors'},
]


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

watch(product, (newVal) => {
   emit('update:modelValue', newVal as ProductData)
}, {deep: true})

//handleSubmit
function handleSubmit(){
   emit('submit', product.value as ProductData)
}

</script>
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
      <div class="admin-product-form__buttons-tabs">
         <button 
            class="admin-body-text"
            v-for="(tab, i) in tabs"
            :key="i"   
            :class="{'active-tab': activeIndex === i, 'tab-error': tabHasErrors(tab)}"
            @click="activeIndex = i"  
      >
         {{ tab.label}}
      </button>
      </div>
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
      @submit.prevent="onSubmit"
   >
      <div class="admin-product-form__tabs">
         <keep-alive>
            <component 
               :is="activeTab.component"
            />
         </keep-alive>
      </div>
      <div class="admin-product-form__actions">
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
import {computed, defineAsyncComponent, watch,ref, markRaw} from 'vue';

//vee validate
import  {useForm} from "vee-validate" 
import  type { FormErrors, InvalidSubmissionContext} from "vee-validate" 
import { toFormValidator } from '@vee-validate/zod';

//components
import AdminToast from './ui/AdminToast.vue';

//product model, schema
import type { ProductData } from '@/models/product';
import { productSchema } from '@/validation/product/product.schema';

import type {TabConfig, ProductField} from "@/types/tab"

//tab logic
const activeIndex = ref(0)
const activeTab = computed(() => tabs[activeIndex.value])

const tabs =markRaw<TabConfig[]> ([
   { 
      key: 'GeneralTab', 
      label:'General', 
      fields: ['name', 'brand', 'price'],
      component: defineAsyncComponent(() => import('./tabs/GeneralTab.vue'))
   },
   {
      key: 'CategorizationTab', 
      label:'Categorization', 
      fields: ['product_type', 'category'],
      component: defineAsyncComponent(() => import('./tabs/CategorizationTab.vue'))
   },
   {key: 'MediaTab', label:'Media',  fields: [],component: defineAsyncComponent(() => import('./tabs/MediaTab.vue'))},
   {key: 'DescriptionTab', label:'Description',  fields: [],component: defineAsyncComponent(() => import('./tabs/DescriptionTab.vue'))},
   {key: 'SystemInfoTab', label:'System Info',  fields: [],component: defineAsyncComponent(() => import('./tabs/SystemInfoTab.vue'))},
   {key: 'ProductColorsTab', label:'Product colors',  fields: [],component: defineAsyncComponent(() => import('./tabs/ProductColorsTab.vue'))},
])

function nextTab(){
   if(activeIndex.value < tabs.length -1) activeIndex.value ++
}
function prevTab(){
   if(activeIndex.value > 0) activeIndex.value --
}
// //emit
const emit = defineEmits<{
   (e: 'submit', value: ProductData): void
}>()

//validation
const {handleSubmit, setValues, errors, submitCount} = useForm({
   validationSchema: toFormValidator(productSchema)
})

//props
const props = defineProps<{
   initialValues?: ProductData
}>()


watch(() => props.initialValues, (val) => {
   if(val){
      setValues(val);
   }
},{immediate: true}
)

//toast
const toast = ref<InstanceType<typeof AdminToast>>()

//hash errors
function tabHasErrors(tab: TabConfig):boolean{
   if(submitCount.value === 0) return false
   
   return tab.fields.some(
      field => Boolean((errors.value as Partial<Record<ProductField, string>>)?.[field])
   ) 
}

//move to error tab
function goToFirstErrorTab(formErrors: FormErrors<ProductData>){
   const errorFields = Object.keys(formErrors) as ProductField[]

   const index = tabs.findIndex(tab =>
      tab.fields.some(field => errorFields.includes(field))
   )

   if(index !== -1){
      activeIndex.value = index
   }
}

//onSubmit
const onSubmit = handleSubmit(
   (values) => {
   emit("submit", values);
   toast.value?.showToast('Product saved successfully', 'success')
   },(ctx: InvalidSubmissionContext) => { 
      toast.value?.showToast("Fill required fields",'error')
      goToFirstErrorTab(ctx.errors)
   }
)



</script>
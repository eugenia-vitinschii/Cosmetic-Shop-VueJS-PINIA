<template>
   <div class="admin-form-item">
      <h3 class="admin-subheading">Categorization</h3>
      <div class="admin-form-item__wrapper">
        <!-- category -->
         <div class="admin-input__wrapper">
            <label 
               for="category" 
               class="admin-body-text"
            >
               Category
            </label>
            <select 
               class="admin-select"
               name="category" 
               id="category" 
               v-model="modelValue.category">
                  <option 
                  v-for="option in categoryOptions"
                  :key="option"
                  :value="option"
                  >
                     {{ option }}
                  </option>
            </select>
         </div>
         <!-- type-->
         <div class="admin-input__wrapper">
            <label for="product_type" class="admin-body-text">Type</label>
            <select 
               class="admin-select"
               name="product_type" 
               id="product_type"
               v-model="modelValue.product_type"
             >
               <option 
               v-for="option in typeOptions"
               :key="option"
               :value="option"
               >
               {{ option }}
            </option>
            </select>
         </div>
         <!-- tags -->
          <div class="admin-checkbox__wrapper">
            <span class="admin-body-text">Tag options</span>
            <label 
               class="admin-custom-checkbox"
               v-for="option in tagOptions"
               :key="option"
            >
               <input 
                  type="checkbox"
                  :value="option"
                  :checked="modelValue.tag_list?.includes(option)"
                  @change="onTagChange(option, $event)"
               >
               <span class="checkmark"></span>
               <span class="admin-body-text">{{ option }}</span>
               </input>
            </label>
            </div>
          <!-- slider tags -->
         <div class="admin-checkbox__wrapper">
            <span class="admin-body-text">Slider options</span>
            <label 
               class="admin-custom-checkbox"
               v-for="option in sliderOptions"
               :key="option"
            >
               <input 
                  type="checkbox"
                  :value="option"
                  :checked="modelValue.sliderTags?.includes(option)"
                  @change="onSliderTagChange(option, $event)"
               >
               <span class="checkmark"></span>
               <span class="admin-body-text">{{ option }}</span>
               </input>
            </label>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
//types
interface ProductCategorization{
   category?: string;
   product_type?: string;
   tag_list?: string[];
   sliderTags?: string[];
}

//defineModel
const modelValue = defineModel<ProductCategorization>({default: () => ({})})

function onTagChange(option: string, event: Event){
   const cheked = (event.target as HTMLInputElement).checked

   //create tag list
   if(!modelValue.value.tag_list){
      modelValue.value.tag_list = []
   }

   if(cheked){
      modelValue.value.tag_list.push(option)
   } else {
      modelValue.value.tag_list = modelValue.value.tag_list.filter(tag => tag !== option)
   }
}


function onSliderTagChange(option: string, event: Event){
   const cheked = (event.target as HTMLInputElement).checked

   //create tag list
   if(!modelValue.value.sliderTags){
      modelValue.value.sliderTags = []
   }

   if(cheked){
      modelValue.value.sliderTags.push(option)
   } else {
      modelValue.value.sliderTags = modelValue.value.sliderTags.filter(tag => tag !== option)
   }
}

//categotyOptions
const categoryOptions = [
   "liquid", "powder", "concealer", "highlighter", "bb_cc", "contour", "cream",
  "mineral", "lipstick", "lip_gloss", "lip_stain", "palette", "pencil", "gel"
];

//typeOptions
const typeOptions = [
"foundation", "lipstick", "eyeshadow", "blush", "nail_polish", "bronzer"
];
//tagOptions
const tagOptions = [
   "top", "week", "brand"
];
//SliderOptions
const sliderOptions = [
   "top", "brand", "category"
];
</script>
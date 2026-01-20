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
               Category *
            </label>
            <select 
               class="admin-select"
               name="category" 
               id="category" 
               v-model="category">
                  <option 
                  v-for="option in categoryOptions"
                  :key="option"
                  :value="option"
                  >
                     {{ option }}
                  </option>
            </select>
              <p class="body-text red" v-if="categoryError">{{ categoryError }}</p>
         </div>
         <!-- type-->
         <div class="admin-input__wrapper">
            <label for="product_type" class="admin-body-text">Type *</label>
            <select 
               class="admin-select"
               name="product_type" 
               id="product_type"
               v-model="product_type"
             >
               <option 
               v-for="option in typeOptions"
               :key="option"
               :value="option"
               >
               {{ option }}
            </option>
            </select>
            <p class="body-text red" v-if="typeError">{{ typeError}}</p>
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
                  :checked="tag_list?.includes(option)"
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
                  :checked="sliderTags?.includes(option)"
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
//vee
import { useField } from 'vee-validate';

//fields
const {value: category, errorMessage: categoryError} = useField<string>("category")
const {value: product_type, errorMessage: typeError} = useField<string>("product_type")
const {value:tag_list } = useField<string[]>("tag_list")
const {value: sliderTags} = useField<string[]>("sliderTags")



function onTagChange(option: string, event: Event){
   const cheked = (event.target as HTMLInputElement).checked

   //create tag list
   if(!tag_list.value){
      tag_list.value = []
   }

   if(cheked){
     tag_list.value.push(option)
   } else {
    tag_list.value = tag_list.value.filter(tag => tag !== option)
   }
}


function onSliderTagChange(option: string, event: Event){
   const cheked = (event.target as HTMLInputElement).checked

   //create tag list
   if(!sliderTags.value){
      sliderTags.value = []
   }

   if(cheked){
      sliderTags.value.push(option)
   } else {
    sliderTags.value = sliderTags.value.filter(tag => tag !== option)
   }
}

//categotyOptions
const categoryOptions = [
   "liquid", "powder", "concealer", "highlighter", "bb_cc", "contour", "cream",
  "mineral", "lipstick", "lip_gloss", "lip_stain", "palette", "pencil", "gel"
];

//typeOptions
const typeOptions = ["",
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
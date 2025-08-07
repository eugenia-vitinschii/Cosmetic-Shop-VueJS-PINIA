<template>
   <div class="update__form-item">
      <p class="body-text">Categorization</p>
      <div class="update__form-item">
        <!-- category -->
         <div class="input__wrapper">
            <label for="category">Category</label>
            <select name="category" id="category" v-model="modelValue.category">
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
         <div class="input__wrapper">
            <label for="product_type">Type</label>
            <select 
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
         <div class="input__wrapper">
          <label class="body-text">Tags</label>
             <select multiple v-model="modelValue.tag_list">
               <option 
               v-for="option in tagOptions"
               :key="option"
               :value="option"
               >
               {{ option }}
            </option>
                  </select>
              </div>
              <!-- slider tags -->
         <div class="input__wrapper">
            <label class="body-text">Include in slider</label>
            <select multiple v-model="modelValue.sliderTags">
                              <option 
               v-for="option in sliderOptions"
               :key="option"
               :value="option"
               >
               {{ option }}
            </option>
            </select>
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
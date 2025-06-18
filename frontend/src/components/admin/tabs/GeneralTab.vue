<template>
   <!-- general info -->
   <div class="update__form-item">
      <p class="body-text">General info</p>
      <div class="update__form-item">
         <the-input 
            :label="'name'" 
            :placeholder="'name'" 
            v-model.trim="modelValue.name" 
         />
         <the-input 
         :label="'brand'" 
         :placeholder="'brand'" 
         v-model.trim="modelValue.brand" 
         />
         <the-input 
         :label="'price'" 
         :placeholder="'price'"
          v-model.number="modelValue.price" 
          />
         <the-input 
         :label="'currency'" 
         :placeholder="'currency'" 
         v-model.trim="modelValue.currency" />
         <the-input 
         :label="'price_sign'" 
         :placeholder="'price_sign'" 
         v-model.trim="modelValue.price_sign" />
         <div class="input__wrapper">
            <label for="rating">Rating {{ modelValue.rating }} </label>
               <input
                  type="range"
                  name="rating"
                  id="rating"
                  min="0"
                  max="5"
                  v-model="modelValue.rating"
                />
         </div>
      </div>
   </div>
</template>

<script  setup lang="ts">
//components
import TheInput from '@/components/TheInput.vue';

//inteface general tab
interface GeneralTab{
   name?: string;
   brand?: string;
   price?: number;
   currency?: string;
   price_sign?: string;
   rating?: number;

}

//model
const modelValue = defineModel<GeneralTab>({default: () => ({})})
</script>
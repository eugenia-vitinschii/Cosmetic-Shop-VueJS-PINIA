<template>
   <!-- general info -->
   <div class="admin-form-item">
      <p class="admin-subheading">General info</p>
      <div class="admin-form-item__wrapper">
         <admin-input 
            :label="'Name'" 
            :placeholder="'#nofilter powder'" 
            v-model.trim="modelValue.name" 
         />
         <admin-input 
            :label="'Brand'" 
            :placeholder="'La viva!'" 
            v-model.trim="modelValue.brand" 
         />
         <admin-input 
            :label="'Price'" 
            :placeholder="'20'"
            v-model.number="modelValue.price" 
          />
         <admin-input 
            :label="'Currency'" 
            :placeholder="'USD'" 
            v-model.trim="modelValue.currency" />
         <admin-input 
            :label="'Price sign'" 
            :placeholder="'$'" 
            v-model.trim="modelValue.price_sign" />
         <div class="admin-input__wrapper">
            <label class="admin-body-text" for="rating">Rating <span v-if="modelValue.rating">:</span> {{ modelValue.rating }} </label>
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
import AdminInput from '../ui/AdminInput.vue';

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
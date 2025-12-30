<template>
   <!-- general info -->
   <div class="admin-form-item">
      <h3 class="admin-subheading">General info</h3>
      <div class="admin-form-item__wrapper">
         <admin-input 
            :label="'Name*'" 
            :placeholder="'#nofilter powder'" 
            v-model.trim="name" 
            :error="nameError"
         />
         <admin-input 
            :label="'Brand*'" 
            :placeholder="'La viva!'" 
            v-model.trim="brand" 
            :error="brandError"
         />
         <admin-input 
            :label="'Price*'" 
            :placeholder="'20'"
            v-model.number="price" 
            :price="priceError"
            :error="priceError"
          />
         <admin-input 
            :label="'Currency'" 
            :placeholder="'USD'" 
            v-model.trim="currency" 
         />
         <admin-input 
            :label="'Price sign'" 
            :placeholder="'$'" 
            v-model.trim="price_sign" 
         />
         <div class="admin-input__wrapper">
            <label class="admin-body-text" for="rating">Rating <span v-if="rating">:</span> {{ rating }} </label>
               <input
                  type="range"
                  name="rating"
                  id="rating"
                  min="0"
                  max="5"
                  v-model="rating"
                  disabled
                />
         </div>
      </div>
   </div>
</template>

<script  setup lang="ts">
//components
import AdminInput from '../ui/AdminInput.vue';

//vee-validate
import { useField } from 'vee-validate';

//fields
const {value: name, errorMessage: nameError} = useField<string>("name");
const {value: brand, errorMessage: brandError} = useField<string>("brand");
const {value: price, errorMessage: priceError} = useField<number>("price");
const {value: currency} = useField<string>("currency");
const {value: price_sign } = useField<string>("price_sign");
const {value: rating } = useField<number>("rating");

</script>
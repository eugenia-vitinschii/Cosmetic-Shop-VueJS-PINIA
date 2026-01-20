<template>
  <div class="admin-form-item">
    <h3 class="admin-subheading">Colors</h3>
    <div  
      class="admin-form-item__color "
      v-for="(filed, index) in  productColors"
      :key="index"
    >
      <input
        class="admin-custom-input-color"
        type="color"
        v-model="filed.value.hex_value"
      />
      <input
      class="admin-custom-input-text"
        type="text"
        placeholder="Hex value"
        v-model="filed.value.hex_value"
      />
      <span class="admin-form-item__hex" :style="{ backgroundColor: filed.value.hex_value }"></span>
      <input
        class="admin-custom-input-text"
        type="text"
        placeholder="Colour name"
        v-model="filed.value.colour_name"
      />
      <button 
      class="admin-svg-button"
        v-if="productColors" 
        @click.prevent="removeColor(index)"
      >
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
      </button>
    </div>
    <div class="admin-form-item__create-color">
      <input 
      class="admin-custom-input-color"
        type="color" 
        v-model="newColor.hex_value"
      >
      <input
        class="admin-custom-input-text"
        type="text"
        placeholder="Hex value"
        v-model="newColor.hex_value"
      />
      <span class="admin-form-item__hex" :style="{ backgroundColor: newColor.hex_value }"></span>
      <input
        class="admin-custom-input-text"
        type="text"
        placeholder="Colour name"
        v-model="newColor.colour_name"
      />
      <button 
        class="admin-svg-button"
        @click="addColor"
      >
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
    </button>
  </div>
</div>
</template>

<script setup lang="ts">
//vue
import { reactive } from 'vue';
//vee
import { useFieldArray} from 'vee-validate';

//type prduct
import  type {ProductColor} from "@/types/productColor"

//fields
const { fields: productColors, push, remove} = useFieldArray<ProductColor>("product_colors")


//remove color
function removeColor(index: number){
  remove(index)
}

//new color
const newColor = reactive<ProductColor>({
  hex_value: '#ffffff',
  colour_name: ''
})

//add new color
function addColor(){
  if(!newColor.colour_name.trim()) return;

  push({
    hex_value: newColor.hex_value,
    colour_name: newColor.colour_name
  });

  newColor.hex_value = '#ffffff';
   newColor.colour_name = '';

}
</script>


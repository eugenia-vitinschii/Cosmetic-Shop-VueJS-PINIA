<template>
  <div class="admin-form-item">
    <h3 class="admin-subheading">Colors</h3>
    <div  
      class="admin-form-item__color "
      v-for="(color, index) in  modelValue.product_colors"
      :key="index"
    >
      <input
        class="admin-custom-input-color"
        type="color"
        v-model="color.hex_value"
      />
      <input
      class="admin-custom-input-text"
        type="text"
        placeholder="Hex value"
        v-model="color.hex_value"
      />
      <span class="admin-form-item__hex" :style="{ backgroundColor: color.hex_value }"></span>
      <input
        class="admin-custom-input-text"
        type="text"
        placeholder="Colour name"
        v-model="color.colour_name"
      />
      <button 
      class="admin-svg-button"
        v-if="modelValue.product_colors" 
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

interface ProductColor{
  hex_value: string;
  colour_name: string;
}

interface ProductColorTab{
  product_colors: ProductColor[]
}

const modelValue = defineModel<ProductColorTab>({default: () => ({product_colos: []})})

//remove color
function removeColor(index: number){
  modelValue.value.product_colors.splice(index, 1);
}

//new color
const newColor = reactive<ProductColor>({
  hex_value: '#ffffff',
  colour_name: ''
})

//add new color
function addColor(){
  if(!newColor.colour_name.trim()) return;

  if(!Array.isArray(modelValue.value.product_colors)){
    modelValue.value.product_colors = []
  }
    modelValue.value.product_colors.push({
      hex_value: newColor.hex_value,
      colour_name: newColor.colour_name
    });

    newColor.hex_value = '#121212';
    newColor.colour_name = ''

}
</script>


<template>
  <div class="update__form-item">
    <p class="body-text">Colors</p>
    <div
      v-for="(color, index) in  modelValue.product_colors"
      :key="index"
      class="color-row"
    >
      <input
        type="color"
        v-model="color.hex_value"
         @input="addColorIfNeeded"
        class="color-picker"
      />

      <input
        type="text"
        placeholder="Hex value"
        v-model="color.hex_value"
         @input="addColorIfNeeded"
      />
<span class="circle" :style="{ backgroundColor: color.hex_value }"></span>
      <input
        type="text"
        placeholder="Colour name"
        v-model="color.colour_name"
         @input="addColorIfNeeded"
      />
      <button v-if="modelValue.product_colors" @click.prevent="removeColor(index)">🗑️</button>
    </div>
 
  </div>
</template>

<script setup lang="ts">
import { computed} from 'vue';

interface ProductColor {
  hex_value: string;
  colour_name: string;
}

interface ProductColorTab {
  product_colors?: ProductColor[];
}

const productColors = computed({
  get: () => modelValue.value.product_colors ?? [],
  set: (val) => { modelValue.value.product_colors = val }
});

// props / model
const modelValue = defineModel<ProductColorTab>({ default: () => ({
  product_colors: [
    { hex_value: '', colour_name: '' }
  ]
}) });

// methods
function addColorIfNeeded() {
    const colors = modelValue.value.product_colors ?? [];
  const last = colors[colors.length - 1];

  if (!last?.hex_value && !last?.colour_name) return;

  colors.push({ hex_value: '', colour_name: '' });
}

function removeColor(index: number) {
  productColors.value.splice(index, 1);
}
</script>

<style scoped>
.color-row {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 0.5rem;
}
.color-picker {
  width: 2rem;
  height: 2rem;
  border: none;
}
.remove-btn {
  color: red;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
.add-btn {
  margin-top: 1rem;
  background-color: #eee;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.circle{
  width: 30px;
  height: 30px;
}

</style>

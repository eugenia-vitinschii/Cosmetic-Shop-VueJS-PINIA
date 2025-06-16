<template>
  <div class="update">
    <div class="container">
      <div class="update__wrapper">
        <the-admin-header />
        <p class="heading" v-if="product">
          Edit: <span class="bold">{{ product.name }}</span>
        </p>
        <div class="update__content">
          <form class="update__form" v-if="product">
            <div class="update__form-item">
              <p class="body-text">General info</p>
              <div class="input__wrapper">
                 <label class="body-text">Include in slider</label>
                  <select multiple v-model="product.sliderTags">
                    <option value="top">Top Products</option>
                    <option value="week">Weekly Products</option>
                    <option value="brand">Weekly brand</option>
                  </select>
              </div>
              <the-input
                :label="'Id'"
                :placeholder="'Id'"
                v-model.trim="product.id"
              />
              <the-input
                :label="'created_a'"
                :placeholder="'created_a'"
                v-model.trim="product.created_at"
              />
              <the-input
                :label="'Updated at'"
                :placeholder="'updated_at'"
                v-model.trim="product.updated_at"
              />
              <the-input
                :label="'Brand'"
                :placeholder="'Brand'"
                v-model.trim="product.brand"
              />
              <the-input
                :label="'Name'"
                :placeholder="'Name'"
                v-model.trim="product.name"
              />
              <the-input
                :label="'Price'"
                :placeholder="'Price'"
                v-model="product.price"
              />
              <the-input
                :label="'Currency'"
                :placeholder="'Currency'"
                v-model.trim="product.currency"
              />
            </div>
            <div class="update__form-item">
              <p class="body-text">Photo & Sources</p>
              <the-input
                :label="'Img'"
                :placeholder="'Img'"
                v-model.trim="product.image_link"
              />
              <the-input
                :label="'Api featured image'"
                :placeholder="'Api featured image'"
                v-model.trim="product.api_featured_image"
              />
              <the-input
                :label="'Product link'"
                :placeholder="'Product link'"
                v-model.trim="product.product_link"
              />
              <the-input
                :label="'Website link'"
                :placeholder="'Website link'"
                v-model.trim="product.website_link"
              />
              <the-input
                :label="'product_api_url'"
                :placeholder="'product_api_url'"
                v-model.trim="product.product_api_url"
              />
            </div>
            <div class="update__form-item">
              <p class="body-text">Product Information</p>
              <the-input
                :label="'Description'"
                :placeholder="'Description'"
                v-model="product.description"
              />
                        <div class="input__wrapper">
                <label for="rating">Rating {{product.rating }} </label>
                <input
                  type="range"
                  name="rating"
                  id="rating"
                  min="0"
                  max="5"
                  v-model="product.rating"
                />
              </div>
              <!-- category -->
              <div class="input__wrapper">
                <label for="category">Category</label>
                <select name="category" id="category" v-model="product.category">
                  <option value="liquid">liquid</option>
                  <option value="Powder">Powder</option>
                  <option value="concealer">concealer</option>
                  <option value="Highligter">highlighter</option>
                  <option value="BB/CC">BB/CC</option>
                  <option value="Contour">Contour</option>
                  <option value="Cream">Cream</option>
                  <option value="Mineral">Mineral</option>
                  <option value="lipstick">lipstick</option>
                  <option value="Lip Gloss">Lip Gloss</option>
                  <option value="palette">palette</option>
                  <option value="pencil">pencil</option>
                  <option value="Gel">Gel</option>
                </select>
              </div>
              <!-- type-->
              <div class="input__wrapper">
                <label for="product_type">Type</label>
                <select
                  name="product_type"
                  id="product_type"
                  v-model="product.product_type"
                >
                  <option value="Foundation">Foundation</option>
                  <option value="lipstick">lipstick</option>
                  <option value="Eyeshadow">Eyeshadow</option>
                  <option value="Blush">Blush</option>
                  <option value="Nail Polish">Nail Polish</option>
                  <option value="Bronzer">Bronzer</option>
                </select>
              </div>
            </div>
                        <div class="update__form-item">
              <p class="body-text bold">Product colors</p>
<div v-for="(color, index) in product.product_colors" :key="index" >
    <!-- Название цвета -->
    <the-input
      v-model="color.colour_name"
      :label="`Color Name ${index + 1}`"
      placeholder="e.g. Black"
    />

    <!-- HEX -->
    <the-input
      v-model="color.hex_value"
      :label="`Hex ${index + 1}`"
      placeholder="#000000"
    />

    <!-- Удалить -->
    <button @click="removeColor(index)" class="text-red-600 hover:underline">
      Удалить
    </button>
  </div>

  <!-- Добавить новый цвет -->
  <button @click="addColor" class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
    + Добавить цвет
  </button>
                </div>

            <router-link class="delete tooltip" to="/admin/update">
              <span class="tooltip-text small-text">back</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path
                  d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"
                /></svg>
            </router-link>

            <button class="edit tooltip" @click="update()">
              <span class="tooltip-text small-text">save</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path
                  d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                />
              </svg>
            </button>
          </form>
          <p v-else>nu este</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//hooks
import { onMounted, computed } from "vue";

//vue router
import { useRoute } from "vue-router";

//import components
import TheAdminHeader from "@/components/layout/TheAdminHeader.vue";
import TheInput from "@/components/TheInput.vue";

// pinia store imports
import { useCosmeticStore } from "@/stores/cosmetic.store";
import { storeToRefs } from "pinia";

// product
// import type { Product } from "@/models/product";

//component settings
defineOptions({
  name: "UpdateView",
  inheritAttrs: false,
});

//vue-router variables
const route = useRoute();
const id = computed(() =>String(route.params.id));


const product = computed(() =>{
  return cosmetics.value.find(p => p.id == id.value) ?? null
})

//pinia store variables
const store = useCosmeticStore();
const { fetchProductById, updateProduct } = store;
const { cosmetics} = storeToRefs(store);

//updateProduct
function update() {
  updateProduct(id.value);
}
 
//use hooks
onMounted(() => {
  fetchProductById(id.value);
});


const addColor = () => {
  product.value.product_colors.push({
    hex_value: "",
    colour_name: ""
  });
};

const removeColor = (index: number) => {
  product.value.product_colors.splice(index, 1);
};
</script>

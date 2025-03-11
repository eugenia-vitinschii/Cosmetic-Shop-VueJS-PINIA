<template>
  <div class="update">
    <div class="container">
      <div class="update__wrapper">
        <the-admin-header />
        <p class="heading">
          Edit: <span class="bold">{{ cosmetics.name }}</span>
        </p>
        <div class="update__content">
          <form class="update__form">
            <div class="update__form-item">
              <p class="body-text">General info</p>
              <the-input
                :label="'Id'"
                :placeholder="'Id'"
                v-model:value.trim="cosmetics.id"
              />
              <the-input
                :label="'created_a'"
                :placeholder="'created_a'"
                v-model:value.trim="cosmetics.created_at"
              />
              <the-input
                :label="'Updated at'"
                :placeholder="'updated_at'"
                v-model:value.trim="cosmetics.updated_at"
              />
              <the-input
                :label="'Brand'"
                :placeholder="'Brand'"
                v-model:value.trim="cosmetics.brand"
              />
              <the-input
                :label="'Name'"
                :placeholder="'Name'"
                v-model:value.trim="cosmetics.name"
              />
              <the-input
                :label="'Price'"
                :placeholder="'Price'"
                v-model:value.number="cosmetics.price"
              />
              <the-input
                :label="'Currency'"
                :placeholder="'Currency'"
                v-model:value.trim="cosmetics.currency"
              />
            </div>
            <div class="update__form-item">
              <p class="body-text">Photo & Sources</p>
              <the-input
                :label="'Img'"
                :placeholder="'Img'"
                v-model:value.trim="cosmetics.image_link"
              />
              <the-input
                :label="'Api featured image'"
                :placeholder="'Api featured image'"
                v-model:value.trim="cosmetics.api_featured_image"
              />
              <the-input
                :label="'Product link'"
                :placeholder="'Product link'"
                v-model:value.trim="cosmetics.product_link"
              />
              <the-input
                :label="'Website link'"
                :placeholder="'Website link'"
                v-model:value.trim="cosmetics.website_link"
              />
              <the-input
                :label="'product_api_url'"
                :placeholder="'product_api_url'"
                v-model:value.trim="cosmetics.product_api_url"
              />
            </div>
            <div class="update__form-item">
              <p class="body-text">Product Information</p>
              <the-input
                :label="'Description'"
                :placeholder="'Description'"
                v-model:value.trim="cosmetics.description"
              />
                        <div class="input__wrapper">
                <label for="rating">Rating {{cosmetics.rating }} </label>
                <input
                  type="range"
                  name="rating"
                  id="rating"
                  min="0"
                  max="5"
                  v-model="cosmetics.rating"
                />
              </div>
              <!-- category -->
              <div class="input__wrapper">
                <label for="category">Category</label>
                <select name="category" id="category" v-model="cosmetics.category">
                  <option value="Liquid">Liquid</option>
                  <option value="Powder">Powder</option>
                  <option value="Concealer">Concealer</option>
                  <option value="Highligter">Highlighter</option>
                  <option value="BB/CC">BB/CC</option>
                  <option value="Contour">Contour</option>
                  <option value="Cream">Cream</option>
                  <option value="Mineral">Mineral</option>
                  <option value="Lipstick">Lipstick</option>
                  <option value="Lip Gloss">Lip Gloss</option>
                  <option value="Palette">Palette</option>
                  <option value="Pencil">Pencil</option>
                  <option value="Gel">Gel</option>
                </select>
              </div>
              <!-- type-->
              <div class="input__wrapper">
                <label for="product_type">Type</label>
                <select
                  name="product_type"
                  id="product_type"
                  v-model="cosmetics.product_type"
                >
                  <option value="Foundation">Foundation</option>
                  <option value="Lipstick">Lipstick</option>
                  <option value="Eyeshadow">Eyeshadow</option>
                  <option value="Blush">Blush</option>
                  <option value="Nail Polish">Nail Polish</option>
                  <option value="Bronzer">Bronzer</option>
                </select>
              </div>
            </div>
            <router-link class="delete tooltip" to="/all">
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
                /></svg
            ></router-link>

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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//vue
import { defineOptions } from "vue";

//hooks
import { onMounted } from "vue";

//vue router
import { useRoute } from "vue-router";

//import components
import TheAdminHeader from "@/components/layout/TheAdminHeader.vue";
import TheInput from "@/components/TheInput.vue";

//component settings
defineOptions({
  name: "UpdateView",
  inheritAttrs: false,
});

//vue-router variables
const route = useRoute();
const id = route.params.id;

// pinia store imports
import { useCosmeticStore } from "@/stores/cosmetic";
import { storeToRefs } from "pinia";

//pinia store variables
const store = useCosmeticStore();
const { fetchCosmeticsById, updateCosmetic } = store;
const { cosmetics } = storeToRefs(store);

//updateProduct
function update() {
  updateCosmetic(id);
}

//use hooks
onMounted(() => {
  fetchCosmeticsById(id);
});
</script>

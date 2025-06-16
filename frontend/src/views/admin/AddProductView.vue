<template>
  <div class="add">
    <div class="container">
      <div class="add__wrapper">
        <the-admin-header />
        <p class="heading bold">Add new product</p>
        <div class="add__contaner">
          <form class="add__form" v-if="postProducts">
            <div class="update__form-item">
              <p class="body-text">General info</p>
              <div class="input__wrapper">
                 <label class="body-text">Include in slider</label>
                  <select multiple v-model="postProducts.sliderTags">
                    <option value="top">Top Products</option>
                    <option value="week">Weekly Products</option>
                    <option value="brand">Weekly brand</option>
                  </select>
              </div>
              <the-input
                :label="'id'"
                :placeholder="'id'"
                v-model.trim="postProducts.id"
              />
              <the-input
                :label="'created_at'"
                :placeholder="'created_at'"
                v-model.trim="postProducts.created_at"
              />
              <the-input
                :label="'brand'"
                :placeholder="'brand'"
                v-model.trim="postProducts.brand"
              />
              <the-input
                :label="'name'"
                :placeholder="'name'"
                v-model.trim="postProducts.name"
              />
              <the-input
                :label="'price'"
                :placeholder="'price'"
                v-model.number="postProducts.price"
              />
              <the-input
                :label="'currency'"
                :placeholder="'currency'"
                v-model.trim="postProducts.currency"
              />
            </div>
            <div class="update__form-item">
              <p class="body-text">! Photo & Sources</p>
              <the-input
                :label="'img'"
                :placeholder="'img'"
                v-model.trim="postProducts.image_link"
              />
              <the-input
                :label="'api_featured_image'"
                :placeholder="'api_featured_image'"
                v-model.trim="postProducts.api_featured_image"
              />
              <the-input
                :label="'product_link'"
                :placeholder="'product_link'"
                v-model.trim="postProducts.product_link"
              />
              <the-input
                :label="'website_link'"
                :placeholder="'website_link'"
                v-model.trim="postProducts.website_link"
              />
              <the-input
                :label="'product_api_url'"
                :placeholder="'product_api_url'"
                v-model.trim="postProducts.product_api_url"
              />
            </div>
            <div class="update__form-item">
              <p class="body-text bold">Product Information</p>
              <the-input
                :label="'description'"
                :placeholder="'description'"
                v-model.trim="postProducts.description"
              />
              <div class="input__wrapper">
                <label for="rating">Rating {{ postProducts.rating }} </label>
                <input
                  type="range"
                  name="rating"
                  id="rating"
                  min="0"
                  max="5"
                  v-model="postProducts.rating"
                />
              </div>
              <!-- category -->
              <div class="input__wrapper">
                <label for="category">Category</label>
                <select
                  name="category"
                  id="category"
                  v-model="postProducts.category"
                >
                  <option value="liquid">liquid</option>
                  <option value="powder">Powder</option>
                  <option value="concealer">concealer</option>
                  <option value="highlighter">highlighter</option>
                  <option value="bb_cc">BB/CC</option>
                  <option value="contour">Contour</option>
                  <option value="cream">cream</option>
                  <option value="mineral">mineral</option>
                  <option value="lipstick">lipstick</option>
                  <option value="lip_gloss">lip Gloss</option>
                  <option value="lip_stain">lip stain</option>
                  <option value="palette">palette</option>
                  <option value="pencil">pencil</option>
                  <option value="gel">gel</option>
                </select>
              </div>
              <!-- type-->
              <div class="input__wrapper">
                <label for="product_type">Type</label>
                <select
                  name="product_type"
                  id="product_type"
                  v-model="postProducts.product_type"
                >
                  <option value="foundation">foundation</option>
                  <option value="lipstick">lipstick</option>
                  <option value="eyeshadow">eyeshadow</option>
                  <option value="blush">blush</option>
                  <option value="nail_polish">nail_polish</option>
                  <option value="bronzer">bronzer</option>
                </select>
              </div>
            </div>
            <!-- colors -->

            <button class="delete tooltip" @click="$router.go(-1)">
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
                />
              </svg>
            </button>
            <button class="edit tooltip" @click.prevent="save()">
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

<script setup lang="ts">
//vue
import { ref } from "vue";

//import components
import TheAdminHeader from "@/components/layout/TheAdminHeader.vue";
import TheInput from "@/components/TheInput.vue";

//component settings
defineOptions({
  name: "AddProductView",
});

//import pinia store
import { useCosmeticStore } from "@/stores/cosmetic.store";
import { Product } from "@/models/product";

//pinia variables
const store = useCosmeticStore();
const { createProduct } = store;

//variables
const postProducts = ref<Product>(new Product())

//functions
const save = () => {
  createProduct(postProducts.value);
  postProducts.value = new Product
};


</script>

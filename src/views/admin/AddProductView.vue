<template>
  <div class="add">
    <div class="container">
      <div class="add__wrapper">
        <the-admin-header />
        <p class="heading bold">Add new  product</p>
        <div class="add__contaner">
          <form class="add__form">
            <div class="update__form-item">
              <p class="body-text">General info</p>
              <the-input
                :label="'id'"
                :placeholder="'id'"
                v-model:value.trim="postProducts.id"
              />
              <the-input
                :label="'created_at'"
                :placeholder="'created_at'"
                v-model:value.trim="postProducts.created_at"
              />
              <the-input
                :label="'brand'"
                :placeholder="'brand'"
                v-model:value.trim="postProducts.brand"
              />
              <the-input
                :label="'name'"
                :placeholder="'name'"
                v-model:value.trim="postProducts.name"
              />
              <the-input
                :label="'price'"
                :placeholder="'price'"
                v-model:value.number="postProducts.price"
              />
              <the-input
                :label="'currency'"
                :placeholder="'currency'"
                v-model:value.trim="postProducts.currency"
              />
            </div>
            <div class="update__form-item">
              <p class="body-text">! Photo & Sources</p>
              <the-input
                :label="'img'"
                :placeholder="'img'"
                v-model:value.trim="postProducts.image_link"
              />
              <the-input
                :label="'api_featured_image'"
                :placeholder="'api_featured_image'"
                v-model:value.trim="postProducts.api_featured_image"
              />
              <the-input
                :label="'product_link'"
                :placeholder="'product_link'"
                v-model:value.trim="postProducts.product_link"
              />
              <the-input
                :label="'website_link'"
                :placeholder="'website_link'"
                v-model:value.trim="postProducts.website_link"
              />
              <the-input
                :label="'product_api_url'"
                :placeholder="'product_api_url'"
                v-model:value.trim="postProducts.product_api_url"
              />
            </div>
            <div class="update__form-item">
              <p class="body-text bold">Product Information</p>
              <p class="body-text">prodcut colors hex_value & colour_name</p>
              <the-input
                :label="'hex_value'"
                :placeholder="'hex_value'"
                v-model:value.trim="postProducts.product_colors.hex_value"
              />
              <the-input
                :label="' colour_name'"
                :placeholder="' colour_name'"
                v-model:value.trim="postProducts.product_colors.colour_name"
              />

              <the-input
                :label="'description'"
                :placeholder="'description'"
                v-model:value.trim="postProducts.description"
              />
              <div class="input__wrapper">
                <label for="rating">Rating {{postProducts.rating }} </label>
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

<script setup>
//vue
import { defineOptions, ref } from "vue";

//import components
import TheAdminHeader from "@/components/layout/TheAdminHeader.vue";
import TheInput from "@/components/TheInput.vue";

//component settings
defineOptions({
  name: "AddProductView",
});

//import pinia store
import { useCosmeticStore } from "@/stores";

//pinia variables
const store = useCosmeticStore();
const { createProduct } = store;

//variables
const postProducts = ref({
  id: "",
  brand: "",
  name: "",
  price: "",
  currency: "",
  img: "",
  api_featured_image: "",
  product_link: "",
  website_link: "",
  product_api_url: "",
  description: "",
  rating: "",
  category: "",
  product_type: "",
  created_at: new Date(),
  product_colors: [
    {
      hex_value: "",
      colour_name: "",
    },
  ],
});

//functions
const save = () => {
  createProduct(postProducts.value);
  postProducts.value.id = "";
  postProducts.value.brand = "";
  postProducts.value.name = "";
  postProducts.value.price = "";
  postProducts.value.currency = "";
  postProducts.value.img = "";
  postProducts.value.api_featured_image = "";
  postProducts.value.product_link = "";
  postProducts.value.website_link = "";
  postProducts.value.product_api_url = "";
  postProducts.value.description = "";
  postProducts.value.rating = "";
  postProducts.value.category = "";
  postProducts.value.product_type = "";
  postProducts.value.created_at = new Date();
  postProducts.value.product_colors = [
    {
      hex_value: "",
      colour_name: "",
    },
  ];
};
</script>

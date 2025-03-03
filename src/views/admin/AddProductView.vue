<template>
  <div class="add">
    <div class="container">
      <div class="add__wrapper">
        <the-admin-header />
        <p class="heading bold">Add product page</p>
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
              <the-input
                :label="'rating'"
                :placeholder="'rating'"
                v-model:value.number="postProducts.rating"
              />
              <the-input
                :label="'category'"
                :placeholder="'category'"
                v-model:value.trim="postProducts.category"
              />
              <the-input
                :label="'product_type'"
                :placeholder="'product_type'"
                v-model:value.trim="postProducts.product_type"
              />
            </div>
            <button class="green-button" @click.prevent="save()">Save</button>
            <button class="red-button" @click="$router.go(-1)">Back</button>
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
import { useCosmeticStore } from "@/stores/cosmetic";

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
  created_at: "",
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
  postProducts.value.created_at = "";
  postProducts.value.product_colors = [
    {
      hex_value: "",
      colour_name: "",
    },
  ];
};
</script>

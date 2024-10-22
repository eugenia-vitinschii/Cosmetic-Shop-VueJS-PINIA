<template>
  <div class="product__item">
    <div class="product__top">
      <div class="product__content">
        <div class="product__content--brand">
          <p class="body-text">{{ brand }} / {{ category }}</p>
        </div>
        <div class="product__content--name">
          <p class="subheading">{{ name }}</p>
        </div>
        <div class="product__content--type">
          <p class="body-text">
            {{ product_type }}
          </p>
        </div>
        <div>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512.001 512.001"
            xml:space="preserve"
          >
            <path
              :style="{ fill: selected }"
              d="M498.804,31.056L498.804,31.056c-51.112-20.961-109.812-9.179-148.875,29.884l-92.679,92.679
	l80.325,80.325L505.769,65.751C516.503,55.017,512.85,36.816,498.804,31.056z"
            />
            <path
              :style="{ fill: selected }"
              d="M498.804,31.056L498.804,31.056c-51.112-20.961-109.812-9.179-148.875,29.884
	c0,0,42.894,51.236,155.84,4.811C516.503,55.017,512.85,36.816,498.804,31.056z"
            />
            <path
              style="fill: #ffd782"
              d="M138.019,249.005l116.373-116.373c15.545-2.126,42.765,12.215,67.361,36.81
	c24.596,24.595,38.936,51.816,36.81,67.361L242.19,353.176L138.019,249.005z"
            />
            <path
              style="opacity: 0.1; enable-background: new"
              d="M334.064,182.979c-3.744-4.541-7.857-9.083-12.311-13.536
	c-24.595-24.595-51.816-38.936-67.361-36.81L138.018,249.006l25.848,25.848L280.238,158.48
	C292.97,156.739,313.529,166.046,334.064,182.979z"
            />
            <path
              style="fill: #5b5d6e"
              d="M125.312,490.946c-18.663,2.553-51.342-14.666-80.869-44.193
	c-29.529-29.529-46.746-62.207-44.194-80.87l151.647-151.647c18.663-2.553,51.342,14.666,80.869,44.193s46.746,62.207,44.193,80.869
	L125.312,490.946z"
            />
            <path
              style="opacity: 0.1; enable-background: new"
              d="M43.33,408.962l151.647-151.647c13.892-1.9,35.549,7.16,57.892,24.091
	c-5.816-7.674-12.553-15.428-20.102-22.977c-29.529-29.529-62.207-46.746-80.869-44.193L0.25,365.882
	c-2.553,18.663,14.664,51.342,44.193,80.869c7.548,7.548,15.303,14.288,22.977,20.102C50.489,444.512,41.43,422.853,43.33,408.962z"
            />
          </svg>
        </div>
      </div>
      <div class="product__img">
        <img :src="image_link" alt="product" v-if="image_link" />
        <img :src="api_featured_image" alt="product" v-else />
      </div>
      <div class="product__info">
        <div class="product__info--price">
          <p class="body-text">{{ price }} {{ price_sign }}</p>
          <p class="body-text">heart</p>
        </div>
        <div class="product__info--colors">
          <select name="colors" id="selected-color" v-model="selected">
            <option value="">Select color</option>
            <option
              v-for="item in product_colors"
              :key="item.hex_value"
              :value="item.hex_value"
            >
              {{ item.colour_name }}
            </option>
          </select>
          <div class="option-color" :style="{ background: selected }">
            <p>{{ selected }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="product__bottom">
      <p class="body__text">description {{ description }}</p>
      <p
        class="body__text"
        v-for="(item, index) in tag_list"
        :index="index"
        :key="index"
      >
        #{{ item }}
      </p>
    </div>
  </div>
  <p>----------</p>
  <!-- :id product -->
</template>

<script setup>
import { defineOptions, defineProps, ref } from "vue";

defineOptions({
  name: "TheProduct",
});

defineProps({
  id: {
    type: Number,
  },
  image_link: {
    type: String,
  },
  name: {
    type: String,
  },
  product_type: {
    type: String,
  },
  price: {
    type: Number,
  },
  price_sign: {
    type: String,
  },
  api_featured_image: {
    type: String,
  },
  brand: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  tag_list: {
    type: Array,
  },
  product_colors: {
    type: Object,
  },
});

const selected = ref("");
</script>
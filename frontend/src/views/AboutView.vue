<template>
<div class="picture">
  <img src="@/assets/img/about.jpg" alt="img">
</div>
  <div class="about">
    <div class="container">
      <div class="about__wrapper">
        <p class="heading">About us </p>
        <!-- accordion wrapper -->
        <div class="about__accordion">
          <the-accordion
            v-for="item in info"
            :key="item.id"
            :title="item.title"
            :content="item.content"
          />
        </div>
        
      </div>
    </div>
  </div>
  <div class="picture">
  <img src="@/assets/img/about-2.jpg" alt="img">
</div>
</template>

<script setup>
//import components
import TheAccordion from "../components/sections/TheAccordion.vue";

//variables
const info = [
  {
    id: "1",
    title: "Digitally Empowered Agile Supply Chain",
    content:
      "We use proprietary software to track sales and communicate with our factories in real time to order in small batches. Our digital supply chain is the core of our business model and empowers us to offer a wide range of on-trend styles without creating excessive inventory waste or making customers wait weeks for their orders to be fulfilled.",
  },
  {
    id: "142",
    title: "OUR GUIDING PRINCIPLE",
    content:
      "Customer-first is  guiding principle. Since our beginnings in 2002, we has put our customers at the heart of our business. Through our small-batch, on-demand production model, we deliver exactly what each customer desires by accurately forecasting demand and responding quickly to demand signals.",
  },
  {
    id: "132",
    title: "Our mission",
    content:
      "Our mission is to make the beauty of fashion accessible to all, reimagining fashion by leveraging our small-batch on-demand production model. This innovative, customer-driven model allows for more choice at more affordable prices while minimizing waste, by measuring customer preferences more accurately and efficiently",
  },
  {
    id: "142",
    title: "OUR VISION",
    content:
      "Our vision is to offer every customer exactly what they want. It’s a vision we’ve worked toward since 2012 by empowering customers, creators, independent suppliers and individual entrepreneurs.",
  },
];
</script>
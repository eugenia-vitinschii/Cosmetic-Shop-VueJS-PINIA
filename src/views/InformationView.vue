<template>
  <div class="info">
    <div class="container">
      <div class="info__wrapper">
        <div class="info__nav">
          <ul>
            <small-nav-item
              v-for="item in nav"
              :key="item.id"
              :name="item.name"
              :section="item.section"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="container">
      <section id="impact" class="section__wrapper">
        <p class="heading">OUR IMPACT</p>
        <p class="body-text">
          We have the power to envision a better future and the desire to speed
          toward it. We are working hard to drive continued progress toward our
          sustainability and social commitments, and increase transparency as we
          recognize the role SHEIN can play in supporting the communities we
          reach and the environment we all share.
        </p>
      </section>
    </div>
  </div>
  <div class="section">
    <div class="container">
      <section id="resilience" class="section__wrapper">
        <p class="heading">PLANET COLLECTIVE RESILIENCE</p>
        <p class="body-text">
          Through collective action, we aim to decarbonize our supply chain, use
          responsible materials, and protect biodiversity and animal
          welfare operational teams and supply chain partners are working
          to reduce the environmental impact of our products and facilities,
          guided by the following e greenhouse  issions
           pe 1, 2 a by 25% by 203 eve net zero emissions no
          later than 2050*. Use 100% renewable electricity for SHEIN-directly
          operated operations by urce 100% forest-sustainable viscose
          and paper packaging for SHEIN-branded products by 2 re all
          packaging supplied for SHEIN-branded products contains 50% preferred
          materials by   of the polyester used for SHEIN-branded
          products to recycled polyester by 20 ource 50% of SHEIN-branded
          products through our evoluSHEIN by Design initiative by 2030.
        </p>
      </section>
    </div>
  </div>
  <div class="section">
    <div class="container">
      <section id="innovation" class="section__wrapper">
        <p class="heading">PROCESS WASTE-LESS INNOVATION</p>
        <p class="body-text">
          We are committed to continually improving our processes to reduce
          waste and enable a circular future. This means designing systems that
          help close the loop on  linear processes and using our rapid
          test-and-scale methodology to drive sustainable innovation in our own
          operations and in the indus oals to drive these
          alternative business model  majority of S rs
          in circularity by 2025 Become a global leader in rescuing deadstock
          materials from becoming waste Establish a fully circular textile
          supply chain by 2050 in alignment with our World Circular Textiles Day
          commitment
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import SmallNavItem from "@/components/core/SmallNavItem.vue";

const nav = [
  {
    id: "1",
    name: "OUR IMPACT",
    section: " #impact",
  },
  {
    id: "2",
    name: "PLANET COLLECTIVE RESILIENCE",
    section: "#resilience",
  },
  {
    id: "3",
    name: "PROCESS WASTE-LESS INNOVATION",
    section: "#innovation",
  },
];
</script>

 
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
      <section id="about" class="section__wrapper">
        <p class="heading">
          About
        </p>
      </section>
    </div>
  </div>
    <div class="section">
    <div class="container">
      <section id="contacts" class="section__wrapper">
        <p class="heading">
          Contacts
        </p>
      </section>
    </div>
  </div>
    <div class="section">
    <div class="container">
      <section id="terms" class="section__wrapper">
        <p class="heading">
          Terms
        </p>
      </section>
    </div>
  </div>
    <div class="section">
    <div class="container">
      <section id="privacy-policy" class="section__wrapper">
        <p class="heading">
         Privacy Policy
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import SmallNavItem from "@/components/core/SmallNavItem.vue"


const nav = [
  {
    id: '1',
    name: 'About',
    section:' #about',
  },
    {
    id: '2',
    name: 'Contacts',
    section:'#contacts',
  },
    {
    id: '3',
    name: 'Terms',
    section:'#terms',
  },
    {
    id: '4',
    name: 'Privacy policy',
    section:'#privacy-policy',
  }
]
</script>

 
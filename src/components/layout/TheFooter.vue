<template>
  <footer class="footer">
    <div class="footer__decor">
    </div>
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__info">
          <div class="footer__link">
            <div class="footer__link--item">
              <ul>
                <li>
                  <router-link to="/about" class="body-text">About us</router-link>
                </li>
                <li>
                  <router-link to="/about" class="small-text">Our Vision</router-link>
                </li>
                <li>
                  <router-link to="/about" class="small-text">Our Mission</router-link>
                </li>
                <li>
                  <router-link to="/about" class="small-text">Our guiding principle</router-link>
                </li>
                <li>
                  <router-link to="/about" class="small-text">Digitally Supply chain</router-link>
                </li>
              </ul>
            </div>
            <div class="footer__link--item">
              <ul>
                <li >
                  <router-link to="/info" class="body-text">Our impact</router-link></li>
                <li>
                  <router-link to="/info#impact" class="small-text">Our impact</router-link>
                </li>
                <li>
                  <router-link to="/info#resilience" class="small-text">Planet collective resilience</router-link>
                </li>
                <li>
                  <router-link to="/info#innovation" class="small-text">Process waste-less innovation</router-link>
                </li>
              </ul>
            </div>
            <div class="footer__link--item">
              <ul>
                <li>
                  <router-link to="/terms" class="body-text">Terms & Conditions</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer__connect">
            <a href="tel:+67373737" class="footer__connect--link">+054-39-409-349</a>
            <p>
              You can
              <a href="mailto:dddd" class="footer__connect--link">write us a letter </a>
              call us by phone Daily from 7:55 to 20:05
            </p>
          </div>
        </div>
        <div class="footer__title">
          <div class="footer__title--img">
            <router-link to="/"> 
               <img src="@/assets/img/BORCELLE.jpg" alt="img">
              </router-link>
             
          </div>
          <p class="small-text">©BORCELLE 2000-2025</p>
        </div>
      </div>
    </div>
  </footer>
</template>


<script setup>
import { defineOptions } from "vue";

defineOptions({
  name: "TheFooter",
});
</script>
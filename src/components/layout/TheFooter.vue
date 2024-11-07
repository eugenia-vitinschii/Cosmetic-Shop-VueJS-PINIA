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
                <li>Information</li>
                <li>
                  <router-link to="/all-brand" class="small-text"
                    >About us</router-link
                  >
                </li>
                <li>
                  <router-link to="/all-brand" class="small-text"
                    >Contacts</router-link
                  >
                </li>
                <li>
                  <router-link to="/all-brand" class="small-text"
                    >Terms of use</router-link
                  >
                </li>
                <li>
                  <router-link to="/all-brand" class="small-text"
                    >TPrivacy policy</router-link
                  >
                </li>
              </ul>
            </div>
            <div class="footer__link--item">
              <ul>
                <li>About Us</li>
                <li>
                  <router-link to="/all-brand" class="small-text"
                    >Product originality</router-link
                  >
                </li>
                <li>
                  <router-link to="/all-brand" class="small-text"
                    >Promotions</router-link
                  >
                </li>
                <li>
                  <router-link to="/all-brand" class="small-text"
                    >Terms of use of the site</router-link
                  >
                </li>
              </ul>
            </div>
            <div class="footer__link--item">
              <ul>
                <li>Therm Conditions</li>
                <li>
                  <router-link to="/all-brand" class="small-text"
                    >About delivery</router-link
                  >
                </li>
                <li>
                  <router-link to="/all-brand" class="small-text"
                    >Exchange and return</router-link
                  >
                </li>
                <li>
                  <router-link to="/all-brand" class="small-text"
                    >Terms of use</router-link
                  >
                </li>
                <li>
                  <router-link to="/all-brand" class="small-text"
                    >Privacy policy</router-link
                  >
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
               <img src="@/assets/img/logo.png" alt="img">
              </router-link>
             
          </div>
          <p class="small-text">©BORCELLE 2000-2024</p>
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
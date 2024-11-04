<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__info">
          <div class="footer__link">
            <div class="footer__link--item">
              <ul>
                <li>Information</li>
                <li>
                  <router-link to="/all-brand" class="body-text"
                    >About us</router-link
                  >
                </li>
                <li>
                  <router-link to="/all-brand" class="body-text"
                    >Contacts</router-link
                  >
                </li>
                <li>
                  <router-link to="/all-brand" class="body-text"
                    >Terms of use</router-link
                  >
                </li>
                <li>
                  <router-link to="/all-brand" class="body-text"
                    >TPrivacy policy</router-link
                  >
                </li>
              </ul>
            </div>
            <div class="footer__link--item">
              <ul>
                <li>Information</li>
                <li>
                  <router-link to="/all-brand" class="body-text"
                    >Product originality</router-link
                  >
                </li>
                <li>
                  <router-link to="/all-brand" class="body-text"
                    >Promotions</router-link
                  >
                </li>
                <li>
                  <router-link to="/all-brand" class="body-text"
                    >Terms of use of the site</router-link
                  >
                </li>
              </ul>
            </div>
            <div class="footer__link--item">
              <ul>
                <li>Information</li>
                <li>
                  <router-link to="/all-brand" class="body-text"
                    >About delivery</router-link
                  >
                </li>
                <li>
                  <router-link to="/all-brand" class="body-text"
                    >Exchange and return</router-link
                  >
                </li>
                <li>
                  <router-link to="/all-brand" class="body-text"
                    >Terms of use</router-link
                  >
                </li>
                <li>
                  <router-link to="/all-brand" class="body-text"
                    >Privacy policy</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="footer__connect">
            <a href="tel:+67373737">@900439409349</a>
            <p>
              You can
              <a href="mailto:dddd">write us a letter </a>
              call us by phone Daily from 7:55 to 20:05
            </p>
          </div>
        </div>
        <div class="footer__title">
          <p class="heading">Make UP SHOP</p>
          <p class="body-text">© MAKEUP website 2000-2024</p>
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
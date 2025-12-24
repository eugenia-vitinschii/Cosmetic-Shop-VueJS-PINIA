<template>
  <div class="account-edit">
    <div class="container">
      <div class="account-edit__wrapper">
        <div class="page-header">
          <back-button />
          <the-breadcrumbs :items="[
            { label: 'home', to: '/' },
            { label: 'account', to: '/account' },
          ]" :current="'edit account'" />
        </div>
        <div class="account-edit__update ">
          <form class="account-edit__update--form" @submit.prevent="save">
            <p class="heading">Edit {{ auth.user?.username }}</p>
            <div class="custom-input__wrapper">
              <label class="body-text">Name</label>
              <input class="custom-input-text" type="text" placeholder="enter name" v-model="form.username" />
            </div>
            <div class="custom-input__wrapper">
              <label class="body-text">Email</label>
              <input class="custom-input-text" type="text" placeholder="enter email" v-model="form.email" />
            </div>
            <div class="auth__buttons">
              <button type="submit" class="custom-button auth__button">
                save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="swiper">
    <div class="container">
      <div class="swiper__wrapper">
        <p class="heading">Lipstick</p>
        <category-sliders />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//vue 
import { ref, onMounted } from 'vue';

//components
import BackButton from '@/components/core/BackButton.vue';
import TheBreadcrumbs from "@/components/core/Breadcrumbs.vue"
import CategorySliders from "@/components/sliders/CategorySliders.vue";

//pinia
import { useAuthStore } from '@/stores/auth.store';
import type { UpdateMePayload } from '@/types/updateUserPayload';

//route
import { useRouter } from "vue-router";

//Component settings
defineOptions({
  name: 'AccountEditView'
})

//pinia variables
const auth = useAuthStore();

const form = ref<UpdateMePayload>({
  username: auth.user?.username || "",
  email: auth.user?.email || "",
})

const router = useRouter();

//save 
const save = async () => {
  await auth.updateMe(form.value);
  router.push("/account")
}

onMounted(async () => {
  await auth.fetchMe();

  if(!auth.user) return;

  form.value = {
    username: auth.user.username,
    email: auth.user.email,
  }

})
</script>

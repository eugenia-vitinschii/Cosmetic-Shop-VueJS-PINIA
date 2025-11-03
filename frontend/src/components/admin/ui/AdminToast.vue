<template>
<transition name="toast">
  <div 
    class="admin-toast" 
    :class="type"
    v-if="visible"
  >
    <span class="icon">
      <svg v-if="type === 'success'"  xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
      <svg  v-else-if="type === 'error'"  xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
    </span>
    <p class="admin-body-text">{{ message }}</p>
  </div>
</transition>
</template>

<script setup lang="ts">
//vue 
import {ref} from 'vue'

//Component settings
defineOptions({
  name: 'AdminToast'
})


//variables
const visible = ref(false)
const message = ref('')
const type = ref<'success' | 'error'>('success')

function showToast(msg: string, toastType: 'success' | 'error' ='success'){
  message.value = msg
  type.value = toastType
  visible.value = true
  setTimeout(() => {
    visible.value = false
  }, 2000)
}

defineExpose({showToast})
</script>

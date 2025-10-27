<template>
  <div class="admin-todo">
    <div class="admin-todo__head">
      <h2 class="admin-subheading">Admin TO-DO</h2>
      <div class="admin__todo__meta">
        <p class="admin-body-text">{{ todo.stats.done }} / {{ todo.stats.total }}</p>
        <button
          class="admin-svg-button"
          @click="todo.clearCompleted"
          v-if="todo.stats.done"
        >
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"><path d="M873-88 609-352 495-238 269-464l56-58 170 170 56-56-414-414 56-58 736 736-56 56ZM269-238 43-464l56-56 170 170 56 56-56 56Zm452-226-56-56 196-196 58 54-198 198ZM607-578l-56-56 86-86 56 56-86 86Z"/></svg>
      </button>
      </div>
    </div>
    <div class="admin-todo__add">
      <input 
        class="admin-custom-input-text"
        type="text" 
        placeholder="Add new task..."
        v-model="newTask"
        @keyup.enter="onAdd"
      >
      <button
        @click="onAdd"
        class="admin-svg-button"
      >
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"><path d="M360-240 120-480l240-240 56 56-144 144h488v-160h80v240H272l144 144-56 56Z"/></svg>
    </button>
    </div>
    <ul class="admin-todo__list">
      <li 
        class="admin-todo__item"
        v-for="i in todo.tasks"
        :key="i.id"
      >
        <label class="admin-custom-checkbox">
          <input 
            type="checkbox" 
            :checked="i.done"
            @change="todo.toggleTask(i.id)"
          >
          <span class="checkmark"></span>
          <span class="admin-body-text"
            :class="{done: i.done}"
          >
            {{ i.text }}
          </span>
        </label>
        <button
          @click="todo.deleteTask(i.id)"
          class="admin-svg-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z"/></svg>
      </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
//vue 
import { onMounted, ref} from 'vue'
//pinia
import {useTodoStore} from "@/stores/admin.todo.store"

//Component settings
defineOptions({
  name: 'AdminTodo'
})

//variables
const todo = useTodoStore()
const newTask = ref('')

//hooks
onMounted(() => {
  todo.loadFromLocalStorage()
})

//functions
function onAdd(){
  if(!newTask.value.trim()) return
  todo.addTask(newTask.value)
  newTask.value = ''
}

</script>

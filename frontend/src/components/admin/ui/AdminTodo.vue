<template>
  <div class="admin-todo">
    <div class="admin-todo__head">
      <h2 class="admin-subheading">Admin TO-DO</h2>
      <div class="admin__todo__meta">
        <p class="admin-body-text">{{ todo.stats.done }} / {{ todo.stats.total }}</p>
        <button
          @click="todo.clearCompleted"
          v-show="todo.stats.done"
        >
          delete
        </button>
      </div>
    </div>
    <div class="admin-todo__add">
      <input 
        type="text" 
        placeholder="Add new task..."
        v-model="newTask"
        @keyup.enter="onAdd"
      >
      <button
        @click="onAdd"
      >
        add
      </button>
    </div>
    <ul class="admin-todo__list">
      <li 
        class="admin-todo__item"
        v-for="i in todo.tasks"
        :key="i.id"
      >
        <label class="admin-custom-chekbox">
          <input 
            type="checkbox" 
            :checked="i.done"
            @change="todo.toggleTask(i.id)"
          >
          <span></span>
          <span class="admin-body-text"
            :class="{done: i.done}"
          >
            {{ i.text }}
          </span>
        </label>
        <button
          @click="todo.deleteTask(i.id)"
        >
          x
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

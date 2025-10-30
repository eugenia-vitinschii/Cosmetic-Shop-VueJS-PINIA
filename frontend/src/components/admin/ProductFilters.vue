<template>
<div class="admin-filters">
   <!-- brans -->
   <select v-model="model.brand">
      <option value="">All brands</option>
      <option  v-for="i in brands" :key="i" :value="i">{{ i }}</option>
   </select>
   <!-- category -->
   <select v-model="model.category">
      <option value="">All categories</option>
      <option  v-for="i in categories" :key="i" :value="i">{{ i }}</option>
   </select>
   <!-- types -->
   <select v-model="model.type">
      <option value="">All categories</option>
      <option  v-for="i in productTypes" :key="i"  :value="i">{{ i }}</option>
   </select>
   <!-- search by name or id -->
    <input type="text"
    placeholder="Serach by name or ID"
    v-model="searchLocal"
    @input="emitDebounched()"
    >
    <!-- reset -->
   <button
   class="delete"
   type="button"
    @click="reset"
   >
   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z"/></svg>
   </button>
</div>

</template>




<script setup lang="ts">
import { ref, watch} from "vue";

type Filters = {
   brand: string;
   category: string;
   type: string;
   query: string;
}


const props = defineProps<{
   brands: string[];
   categories: string[];
   productTypes: string[];
   modelValue: Filters;
}>();


const emit = defineEmits<{'update:modelValue': [Filters]}>();

//use local copy for control debounche
const model = ref<Filters>({...props.modelValue});


watch(() => props.modelValue, v => (model.value = { ...v}))

//search
const searchLocal = ref(model.value.query);

let timer: ReturnType<typeof setTimeout> | null = null;


function emitDebounched() {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      model.value.query = searchLocal.value;
      emit('update:modelValue', {...model.value})
    }, 300)
}

//edit
watch(model, (v) => emit('update:modelValue', {...v}), { deep: true})

//reset
function reset(){
   model.value = { brand: '', category: '', type: '', query: ''};
   searchLocal.value = '';
   emit('update:modelValue', { ...model.value})
}

</script>
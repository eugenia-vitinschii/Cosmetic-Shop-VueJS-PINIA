<template>
<div class="admin-filters">
   <div class="admin-filters__select">
      <!-- brands -->
      <select v-model="model.brand" class="admin-select">
         <option value="">Filter by brands</option>
         <option  v-for="i in brands" :key="i" :value="i">{{ i }}</option>
      </select>
   <!-- category -->
      <select v-model="model.category" class="admin-select">
         <option value="">Filter by categories</option>
         <option  v-for="i in categories" :key="i" :value="i">{{ i }}</option>
      </select>
      <!-- types -->
      <select v-model="model.type" class="admin-select">
         <option value="">Filter by types</option>
         <option  v-for="i in productTypes" :key="i"  :value="i">{{ i }}</option>
      </select>
      <!-- tag option -->
       <select v-model="model.tag" class="admin-select">
         <option value="">Filter by tags</option>
         <option 
            v-for="i in sliderTags"
            :key="i"
            :value="i"
         >
            {{ i }}
         </option>
       </select>
   </div>
   <div class="admin-filters__search">
   <!-- search by name or id -->
    <input type="text"
      class="admin-custom-input-text"
      placeholder="Serach by name or ID"
      v-model="searchLocal"
      @input="emitDebounched()"
    >
    <!-- reset -->
   <button
      class="admin-svg-button"
      type="button"
      @click="reset"
   >
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" ><path d="M120-280v-80h560v80H120Zm80-160v-80h560v80H200Zm80-160v-80h560v80H280Z"/></svg>
   </button>
   </div>
</div>
</template>

<script setup lang="ts">

import { ref, watch} from "vue";

type Filters = {
   brand: string;
   category: string;
   type: string;
   query: string;
   tag: string;
}

const props = defineProps<{
   brands: string[];
   categories: string[];
   productTypes: string[];
   sliderTags: string[];
   modelValue: Filters;
}>();


const emit = defineEmits<{
   (e: 'update:modelValue', value: Filters):void
}>();

//use local copy for control debounche
const model = ref<Filters>({...props.modelValue});

watch(() => props.modelValue, 
   (newVal) =>{
      if(JSON.stringify(newVal) !== JSON.stringify(model.value)) {
         model.value = {...newVal}
      }
   }, {deep: true}
)

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
   model.value = { brand: '', category: '', type: '', tag: '', query: ''};
   searchLocal.value = '';
   emit('update:modelValue', { ...model.value})
}

</script>
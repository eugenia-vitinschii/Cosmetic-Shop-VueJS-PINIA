<template>
    <div class="admin-input__wrapper">
      <label class="admin-body-text">{{ label }}</label>
      <input
         class="admin-custom-input-text"
         type="text"
         :value="modelValue"
         @input="onInput"
         :placeholder="placeholder"
      />
  </div>
</template>

<script setup lang="ts">
//vue 

//Component settings
defineOptions({
  name: 'AdminInput'
})


const props = defineProps<{
  modelValue: number | string | undefined,
  label: string,
  placeholder?: string
}>()

//emit
const emit = defineEmits<{
  (e: 'update:modelValue', value: string |number):void
}>()

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const value = typeof props.modelValue === 'number' ? Number (target.value) : target.value
  emit('update:modelValue', value)
}
</script>

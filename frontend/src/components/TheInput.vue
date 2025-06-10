<template>
  <div class="input__wrapper">
    <label class="body-text">{{ label }}</label>
    <input
      type="text"
      :value="modelValue"
      @input="onInput"
      :placeholder="placeholder"
    />
  </div>
</template>
   

<script setup lang="ts">
//compinent
defineOptions({
  name: "TheInput",
});

const props = defineProps<{
  modelValue: number | string,
  label: string,
  placeholder: string
}>()

//emit
const emit = defineEmits<{
  (e: 'update:modelValue', value: string |number):void
}>()

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  const value = typeof props.modelValue === 'number' ? Number (target.value) : target.value
  emit('update: modelValue', value)
}
</script>

<template>
  <div class="flex items-center justify-center w-full">
    <label for="switch" class="flex items-center cursor-pointer">
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input type="checkbox" id="switch" class="sr-only" v-model="model" :value="value" aria-label="Switch">
        <!-- line -->
        <div class="block bg-gray-600 w-12 h-7 rounded-full"></div>
        <!-- dot -->
        <div class="dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition">
          <slot name="active" v-if="model" />
          <slot name="inactive" v-else />
        </div>
      </div>
      <!-- label -->
      <div class="ml-3 text-gray-700 font-medium">
        <slot />
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean
  },
  value: {
    type: Boolean
  }
})
const emit = defineEmits(['update:modelValue'])
const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #000;
}
</style>
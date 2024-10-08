<template>
  <nav :class="`fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10 ${sticky}`">
    <div class="flex items-center">
      <span class="logo font-black text-xl font-montserrat-black">jbanas.dev</span>
    </div>
    <ul class="font-montserrat flex items-center">
      <li class="mx-3">
        <a class="github" href="https://github.com/jban-as" target="_blank" aria-label="GitHub">
          <UiSvgIcon name="github" title="GitHub" />
        </a>
      </li>
      <li class="mx-3">
        <a class="linkedin" href="https://linkedin.com/in/joven-ban-as" target="_blank" aria-label="LinkedIn">
          <UiSvgIcon name="linkedin" title="LinkedIn" />
        </a>
      </li>
      <li class="mx-3">
        <a class="instagram" href="https://instagram.com/iamjovenb" target="_blank" aria-label="Instagram">
          <UiSvgIcon name="instagram" title="Instagram" />
        </a>
      </li>
    </ul>
    <div class="font-montserrat block">
      <UiSwitch v-model="isDarkMode">
        <template #active>
          <UiSvgIcon name="moon" class="w-5 h-5" />
        </template>
        <template #inactive>
          <UiSvgIcon name="sun" class="w-5 h-5 text-yellow-500" />
        </template>
      </UiSwitch>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const colorMode = useColorMode()
const isDarkMode = ref(false)
const scrollPosition = ref(0);

const updateScroll = () => {
  scrollPosition.value = window.scrollY
}

const sticky = computed(() => {
  return scrollPosition.value > 0 ? `${isDarkMode.value ? 'bg-slate-900 shadow-gray-800' : 'bg-white'} shadow-lg` : ''
})

onMounted(() => {
  isDarkMode.value = colorMode.value === 'dark'
  window.addEventListener('scroll', updateScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})

watch(isDarkMode, (newValue) => {
  colorMode.preference = newValue ? 'dark' : 'light'
})

watch(colorMode, (newValue) => {
  isDarkMode.value = newValue.preference === 'dark'
})
</script>

<style>
.github:hover svg * {
  fill: #747474;
}
.linkedin:hover svg * {
  fill: #0072b1;
}
.instagram:hover svg * {
  fill: url(#instagram);
}
</style>
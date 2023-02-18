<template>
  <div>
    <div class="about-me-section">
      <div class="intro">
        <h2 class="text-5xl mb-2">Hi, I'm Joven</h2>
        <h3 class="text-2xl text-neutral-400 mb-5">Frontend Developer</h3>
        <p class="max-w-md">I am a self-taught web developer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience.</p>
      </div>
      <div class="image"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>

<style scoped>
.about-me-section {
  padding-top: 10rem;
  transition: opacity 0.25s ease 0s;
}
</style>
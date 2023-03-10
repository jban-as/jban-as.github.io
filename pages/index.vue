<template>
  <div class="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
    <div class="intro md:flex-1 md:mr-10">
      <h2 class="text-5xl mb-2">Hi, I'm Joven B.</h2>
      <h3 class="text-2xl text-neutral-400 mb-5">Frontend Developer</h3>
      <p>I am a self-taught web developer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience.</p>
    </div>
    <div class="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
      <div class="relative">
        <UiSvgIcon name="highlight1" class="absolute -top-16 -left-10" />
      </div>
      <img src="~/assets/img/profile.webp" alt="Macbook">
      <div class="relative">
        <UiSvgIcon name="highlight2" class="absolute -bottom-10 -right-6" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Joven Ban-as | Web Developer'
})
</script>

<style scoped>
</style>
<template>
  <section class="bg-secondary">
    <div class="hero-main pt-24 md:h-screen md:mt-0 lg:px-48 md:px-12 px-4 flex flex-col-reverse justify-center text-center md:text-left md:flex-row md:justify-between md:items-center">
      <div class="hero-text md:flex-1 md:mr-10 relative">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-2">Hi, I'm Joven Ban-as <img src="~/assets/img/waving.png" alt="Waving Hand" class="w-12 ml-2 mb-2 inline-block md:absolute"></h2>
        <h3 class="text-2xl text-neutral-400 mb-5">Frontend Developer</h3>
        <p>I am a self-taught web developer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience.</p>
      </div>
      <div class="hero-img flex justify-around md:block mt-8 md:mt-0 md:flex-1">
        <div class="profile-img relative h-80 w-80 bg-cover bg-center bg-no-repeat mb-5 md:mb-0 md:m-auto"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Joven Ban-as | Web Developer'
})
</script>

<style scoped>
.profile-img {
  background-image: url("~/assets/img/profile.webp");
  border: 3px solid #2d2e32;
  animation: morph 8s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  transition: all 1s ease-in-out;
}
@media (max-width: 500px) {
  .hero-text img {
    right: 3.5rem;
    width: 2.5rem;
  }
  .profile-img {
    height: 17rem;
    width: 17rem;
  }
}
@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}
</style>
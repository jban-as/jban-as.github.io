<template>
  <section class="bg-secondary md:h-screen pb-10 px-4 pt-16 md:mt-0 lg:px-48 md:px-12 md:pt-40">
    <div class="hero-main flex flex-col-reverse justify-center text-center md:text-left md:flex-row md:justify-between md:items-center">
      <div class="hero-text md:flex-1 md:mr-10 relative">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-2">Hi, I'm Joven Ban-as <img src="~/assets/img/waving.png" alt="Waving Hand" class="w-12 ml-2 mb-2 inline-block md:absolute"></h2>
        <h3 class="text-2xl text-neutral-400 mb-5">Frontend Developer</h3>
        <p>I am a self-taught web developer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience.</p>
      </div>
      <div class="hero-img flex justify-around md:block mt-8 md:mt-0 md:flex-1">
        <div class="profile-img relative h-80 w-80 bg-cover bg-center bg-no-repeat mb-5 md:mb-0 md:m-auto"></div>
      </div>
    </div>
    <div class="skills flex items-center mt-10 md:mt-20 flex-col md:flex-row">
      <h3 class="text-lg leading-normal border-solid border-b-2 border-b-neutral-500 border-r-neutral-500 pb-2 mb-6 md:border-b-0 md:border-r-2 md:pb-0 md:mb-0 md:mr-16 md:pr-4">Tech Stack</h3>
      <div class="logos">
        <ul class="flex flex-wrap gap-6 list-none items-center justify-center">
          <li class="flex justify-center items-center h-16 w-16 bg-white rounded-full cursor-pointer" v-for="skill in skills" :key="skill.name">
            <UiSvgIcon :name="skill.name" :title="skill.title" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Joven Ban-as | Web Developer'
})
const skills = ref([
  { name: 'html', title: 'HTML5' },
  { name: 'css3', title: 'CSS3' },
  { name: 'javascript', title: 'Javascript' },
  { name: 'vue', title: 'Vue JS' },
  { name: 'react', title: 'React JS' },
  { name: 'tailwind', title: 'Tailwind CSS' },
  { name: 'scss', title: 'Sass/Scss' }
]);
</script>

<style scoped>
.dark-mode .profile-img {
  border: 3px solid rgb(163 163 163 / 1);
}
.profile-img {
  background-image: url("~/assets/img/profile.webp");
  border: 3px solid #2d2e32;
  animation: morph 8s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  transition: all 1s ease-in-out;
}
.skills .logos ul li {
  box-shadow: 0 0 10px rgba(0,0,0,.09);
}
:deep(.skills .logos ul li svg) {
  height: auto;
  width: 2.5rem;
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
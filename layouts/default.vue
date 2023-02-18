<template>
  <div class="app-container">
    <BaseHeader />
    <main>
      <slot />
      <BaseFooter />
    </main>
  </div>
</template>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
.app-container main {
  width: 900px;
  margin: 0px auto;
  padding: 0px 1rem;
}
</style>
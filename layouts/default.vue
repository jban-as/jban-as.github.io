<template>
  <div class="app-container">
    <BaseHeader />
    <slot />
  </div>
</template>

<style lang="scss">
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
  font-family: $font-family;
}
.dark {
  body {
    background-color: #091a28;
    color: #ebf4f1;
  }
}
</style>
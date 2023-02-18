<template>
  <header>
    <div class="header-nav">
      <div class="logo font-black text-xl">iamjovenb</div>
      <div class="social-links">Social media links</div>
      <div class="color-mode">Color mode:
        <select v-model="$colorMode.preference">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="sepia">Sepia</option>
        </select>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>

<style scoped>
header {
  position: fixed;
  z-index: 5;
  top: 0px;
  left: 0px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  height: 6rem;
  padding: 0px 1rem;
  width: 100vw;
  transition: background 0.45s ease 0s;
  background: rgba(0, 0, 0, 0.725);
  backdrop-filter: blur(4px);
}
.header-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 900px;
  padding: 0 1.25rem;
  margin: 0px auto;
}
</style>
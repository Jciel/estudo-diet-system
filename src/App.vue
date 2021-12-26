<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img class="img-logo" alt="Vue logo" src="./assets/apple-logo.svg" />
  <a class="link-project" href="https://github.com/Jciel/estudo-diet-system">
    <img class="github-link" alt="github link" src="./assets/githubmark.png" />
  </a>
  <router-view />
</template>
assets
<style>
:root {
  --primary: #4AD395;
  --secondary: #7267CB;

  --text-color: #777777;
  --color-disabled: #E5E5E5;
}
#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
  margin-top: 60px;
}

.img-logo {
  margin-bottom: 63px;
}

.link-project {
  position: absolute;
  left: 20px;
  top: 20px;
}
</style>

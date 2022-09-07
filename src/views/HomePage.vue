<template>
  <div class="home-wrapper">
    <NavbarVue />
    <Header />
  </div>
</template>

<script setup>
import NavbarVue from "../components/Navbar.vue";
import Header from "../components/Header.vue";
</script>

<style scoped>
@media only screen and (max-width: 768px) and (min-width: 320px) {
  .home-wrapper {
    background: #f6f6f6;
    color: #141414;
    display: grid;
    gap: 24%;
    margin: auto;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
}
@media only screen and (max-width: 2560px) and (min-width: 768px) {
  .home-wrapper {
    background: #f6f6f6;
    color: #141414;
  }
}
</style>
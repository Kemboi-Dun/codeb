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
    color: var(--text-secondary-color);
    margin: auto;
    align-items: center;
    justify-content: center;
    width: 100%;
    background:  var(--background-color-primary);

  }
}
@media only screen and (max-width: 2560px) and (min-width: 768px) {
  .home-wrapper {
    background:  var(--background-color-primary);
    color: var(--text-secondary-color);
  }
}
</style>
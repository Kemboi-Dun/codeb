<template>
  <div class="home-wrapper">
    <NavbarVue />
    <Header/>
  </div>
</template>

<script setup>
import NavbarVue from "../components/Navbar.vue";
import Header from "../components/Header.vue";
</script>

<style scoped>
.home-wrapper {
  background: #f6f6f6;
  color: #141414;
}
</style>
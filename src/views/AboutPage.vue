<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import AboutHeader from "../components/AboutHeader.vue";
import About from "../components/About.vue";
</script>

<template>
  <div class="about-page-wrapper">
    <Navbar />
    <AboutHeader />
    <About />
    <Footer />
  </div>
</template>
<style scoped>
.about-page-wrapper {
  background: var(--background-color-primary);
  color: var(--text-primary-color);
}
</style>

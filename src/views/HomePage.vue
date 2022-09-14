<template>
  <div class="home-wrapper">
    <NavbarVue />
    <Header />
    <AboutHeader />
    <About />
    <Work />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import NavbarVue from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import AboutHeader from "../components/AboutHeader.vue";
import About from "../components/About.vue";
import Work from "../components/Work.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped>
@media only screen and (max-width: 768px) and (min-width: 320px) {
  .home-wrapper {
    display: grid;
    color: var(--text-secondary-color);
    margin: auto;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: var(--background-color-primary);
    overflow-y: hidden;
  }
}
@media only screen and (max-width: 2560px) and (min-width: 768px) {
  .home-wrapper {
    background: var(--background-color-primary);
    color: var(--text-secondary-color);
  }
}
</style>
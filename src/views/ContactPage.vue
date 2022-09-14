<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Contact from "../components/Contact.vue";
</script>
    
    <template>
  <div class="contact-page-wrapper">
    <Navbar />
    <Contact />
    <Footer />
  </div>
</template>
    <style scoped>
.contact-page-wrapper {
  background: var(--background-color-primary);
  color: var(--text-primary-color);
  overflow-y: hidden;
}
</style>
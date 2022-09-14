<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Work from "../components/Work.vue";
</script>
    
    <template>
  <div class="work-page-wrapper">
    <Navbar />
    <Work />
    <Footer />
  </div>
</template>
    <style scoped>
.work-page-wrapper {
  background: var(--background-color-primary);
  color: var(--text-primary-color);
}
</style>
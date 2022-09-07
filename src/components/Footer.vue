<script setup>
</script>


<template>
  <div class="footer-wrapper">
    <div class="info-1">© 2023 BY CodeBuffers.</div>
    <div class="info-2">Privacy and Policy</div>
  </div>
</template>

<style scoped>
/* small screens */
@media only screen and (max-width: 768px) and (min-width: 320px) {
  .footer-wrapper {
    color: var(--text-primary-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
    padding: 4px 7px;
  }
  .info-1 {
    font-weight: 700;

    line-height: 52px;
  }
}

/* large screens */

@media only screen and (max-width: 2560px) and (min-width: 768px) {
  .footer-wrapper {
    color: var(--text-primary-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
    /* background:lime; */
    padding: 4px 7px;
  }
  .info-1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
  }
  .info-2 {
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
  }
}
</style>
<template>
  <div class="about-header-wrapper">
    <div class="about-header-info">Code Buffers, Founded in 2021</div>
  </div>
</template>
<style scoped>
/* small screens */
@media only screen and (max-width: 768px) and (min-width: 320px) {
  .about-header-wrapper {
    margin: 0 5%;
    width: 90%;
    color: var(--text-primary-color);
  }
  .about-header-info {
    font-weight: 700;
    font-size: 280%;
    margin: 0;
  }
}

/* large screens */

@media only screen and (max-width: 2560px) and (min-width: 768px) {
  .about-header-wrapper {
    margin: 0 5%;
    width: 900px;
    color:var(--text-primary-color);
  }
  .about-header-info {
    font-weight: 800;
    font-size: 100px;
  }
}
</style>
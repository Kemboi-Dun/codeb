<template>
  <div class="header-wrapper">
    <div class="header-info">
      <p>Code buffers</p>
    </div>
    <div class="header-desc">
      <p>Kenyan based startup Tech Company.</p>
      <img src="../assets/arrow.svg" alt="down-arrow" />
    </div>
  </div>
</template>


<style scoped>
/* small screens */
@media only screen and (max-width: 768px) and (min-width: 320px) {
  .header-wrapper {
    margin: 8% auto;
    width: 90%;
    color: var(--text-primary-color);
  }
  .header-info {
    text-transform: capitalize;
    font-size: 560%;
    width: 100%;
    font-weight: 600;
  }
  .header-desc {
    margin: auto;
    width: 95%;
    display: flex;
  }
  .header-desc img {
    height: 90px;
  }
}

/* large screens */

@media only screen and (max-width: 2560px) and (min-width: 768px) {
  .header-wrapper {
    color: var(--text-primary-color);
    width: 60%;
    margin: 0 12%;
    text-transform: uppercase;
  }
  .header-info {
    font-weight: 700;
    font-size: 150px;
    line-height: 180px;
  }
  .header-desc {
    text-transform: capitalize;
    font-weight: 300;
    font-size: 30px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;

    height: 30vh;
  }
  .header-desc img {
    height: 150px;
  }
}
</style>
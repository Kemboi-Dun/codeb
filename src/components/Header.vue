<template>
  <div class="header-wrapper">
    <div class="header-info">
      <p>Code buffers</p>
    </div>
    <div class="header-desc">
      <p>Kenyan based startup Tech Company.</p>
      <div class="arrow">
        <div class="arrowWrapper"></div>
        <div class="arrowWrapper-arrow"></div>
      </div>

      <!-- <img src="../assets/arrow.svg" alt="down-arrow" /> -->
    </div>
  </div>
</template>


<style scoped>
/* small screens */
@media only screen and (max-width: 768px) and (min-width: 320px) {
  .arrow {
    width: 120px;
    position: relative;
    transform: rotate(-45deg);
  }
  .arrowWrapper:before {
    content: "";
    position: absolute;
    display: block;
    width: 15px;
    height: 60px;
    background: var(--background-color-secondary);
    left: 59%;
    transform: rotate(45deg);
    top: 30%;
  }
  .arrowWrapper-arrow:before {
    content: "";
    position: absolute;
    display: block;
    width: 15px;
    height: 60px;
    background: var(--background-color-secondary);
    right: 62%;
    transform: rotate(135deg);
    top: 30%;
  }

  .arrowWrapper:after {
    content: "";
    position: relative;
    display: block;
    width: 15px;
    height: 60px;
    background: var(--background-color-secondary);
    z-index: 1;
    margin: auto;
    /* left: 40px; */
  }
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
    color: #fff;
    height: 90px;
  }
}

/* large screens */

@media only screen and (max-width: 2560px) and (min-width: 768px) {
  .arrow {
    width: 200px;
    position: relative;
    transform: rotate(-45deg);
  }
  .arrowWrapper:before {
    content: "";
    position: absolute;
    display: block;
    width: 20px;
    height: 100px;
    background: var(--background-color-secondary);
    left: 59%;
    transform: rotate(45deg);
    top: 30%;
  }
  .arrowWrapper-arrow:before {
    content: "";
    position: absolute;
    display: block;
    width: 20px;
    height: 100px;
    background: var(--background-color-secondary);
    right: 60%;
    transform: rotate(135deg);
    top: 30%;
  }

  .arrowWrapper:after {
    content: "";
    position: relative;
    display: block;
    width: 20px;
    height: 130px;
    background: var(--background-color-secondary);
    z-index: 1;
    margin: auto;
    /* left: 40px; */
  }
  .header-wrapper {
    color: var(--text-primary-color);
    width: 60%;
    margin: 0 5%;
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
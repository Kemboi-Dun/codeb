<template>
  <div class="contact-wrapper">
    <div class="contact-title">Contact Us</div>
    <div class="contact-items">
      <div class="contact-card-cont">
        <div class="contact-items">
          <div class="contact-card-title">Email</div>
          <div class="contact-card-item">codebuffers@gmail.com</div>
        </div>

        <div class="contact-items">
          <div class="contact-card-title">Phone</div>
          <div class="contact-card-item">+254 0170 7735</div>
        </div>

        <div class="contact-items">
          <div class="contact-card-title">Github</div>
          <div class="contact-card-item">CodeBuffers_</div>
        </div>

        <!-- <div class="contact-items">
    <div class="contact-card-title">
    Twitter
</div>
<div class="contact-card-item">
    @code_buffers
</div>
</div> -->

        <div class="contact-items">
          <div class="contact-card-title">Address</div>
          <div class="contact-card-item">Thika, Kiambu Kenya</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* small screens */
@media only screen and (max-width: 768px) and (min-width: 320px) {
  .contact-wrapper {
    color: var(--text-primary-color);
  }
  .contact-title {
    font-size: 220%;
    font-weight: 700;
    text-decoration: underline 6px solid var(--text-primary-color);
    text-underline-offset: 10px;
    margin: 0 5%;
  }
  .contact-wrapper {
    display: grid;
  }
  .contact-card-cont {
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    gap: 34px;
    margin: 2% auto;
    align-items: center;
  }
  .contact-card-title {
    margin: 4% 0;
    text-transform: capitalize;
    font-weight: 500;
    text-decoration: underline 4px solid var(--text-primary-color);
  }
  .contact-card-item {
    font-weight: 400;
  }
}

/* large screens */

@media only screen and (max-width: 2560px) and (min-width: 768px) {
  .contact-wrapper {
    color: var(--text-primary-color);
  }

  .contact-title {
    font-size: 100px;
    font-weight: 700;
    line-height: 180px;
    text-decoration: underline 12px solid var(--text-primary-color);
    text-underline-offset: 10px;
    margin: 0 5%;
  }
  .contact-card-cont {
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    gap: 44px;
    margin: 2% auto;
    align-items: center;
    justify-content: space-between;
  }
  .contact-card-title {
    margin: 6% 0;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    text-decoration: underline 4px solid var(--text-primary-color);
  }
  .contact-card-item {
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    width: 250px;
  }
  .contact-items {
    display: grid;
  }
}
</style>
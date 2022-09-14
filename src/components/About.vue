<script setup>
const information = [
  {
    id: 1,
    title: "Best 3Js Project 2022",
    desc: "This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",
  },
  {
    id: 2,
    title: "Best React Js Project 2022",
    desc: "This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",
  },
];
</script>

<template>
  <div class="about-body-wrapper">
    <div class="title-wrapper">
      <p>Featured In</p>
    </div>
    <div class="about-wrapper-cont">
      <div class="about-info-cont" v-for="info in information" :key="info.id">
        <div class="about-info-cont-title">
          {{ info.title }}
        </div>
        <div class="about-info-cont-desc">
          {{ info.desc }}
        </div>
        <div class="about-desc-btn">
          <button>View Publication</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* small screens */
@media only screen and (max-width: 768px) and (min-width: 320px) {
  .about-body-wrapper {
    margin: 4% auto;
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: space-evenly;
    color: var(--text-primary-color);
  }
  .title-wrapper {
    font-weight: lighter;
    font-size: 38px;
  }
  .about-wrapper-cont {
    display: grid;
    gap: 12px;

    margin: auto;
    margin: auto;
    margin-top: 6%;
  }
  .about-info-cont {
    padding: 6px 12px;

    display: flex;
    flex-direction: column;
    gap: 8px;
    align-content: flex-end;
    margin: auto;
  }
  .about-info-cont-title {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-transform: capitalize;
  }
  .about-info-cont-desc {
    font-weight: 280;
    font-size: 20px;
    line-height: 26px;
  }
  .about-desc-btn button {
    color: var(--text-primary-color);
    border: 1px solid var(--text-primary-color);
    border-radius: 6px;
    background: transparent;
    font-size: 20px;
    line-height: 30px;
    font-weight: 280;
    padding: 4px 8px;
    text-transform: capitalize;
    cursor: pointer;
  }
  .about-desc-btn button:hover {
    background: var(--background-color-secondary);
    color: var(--text-secondary-color);
  }
}

/* large screens */

@media only screen and (max-width: 2560px) and (min-width: 768px) {
  .about-body-wrapper {
    color: var(--text-primary-color);
    margin: 4% auto;
    display: flex;
    width: 90%;
    justify-content: space-evenly;
  }
  .title-wrapper {
    font-weight: lighter;
    font-size: 58px;
  }
  .about-wrapper-cont {
    display: grid;
    gap: 12px;

    margin: auto;
    margin: auto;
    margin-top: 6%;
  }
  .about-info-cont {
    padding: 6px 12px;

    display: flex;
    flex-direction: column;
    gap: 8px;
    align-content: flex-end;
    margin: auto;
  }
  .about-info-cont-title {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-transform: capitalize;
  }
  .about-info-cont-desc {
    font-weight: 280;
    font-size: 20px;
    line-height: 30px;

    width: 800px;
  }
  .about-desc-btn button {
    color: var(--text-primary-color);
    border: 1px solid var(--text-primary-color);
    border-radius: 6px;
    background: transparent;
    font-size: 20px;
    line-height: 30px;
    font-weight: 280;
    padding: 4px 8px;
    text-transform: capitalize;
    cursor: pointer;
  }
  .about-desc-btn button:hover {
    background: var(--background-color-secondary);
    color: var(--text-secondary-color);
  }
}
</style>
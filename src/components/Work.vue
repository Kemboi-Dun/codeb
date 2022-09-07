<script setup>
const projects = [
  {
    id: 1,
    title: "ERP System",
    desc: "This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",
  },
  {
    id: 2,
    title: "Grading System",
    desc: "This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",
  },
];
</script>

<template>
  <div class="work-body-wrapper">
    <div class="work-title">Work</div>
    <div class="work-cont">
      <div class="work-info" v-for="project in projects" :key="project.id">
        <div class="work-info-title">
          {{ project.title }}
        </div>
        <div class="work-info-desc">
          {{ project.desc }}
          <div class="work-info-btn">
            <button>View Project</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* small screens */
@media only screen and (max-width: 768px) and (min-width: 320px) {
  .work-title {
    font-size: 250%;
    font-weight: 700;
    text-decoration: underline 6px solid var(--text-primary-color);
    text-underline-offset: 10px;
    margin: 0 5%;
  }
  .work-cont {
    margin: 0 5%;
    display: grid;
    gap: 12px;
    width: 90%;
  }
  .work-info {
    display: flex;
    flex-direction: column;
    margin: 2% auto;
  }
  .work-info-title {
    font-size: 200%;
    font-weight: 200;
    line-height: 76px;
  }
  .work-info-desc {
    font-weight: 200;
    font-size: 20px;
    line-height: 30px;
    display: grid;
    gap: 6px;
    width: 70%;
    margin: auto;
  }
  .work-info-btn button {
    color:var(--text-primary-color);
    font-size: 20px;
    font-weight: 275;
    line-height: 30px;
    border: 1px solid var(--text-primary-color);
    border-radius: 6px;
    background: transparent;
    text-transform: capitalize;
    padding: 4px 12px;
    cursor: pointer;
    background: var(--background-color-primary);
  }
  .work-info-btn button:hover {
    background: var(--background-color-primary);
    color: var(--text-primary-color);
  }
}

/* large screens */

@media only screen and (max-width: 2560px) and (min-width: 768px) {
  .work-body-wrapper {
    color: var(--text-primary-color);
    margin: auto;
  }
 
  .work-title {
    font-size: 120px;
    font-weight: 700;
    line-height: 180px;
    text-decoration: underline 12px solid var(--text-primary-color);
    text-underline-offset: 10px;
    margin: 0 5%;
  }
  .work-cont {
    margin: 0 5%;
    display: grid;
    gap: 12px;
    width: 90%;
  }
  .work-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2% auto;
  }
  .work-info-title {
    font-size: 64px;
    font-weight: 200;
    line-height: 96px;
    width: 40%;
  }
  .work-info-desc {
    font-weight: 200;
    font-size: 20px;
    line-height: 30px;
    display: grid;
    gap: 6px;
    width: 70%;
    margin: auto;
  }
  .work-info-btn button {
    color: var(--text-primary-color);
    font-size: 20px;
    font-weight: 275;
    line-height: 30px;
    border: 1px solid var(--text-primary-color);
    border-radius: 6px;
    background: transparent;
    text-transform: capitalize;
    padding: 4px 12px;
    cursor: pointer;
  }
  .work-info-btn button:hover {
    background:  var(--background-color-secondary);
    color: var(--text-secondary-color);
  }
}
</style>
<script>
import { RouterLink } from "vue-router";
import Toogle from "./Toogle.vue";
import Toogle1 from "./Toogle.vue";
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleNav: function () {
      this.showMenu = !this.showMenu;
      console.log(this.showMenu);
    },
  },
  components: { Toogle, Toogle1 },
};
</script>
<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="nav-1" v-show="!showMenu">
          <RouterLink to="/">
            <span>CodeB.</span>
          </RouterLink>
          <div class="humbugger" @click="toggleNav">
            <img src="../assets/humbugger.png" alt="" />
          </div>
        </div>
        <!-- LARGE SCREENS NAVBAR -->
        <div class="nav-2">
          <RouterLink to="/about" exact-active-class="active">About</RouterLink>
          <RouterLink to="/work" exact-active-class="active">Work</RouterLink>
          <RouterLink to="/contact" exact-active-class="active"
            >Contact</RouterLink
          >
          <div class="toogle-icon">
            <Toogle />
          </div>
        </div>
      </nav>
      <!-- SMALL SCREEN NAVBAR -->

      <div class="mini-navbar" v-show="showMenu">
        <div class="close-img">
          <Toogle />
          <img @click="toggleNav" src="../assets/close.png" alt="" />
        </div>

        <RouterLink to="/about" exact-active-class="active">About</RouterLink>
        <RouterLink to="/work" exact-active-class="active">Work</RouterLink>

        <RouterLink to="/contact" exact-active-class="active"
          >Contact</RouterLink
        >
      </div>
    </div>
  </header>
</template>

<style scoped>
@media only screen and (max-width: 768px) and (min-width: 320px) {
  nav {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
    position: relative;
    color: var(--text-primary-color);
  }
  .close-img {
    display: flex;
    justify-content: space-between;
    align-content: flex-end;
    height: 42px;
    margin: 0 12px;
    margin-top: 28px;
  }
  .close-img img {
    height: 100%;
    margin: 0 6%;
    /* cursor: pointer; */
  }
  .mini-navbar {
    z-index: 1;
    color: var(--text-primary-color);
    position: fixed;
    margin: auto;
    width: 100%;
    text-align: center;
    background: var(--background-color-nav);
    backdrop-filter: blur(6px);
    display: grid;
    height: 100vh;
    gap: 8px;
  }

  nav .nav-2,
  .nav-3,
  .nav-4 {
    display: none;
  }
  nav .nav-1 {
    border-radius: 4px;
    align-items: center;
    padding: 4px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
  }
  .humbugger {
    cursor: pointer;
  }

  .wrapper {
    width: 100%;
    margin: 3% auto;
    background: transparent;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a {
    color: var(--text-primary-color);
    text-decoration: none;
    margin: 0 4px;
    font-size: 28px;
  }
  .nav-1 a {
    color: var(--text-primary-color);
  }
  .nav-1 .router-link-active {
    text-decoration: none;
  }
  .nav-1 a:active {
    text-decoration: dashed;
  }
  .nav-1 {
    font-weight: 800;
    font-size: 40px;
    margin: 0 6%;
  }
  .nav-2 {
    width: 100%;
    max-width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-weight: 600;
    font-size: 18px;
  }
  nav .router-link-active {
    color: var(--text-primary-color);
    text-decoration: underline 4px solid var(--text-primary-color);
    text-underline-offset: 5px;
  }
}

@media only screen and (max-width: 2560px) and (min-width: 768px) {
  .toogle-icon {
    top: 15%;
    /* background: lime; */
    left: 92%;
    position: fixed;
  }
  .wrapper {
    width: 100%;
    margin: auto;
    background: transparent;
  }
  .mini-navbar {
    display: none;
  }
  img {
    display: none;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a {
    color: var(--text-primary-color);
    text-decoration: none;
    margin: 4% 4px;
  }
  .nav-1 a {
    color: var(--text-primary-color);
    font-weight: 700;
    font-size: 64px;
    line-height: 96px;
  }
  .nav-2 a {
    border: 1px solid var(--background-color-secondary);
    border-radius: 6px;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    padding: 0 24px;
  }
  .nav-1 .router-link-active {
    text-decoration: none;
  }
  .nav-1 {
    font-weight: 800;
    font-size: 40px;
    margin: 0 5%;
  }
  .nav-2 {
    width: 100%;
    max-width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 600;
    font-size: 18px;
  }

  nav .nav-2 .router-link-active {
    color: var(--text-secondary-color);
    background: var(--background-color-secondary);
  }
}
</style>
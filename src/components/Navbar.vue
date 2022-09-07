<script>
import { RouterLink } from "vue-router";
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
        <!-- SMALL SCREEN NAVBAR -->

        <div class="mini-navbar" v-show="showMenu">
          <div class="close-img" @click="toggleNav">
            <img src="../assets/close.png" alt="" />
          </div>
          <RouterLink to="/about" exact-active-class="active">About</RouterLink>
          <RouterLink to="/work" exact-active-class="active">Work</RouterLink>

          <RouterLink to="/contact" exact-active-class="active"
            >Contact</RouterLink
          >
        </div>

        <!-- LARGE SCREENS NAVBAR -->
        <div class="nav-2">
          <RouterLink to="/about" exact-active-class="active">About</RouterLink>
          <RouterLink to="/work" exact-active-class="active">Work</RouterLink>
          <RouterLink to="/contact" exact-active-class="active"
            >Contact</RouterLink
          >
        </div>
      </nav>
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
    position:relative;
  }
  .close-img {
    display: flex;
    justify-content: end;
    align-content: flex-end;
    height: 42px;
    margin: 0 12px;
    margin-top: 28px;
  }
  .close-img img {
    height: 100%;
    margin: 0 6%;
    cursor: pointer;
  }
  .mini-navbar {
    color: #181818;
    position: fixed;
    margin:  auto;
    width: 100%;
    text-align: center;
    /* background: rgba(255, 255, 255, 0.4); */
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
    color: #181818;
    text-decoration: none;
    margin: 0 4px;
    font-size: 28px;
  }
  .nav-1 a {
    color: #181818;
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
    color: #181818;
    text-decoration: underline 4px solid #181818;
    text-underline-offset: 5px;
  }
}

@media only screen and (max-width: 2560px) and (min-width: 768px) {
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
    color: #141414;
    text-decoration: none;
    margin: 4% 4px;
  }
  .nav-1 a {
    color: #141414;
    font-weight: 700;
    font-size: 64px;
    line-height: 96px;
  }
  .nav-2 a {
    border: 1px solid #141414;
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
    justify-content: space-evenly;
    font-weight: 600;
    font-size: 18px;
  }

  nav .nav-2 .router-link-active {
    color: #f2f2f2;
    background: #161616;
  }
}
</style>
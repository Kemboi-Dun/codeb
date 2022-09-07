<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="app-body-wrapper">
    <RouterView />
  </div>
 
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
header {
  font-family: 'Poppins', sans-serif;
  
}
:root {
  --background-color-primary: #181818;
  --background-color-nav: rgba(0,0,0, 0.5);
  --background-color-secondary: #f8f8f8;
  --accent-color: #181818;
  --text-primary-color: #f8f8f8;
  --text-secondary-color: #181818;
  --element-size: 4rem;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-nav: rgba(255,255,255, 0.5);
 
  --background-color-primary: #f8f8f8;
  --background-color-secondary: #181818;
  --accent-color: #f8f8f8;
  --text-primary-color: #181818;
  --text-secondary-color: #f8f8f8;
}
.app-body-wrapper{
    background:  var(--background-color-primary);
  color: var(--text-primary-color);
  height: 100vh;
  }
</style>



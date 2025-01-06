<script setup lang="ts">
import AppBtn from '@/components/AppBtn.vue';
import DarkModeSwitch from '@/components/DarkModeSwitch.vue';
</script>

<template>
  <div class="greetings">
    <div class="mb-4">
      <h1 class="text-sm md:text-3xl">Frankie Michael</h1>
      <h3 class="font-bold">Full Stack Web Developer</h3>
    </div>
    <p>I build intricate, mobile-friendly websites and applications.</p>
    <div class="social flex items-center justify-center my-4 gap-2">
      <a href="https://www.github.com/frankiemichael" target="_blank"
        ><img alt="GitHub" src="@/assets/github-logo.svg" width="30" height="30" /></a
      ><a href="https://www.instagram.com/frankiemichaelwd" target="_blank"
        ><img alt="Instagram" src="@/assets/instagram.svg" width="30" height="30" /></a
      ><a href="https://www.linkedin.com/in/frankiemichael" target="_blank"
        ><img alt="LinkedIn" src="@/assets/li-logo.png" width="35" height="35"
      /></a>
    </div>
    <hr class="my-5" />
    <!--    <DarkModeSwitch />-->
    <h2>Portfolio</h2>
    <div class="item-wrapper">
      <h3>Surreal Succulents</h3>
    </div>
  </div>
</template>

<style scoped>
.greetings h1,
.greetings h2,
.greetings h3,
.greetings p {
  text-align: center;
}
</style>

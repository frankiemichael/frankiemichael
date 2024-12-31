<script setup lang="ts">
import AppBtn from '@/components/AppBtn.vue';
import DarkModeSwitch from '@/components/DarkModeSwitch.vue';
</script>

<template>
  <div class="greetings">
    <nav>
      <div class="flex gap-2 justify-center">
        <AppBtn class="hover:text-white text-primary">Portfolio</AppBtn>
        <AppBtn class="hover:text-white text-primary">Frameworks</AppBtn>
        <AppBtn class="hover:text-white text-primary">Languages</AppBtn>
      </div>
    </nav>
    <div class="mb-4">
      <h1 class="text-sm md:text-3xl">Frankie Michael</h1>
      <h3 class="font-bold">Full Stack Web Developer</h3>
    </div>
    <p>I build intricate, mobile-friendly websites and applications.</p>
    <div class="social flex items-center justify-center my-4">
      <a href="https://www.instagram.com/frankiemichaelwd" target="_blank"
        ><img alt="Instagram" src="@/assets/instagram.svg" width="30" height="30"
      /></a>
    </div>
    <!--    <hr class="my-5" />-->
    <!--    <DarkModeSwitch />-->
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

<script setup lang="ts"></script>

<template>
  <div class="greetings flex items-center flex-col py-2">
    <nav>
      <div class="flex gap-2 justify-center">
        <RouterLink to="/" class="hover:text-white text-primary flex items-center"
          >Portfolio</RouterLink
        >
        |
        <RouterLink
          class="hover:text-white text-primary flex items-center"
          to="/languagesandframeworks"
          >Languages & Frameworks</RouterLink
        >
      </div>
    </nav>
    <div class="mb-4">
      <h1 class="text-sm md:text-3xl">Frankie Michael</h1>
      <h3 class="font-bold">Full Stack Web Developer</h3>
    </div>
    <div class="social flex items-center justify-center my-4 gap-2">
      <a href="https://www.github.com/frankiemichael" target="_blank"
        ><img alt="GitHub" src="@/assets/github-logo.svg" width="30" height="30" /></a
      ><a href="https://www.instagram.com/frankiemichaelwd" target="_blank"
        ><img alt="Instagram" src="@/assets/instagram.svg" width="30" height="30" /></a
      ><a href="https://www.linkedin.com/in/frankiemichael" target="_blank"
        ><img alt="LinkedIn" src="@/assets/li-logo.png" width="35" height="35"
      /></a>
    </div>
    <p class="text-lg">
      Passionate full-stack developer with over 4 years experience across a range of industries
      including aerospace, education, food hygiene and e-commerce.
    </p>
  </div>
</template>

<style scoped>
.greetings h1,
.greetings h2,
.greetings h3,
.greetings p {
  text-align: center;
}
@media (min-width: 1024px) {
  .greetings {
    align-self: start;
    position: sticky;
    top: 0;
  }
}
</style>

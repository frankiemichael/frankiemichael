<script setup lang="ts"></script>

<template>
  <h2>Languages & Frameworks</h2>

  <div class="logo-container">
    <div class="logo-group">
      <a href="https://www.php.net/" target="_blank" class="logo-wrapper"
        >PHP<img src="@/assets/php-logo.svg" alt="PHP" class="logo"
      /></a>
      <a href="https://www.typescriptlang.org/" target="_blank" class="logo-wrapper"
        >TypeScript<img src="@/assets/typescript-logo.svg" alt="TypeScript" class="logo"
      /></a>
      <a href="https://www.javascript.com/" target="_blank" class="logo-wrapper"
        >JavaScript<img src="@/assets/javascript-logo.svg" alt="JavaScript" class="logo"
      /></a>
      <a href="https://www.python.org/" target="_blank" class="logo-wrapper"
        >Python<img src="@/assets/python-logo.svg" alt="Python" class="logo"
      /></a>
      <a href="https://www.java.com/" target="_blank" class="logo-wrapper"
        >Java<img src="@/assets/java-logo.svg" alt="Java" class="logo"
      /></a>
    </div>

    <div class="logo-group">
      <a href="https://laravel.com/" target="_blank" class="logo-wrapper"
        >Laravel<img src="@/assets/laravel-logo.svg" alt="Laravel" class="logo"
      /></a>
      <a href="https://vuejs.org/" target="_blank" class="logo-wrapper"
        >VueJs<img src="@/assets/vue-logo.svg" alt="Vue" class="logo"
      /></a>
      <a href="https://nuxt.com/" target="_blank" class="logo-wrapper"
        >Nuxt<img src="@/assets/nuxt-logo.svg" alt="Nuxt" class="logo"
      /></a>
      <a href="https://angularjs.org/" target="_blank" class="logo-wrapper"
        >AngularJs<img src="@/assets/angular-logo.svg" alt="Angular" class="logo"
      /></a>
    </div>

    <div class="logo-group">
      <a href="https://html.com/" target="_blank" class="logo-wrapper"
        >HTML<img src="@/assets/html-logo.svg" alt="HTML" class="logo"
      /></a>
      <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" class="logo-wrapper"
        >CSS<img src="@/assets/css-logo.svg" alt="CSS" class="logo"
      /></a>
      <a href="https://lesscss.org/" target="_blank" class="logo-wrapper"
        >Less<img src="@/assets/less-logo.svg" alt="Less" class="logo"
      /></a>
      <a href="https://sass-lang.com/" target="_blank" class="logo-wrapper"
        >Sass/Scss<img src="@/assets/sass-logo.svg" alt="Sass/Scss" class="logo"
      /></a>
      <a href="https://tailwindcss.com/" target="_blank" class="logo-wrapper"
        >Tailwind<img src="@/assets/tailwind-logo.svg" alt="Tailwind" class="logo"
      /></a>
    </div>

    <div class="logo-group">
      <a href="https://nodejs.org/en" target="_blank" class="logo-wrapper"
        >NodeJS<img src="@/assets/node-logo.svg" alt="NodeJS" class="logo"
      /></a>
      <a href="https://jquery.com/" target="_blank" class="logo-wrapper"
        >Jquery<img src="@/assets/jquery-logo.svg" alt="jQuery" class="logo" /></a
      ><a href="https://quasar.dev/" target="_blank" class="logo-wrapper"
        >Quasar<img src="@/assets/quasar-logo.svg" alt="Quasar" class="logo"
      /></a>
      <a href="https://capacitorjs.com/" target="_blank" class="logo-wrapper"
        >CapacitorJs<img src="@/assets/capacitorjs-logo.svg" alt="CapacitorJs" class="logo"
      /></a>
    </div>

    <div class="logo-group">
      <a href="https://vite.dev/" target="_blank" class="logo-wrapper"
        >Vite<img src="@/assets/vite-logo.svg" alt="Vite" class="logo"
      /></a>
      <a href="https://webpack.js.org/" target="_blank" class="logo-wrapper"
        >Webpack<img src="@/assets/webpack-logo.svg" alt="Webpack" class="logo"
      /></a>
    </div>

    <div class="logo-group">
      <a href="https://www.sql.org/" target="_blank" class="logo-wrapper"
        >SQL<img src="@/assets/sql-logo.svg" alt="SQL" class="logo"
      /></a>
      <a href="https://www.sqlite.org/" target="_blank" class="logo-wrapper"
        >SQLite<img src="@/assets/sqlite-logo.svg" alt="SQLite" class="logo"
      /></a>
    </div>
    <h2>Technologies & Other</h2>
    <ul class="list-disc">
      <li>Pinia</li>
      <li>Browser APIs e.g. local storage</li>
      <li>PWAs</li>
      <li>Service workers</li>
      <li>Websockets</li>
      <li>Event driven development</li>
      <li>REST APIs</li>
      <li>SEO</li>
      <li>Domains</li>
      <li>Server hosting</li>
      <li>Database hosting</li>
      <li></li>
    </ul>
  </div>
</template>

<style scoped>
.logo-container {
  display: block;
}

.logo-group {
  display: flex;
  gap: 3px;
  flex-wrap: wrap;
  margin: 20px 0;
}

.logo-container hr {
  margin: 20px 0;
}

.logo-wrapper {
  text-align: center;
  font-weight: 500;
}
</style>

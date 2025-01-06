<script setup lang="ts">
</script>

<template>
  <h1 class="text-center">Portfolio</h1>

  <div class="portfolio-item">
    <h2 class="mb-6">Nursery App - Laravel/Vue</h2>
    <img src="@/assets/nurseryapp-full.png" width="500" /><span class="font-bold">It is currently a private application used by one company.</span> <br />
    <a class="text-primary" href="https://admin.surrealsucculents.co.uk" target="_blank">admin.surrealsucculents.co.uk</a>

    <p class="my-5 text-xl">
      This application was a custom one made specifically for a local business to run their plant nursery. It contains the following features:
      <ul class="mx-auto w-fit text-left">
        <li>The ability to add plants to the application to monitor and track, along with pictures of the plant</li>
        <li>An area that allows you to add plants to a cart-type system to print sticky labels in bulk to be used at their retail outlet</li>
        <li>Calendar for planning events and staff holiday</li>
        <li>Task manager to create jobs at the nursery and drag-and-drop staff to these tasks</li>
        <li>Ability to add documents such as company policies and training</li>
        <li>A HR system to manage staff</li>
        <li>Ability to log a watering and automatically mark the plants in an area as watered</li>
        <li>Same as above but pesticides</li>
        <li>A working notification system with emails</li>
      </ul>
    </p>
  </div>
  <hr />
  <div class="portfolio-item">
    <h2 class="mb-6">Surreal Succulents - Shopify</h2>
    <a class="text-primary" href="https://www.surrealsucculents.co.uk" target="_blank"
      ><img
        src="@/assets/ss-logo.png"
        width="300"
        alt="Surreal Succulents Logo"
      />www.surrealsucculents.co.uk</a
    >
    <p class="my-5 text-xl">
      Another local business based in my hometown. They originally had a site up on Wix which after
      seeing the site I created for Surreal Succulents, wanted to convert to Shopify.
    </p>
    <div>
      <img width="500" src="@/assets/ss-full.png" />
    </div>
  </div>
  <hr />
  <div class="portfolio-item">
    <h2 class="mb-6">Little Green Seaweed - Shopify</h2>
    <a class="text-primary" href="https://www.littlegreenseaweed.com" target="_blank"
      ><img
        src="@/assets/lgs-logo.png"
        class="bg-white"
        width="300"
        alt="Little Green Seaweed Logo"
      />www.littlegreenseaweed.com</a
    >
    <p class="my-5 text-xl">
      A local business based in my hometown of Penzance, Cornwall, UK. This site was a conversion of
      Wordpress to Shopify with over 1000 products. It is scoring very high on SEO and has
      maintained it's position of 1st in Google for succulents in the UK.
    </p>
    <div>
      <img width="500" src="@/assets/lgs-full.png" />
    </div>
  </div>
</template>

<style scoped>
.portfolio-item {
  padding: 2rem 0;
  text-align: center;
}
.portfolio-item img {
  margin: auto;
}
h3 {
  font-size: 2rem;
  line-height: 2.2rem;
}

ul li {
  list-style-type: square;
}
</style>

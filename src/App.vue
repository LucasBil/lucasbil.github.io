<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Header from './components/HeaderComponent.vue'
  import Footer from './components/FooterComponent.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="grow">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <Header />
      <main>
        <h1 class="animate__animated animate__fadeIn">Welcome to My Game Dev Portfolio</h1>
        <DarkModeToggle />
        <LanguageSwitcher />
        <GameList />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '../Components/Header.vue';
  //import Footer from '~/components/common/Footer.vue';
  //import DarkModeToggle from '~/components/ui/DarkModeToggle.vue';
  //import LanguageSwitcher from '~/components/ui/LanguageSwitcher.vue';
  //import GameList from '~/components/game/GameList.vue';
  </script>
  
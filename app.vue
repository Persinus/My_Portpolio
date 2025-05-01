<template>
  <div :class="{ dark: darkMode }">
    <NuxtPage />
  </div>
</template>

<script setup>
import { usePreferencesStore } from './store/preferencesStore'; // Import Pinia store

// Sử dụng Pinia store
const preferencesStore = usePreferencesStore();

// Trạng thái Dark Mode
const darkMode = preferencesStore.darkMode;
</script>

<style>
/* Áp dụng style cho chế độ Dark Mode */
.dark {
  background-color: #000000;
  color: #ffffff;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
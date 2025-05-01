<template>
    <button @click="toggleDarkMode">
      {{ isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode' }}
    </button>
  </template>
  
  <script setup>
  import { useDarkModeStore } from '../store/darkModeStore';
  
  const darkModeStore = useDarkModeStore();
  const { isDarkMode, toggleDarkMode } = darkModeStore;
  </script>
  
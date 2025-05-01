<template>
    <select v-model="currentLanguage" @change="changeLanguage($event.target.value)">
      <option v-for="lang in availableLanguages" :key="lang" :value="lang">
        {{ lang.toUpperCase() }}
      </option>
    </select>
  </template>
  
  <script setup>
  import { useLanguageStore } from '../Store/language';
  
  const languageStore = useLanguageStore();
  const { currentLanguage, availableLanguages, setLanguage } = languageStore;
  
  function changeLanguage(lang) {
    setLanguage(lang);
  }
  </script>
  
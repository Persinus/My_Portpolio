<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <app-header class="flex justify-between items-center p-4">
    <div class="text-lg font-bold">My Game Dev Portfolio</div>
    <div class="flex items-center gap-4">
      <!-- Dark Mode Switch -->
      <label class="switch">
        <input type="checkbox" v-model="isDarkMode" @change="toggleDarkMode" />
        <span class="slider"></span>
      </label>

      <!-- Language Selector -->
      <select v-model="currentLanguage" @change="changeLanguage" class="px-4 py-2 border rounded">
        <option v-for="lang in availableLanguages" :key="lang" :value="lang">
          {{ lang.toUpperCase() }}
        </option>
      </select>
    </div>
  </app-header>
</template>

<script setup>
import { useDarkModeStore } from '../Store/darkmode';
import { useLanguageStore } from '../Store/language';

// Dark Mode Store
const darkModeStore = useDarkModeStore();
const isDarkMode = darkModeStore.isDarkMode;
const toggleDarkMode = darkModeStore.toggleDarkMode;

// Language Store
const languageStore = useLanguageStore();
const currentLanguage = languageStore.currentLanguage;
const availableLanguages = languageStore.availableLanguages;
const setLanguage = languageStore.setLanguage;

function changeLanguage(event) {
  setLanguage(event.target.value);
}
</script>

<style scoped>
/* Switch styles */
.switch {
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 20px;
}

.slider:before {
  position: absolute;
  content: '';
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:checked + .slider:before {
  transform: translateX(14px);
}

/* Dark mode styles */
body.dark {
  background-color: #121212;
  color: #ffffff;
}
</style>

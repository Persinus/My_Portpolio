import { defineStore } from 'pinia';

export const usePreferencesStore = defineStore('preferences', {
  state: () => ({
    darkMode: false, // Trạng thái Dark Mode
    currentLanguage: 'en', // Ngôn ngữ hiện tại
    availableLanguages: ['en', 'vi'], // Danh sách ngôn ngữ
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode; // Đảo trạng thái Dark Mode
    },
    setLanguage(lang) {
      this.currentLanguage = lang; // Cập nhật ngôn ngữ hiện tại
    },
  },
});
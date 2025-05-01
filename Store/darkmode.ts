import { defineStore } from 'pinia';

export const useDarkModeStore = defineStore('darkmode', {
  state: () => ({
    isDarkMode: false, // Trạng thái dark mode
  }),
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      // Cập nhật class trên body
      document.body.classList.toggle('dark', this.isDarkMode);
    },
  },
});

import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: 'en', // Ngôn ngữ mặc định
    availableLanguages: ['en', 'vi'], // Danh sách các ngôn ngữ
  }),
  actions: {
    setLanguage(lang: string) {
      if (this.availableLanguages.includes(lang)) {
        this.currentLanguage = lang;
      }
    },
  },
});

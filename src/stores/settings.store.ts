import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useSettingsStore = defineStore('settings', () => {
  const darkMode = ref<boolean>(false);

  const isDarkMode = computed(() => {
    return darkMode.value;
  });
  function setDarkMode(value: boolean) {
    darkMode.value = value;
  }

  function toggleDarkMode() {
    darkMode.value = !darkMode.value;
  }

  return { isDarkMode, setDarkMode, darkMode, toggleDarkMode };
});

<script lang="ts" setup>
import { useSettingsStore } from '@/stores/settings.store.ts';

const settingsStore = useSettingsStore();

const toggle = () => {
  settingsStore.toggleDarkMode();
};
</script>

<template>
  <div class="flex items-center gap-2">
    <span>Dark Mode</span>
    <div
      class="w-14 h-8 flex items-center rounded-full bg-dark-light p-1 duration-300 cursor-pointer"
      :class="{ 'bg-green-500': settingsStore.isDarkMode }"
      :aria-checked="settingsStore.isDarkMode"
      @click="toggle"
    >
      <div
        class="bg-white w-6 h-6 rounded-full shadow-md transform duration-300 flex items-center justify-center"
        :class="{ 'translate-x-6': settingsStore.isDarkMode }"
      >
        <Transition>
          <img
            alt="Dark Mode"
            src="@/assets/dark-mode.svg"
            width="20"
            height="20"
            class="transition-transform duration-300 ease-in-out"
            :class="{ 'scale-100': settingsStore.isDarkMode, 'scale-0': !settingsStore.isDarkMode }"
            v-if="settingsStore.isDarkMode"
          />
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  outline: none;
  user-select: none; /* Prevents selection */
  -webkit-user-drag: none; /* Prevents dragging in WebKit browsers */
}

img:focus {
  outline: none;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 200ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

import { ref, watchEffect, reactive } from 'vue';

const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + "px";
}

export function useDarkMode() {
  const isDarkMode = ref(false);

  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  }

  // Initialize dark mode based on localStorage or system preference
  watchEffect(() => {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!localStorage.getItem('color-theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      isDarkMode.value = true;
      document.documentElement.classList.add('dark');
    } else {
      isDarkMode.value = false;
      document.documentElement.classList.remove('dark');
    }
  });

  return {
    isDarkMode,
    toggleDarkMode,
  };
}

export const currentSelection = reactive({
  language: 'ENG',

  switchLanguage() {
    this.language = this.language === 'ENG' ? 'ZH' : 'ENG';
  },
})
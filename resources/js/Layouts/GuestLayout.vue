<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
import Button from '@/Components/Button.vue';
import { useDarkMode, currentSelection } from '@/Composables'
import { SunIcon, MoonIcon, LanguageIcon } from '@/Components/Icons/outline';
const { isDarkMode, toggleDarkMode } = useDarkMode();
</script>

<template>
    <div class="min-h-screen flex justify-center pt-6 sm:pt-0 bg-white dark:bg-gray-8">
        <div class="flex justify-center w-full sm:max-w-[360px]">
            <div class=" w-full">
                <nav class="w-full">
                    <!-- Primary Navigation Menu -->
                    <div class="mx-auto px-4 py-3.5">
                        <div class="flex justify-end">
                            <div class="flex items-center ms-6">
                                <div class="relative flex gap-4">
                                    <!-- Dark mode toggle -->
                                    <Button
                                        :type="'button'"
                                        :variant="'icon'"
                                        aria-label="Toggle dark mode"
                                        @click="toggleDarkMode"
                                        >
                                        <SunIcon v-show="isDarkMode" class="w-5 h-5 text-gray-5 dark:text-white"/>
                                        <MoonIcon v-show="!isDarkMode" class="w-5 h-5 text-gray-5 dark:text-white"/>
                                    </Button>

                                    <Button
                                        :type="'button'"
                                        :variant="'icon'"
                                        aria-label="Toggle translation"
                                        @click="currentSelection.switchLanguage()"
                                    >
                                        <LanguageIcon class="w-5 h-5 text-gray-5 dark:text-white"/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div
                    class="w-full sm:max-w-md overflow-hidden sm:rounded-lg"
                >
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

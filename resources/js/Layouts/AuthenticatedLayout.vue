<script setup>
import { ref } from 'vue';
import Button from '@/Components/Button.vue';
import { Link } from '@inertiajs/vue3';
import { useDarkMode, currentSelection } from '@/Composables'
import { SunIcon, MoonIcon, LanguageIcon, LogoutIcon } from '@/Components/Icons/outline';

const { isDarkMode, toggleDarkMode } = useDarkMode();
const showingNavigationDropdown = ref(false);
</script>

<template>
    <div class="min-h-screen flex justify-center bg-white dark:bg-gray-8">
        <div class="flex justify-center w-full sm:max-w-[360px]">
            <div class=" w-full">
                <nav>
                    <!-- Primary Navigation Menu -->
                    <div class="mx-auto px-4 py-3.5">
                        <div class="flex justify-between">
                            <div class="flex">
                                <!-- Website title -->
                                <div class="shrink-0 flex items-center">
                                    <Link :href="route('dashboard')">
                                        <span class="text-lg font-bold text-gray-8 dark:text-white">Minilotto.info</span>
                                    </Link>
                                </div>
                            </div>

                            <div class="flex items-center">
                                <div class="relative flex gap-1 items-center justify-between">
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

                                    <Button
                                        :href="route('logout')"
                                        method="post"
                                        as="button"
                                        :variant="'icon'"
                                    >
                                        <LogoutIcon class="w-5 h-5 text-gray-5 dark:text-white"/>
                                    </Button>
                                    
                                    <!-- <DropdownLink :href="route('logout')" method="post" as="button">
                                        <LogoutIcon class="w-5 h-5 m-3 text-gray-5 dark:text-white"/>
                                    </DropdownLink> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <!-- Page Heading
                <header class="bg-white dark:bg-gray-800 shadow" v-if="$slots.header">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <slot name="header" />
                    </div>
                </header> -->

                <!-- Page Content -->
                <main>
                    <slot />
                </main>
            </div>
        </div>
    </div>
</template>
